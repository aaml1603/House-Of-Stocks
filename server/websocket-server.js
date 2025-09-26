const WebSocket = require('ws');
const axios = require('axios');
const http = require('http');

// Environment variables for security (fallback to hardcoded for development)
const API_KEY = process.env.ALPACA_API_KEY || 'PKCVVXAKS36NK3CPW934';
const API_SECRET = process.env.ALPACA_API_SECRET || 'v6c2IvSDNQQNsKVdSjc2DNvXjbE4OVjx7py76nQO';
const PORT = process.env.PORT || 8080;

class StockDataServer {
    constructor() {
        this.alpacaWsUrl = 'wss://stream.data.alpaca.markets/v2/iex';
        this.alpacaWs = null;
        this.server = null;
        this.wss = null;
        this.clients = new Set();
        this.stockData = new Map();
        this.previousCloses = new Map();
        this.isConnectedToAlpaca = false;
        
        // Default stock symbols to track
        this.symbols = ['AAPL', 'AMZN', 'SPY', 'TSLA', 'GOOGL', 'MSFT', 'NVDA', 'META', 'QQQ', 'NFLX', 'AMD', 'CRM'];
    }

    async getPreviousClose(symbol) {
        try {
            const today = new Date();
            const yesterday = new Date(today);
            yesterday.setDate(yesterday.getDate() - 1);
            
            const endDate = yesterday.toISOString().split('T')[0];
            const startDate = new Date(yesterday);
            startDate.setDate(startDate.getDate() - 5);
            const startDateStr = startDate.toISOString().split('T')[0];

            const url = `https://data.alpaca.markets/v2/stocks/${symbol}/bars?start=${startDateStr}&end=${endDate}&timeframe=1Day&limit=5`;
            
            const response = await axios.get(url, {
                headers: {
                    'APCA-API-KEY-ID': API_KEY,
                    'APCA-API-SECRET-KEY': API_SECRET
                }
            });

            const bars = response.data.bars;
            if (bars && bars.length > 0) {
                const previousClose = bars[bars.length - 1].c;
                this.previousCloses.set(symbol, previousClose);
                console.log(`📊 Previous close for ${symbol}: $${previousClose.toFixed(2)}`);
                return previousClose;
            }
            return null;
        } catch (error) {
            console.error(`❌ Error fetching previous close for ${symbol}:`, error.response?.data || error.message);
            return null;
        }
    }

    calculatePercentChange(currentPrice, previousClose) {
        if (!previousClose || previousClose === 0) return null;
        return ((currentPrice - previousClose) / previousClose) * 100;
    }

    formatStockData(symbol) {
        const data = this.stockData.get(symbol);
        const previousClose = this.previousCloses.get(symbol);
        
        if (!data) return null;

        const percentChange = this.calculatePercentChange(data.price, previousClose);
        const changeAmount = previousClose ? (data.price - previousClose) : null;
        
        return {
            symbol,
            price: `$${data.price.toFixed(2)}`,
            change: changeAmount ? `${changeAmount >= 0 ? '+' : ''}${changeAmount.toFixed(2)}` : '+0.00',
            changePercent: percentChange ? `${percentChange >= 0 ? '+' : ''}${percentChange.toFixed(2)}%` : '+0.00%',
            volume: data.volume || 0,
            timestamp: data.timestamp,
            lastUpdate: new Date().toISOString()
        };
    }

    broadcastToClients(data) {
        const message = JSON.stringify(data);
        
        this.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    }

    async connectToAlpaca() {
        return new Promise((resolve, reject) => {
            console.log('🔗 Connecting to Alpaca WebSocket...');
            this.alpacaWs = new WebSocket(this.alpacaWsUrl);

            this.alpacaWs.on('open', () => {
                console.log('✅ Connected to Alpaca! Authenticating...');
                
                const authMessage = {
                    action: 'auth',
                    key: API_KEY,
                    secret: API_SECRET
                };
                
                this.alpacaWs.send(JSON.stringify(authMessage));
            });

            this.alpacaWs.on('message', (data) => {
                try {
                    const messages = JSON.parse(data);
                    
                    for (const message of messages) {
                        this.handleAlpacaMessage(message, resolve, reject);
                    }
                } catch (error) {
                    console.error('❌ Error parsing Alpaca message:', error);
                }
            });

            this.alpacaWs.on('error', (error) => {
                console.error('❌ Alpaca WebSocket error:', error);
                this.isConnectedToAlpaca = false;
                reject(error);
            });

            this.alpacaWs.on('close', () => {
                console.log('🔌 Alpaca connection closed');
                this.isConnectedToAlpaca = false;
                
                // Attempt to reconnect after 5 seconds
                setTimeout(() => {
                    console.log('🔄 Attempting to reconnect to Alpaca...');
                    this.connectToAlpaca();
                }, 5000);
            });
        });
    }

    handleAlpacaMessage(message, resolve, reject) {
        switch (message.T) {
            case 'success':
                if (message.msg === 'authenticated') {
                    console.log('🎉 Authenticated with Alpaca successfully!');
                    this.isConnectedToAlpaca = true;
                    resolve();
                }
                break;
                
            case 'error':
                console.error('❌ Alpaca Error:', message.msg);
                this.isConnectedToAlpaca = false;
                reject(new Error(message.msg));
                break;
                
            case 't': // Trade
                this.handleTrade(message);
                break;
                
            case 'q': // Quote
                this.handleQuote(message);
                break;
                
            case 'b': // Bar
                this.handleBar(message);
                break;
                
            case 'subscription':
                console.log('📋 Subscribed to:', Object.keys(message).filter(k => k !== 'T' && message[k].length > 0));
                break;
        }
    }

    handleTrade(trade) {
        const symbol = trade.S;
        const existing = this.stockData.get(symbol) || { volume: 0 };
        
        this.stockData.set(symbol, {
            price: trade.p,
            volume: existing.volume + trade.s,
            timestamp: trade.t,
            type: 'trade'
        });
        
        this.broadcastStockUpdate(symbol);
    }

    handleQuote(quote) {
        const symbol = quote.S;
        const existing = this.stockData.get(symbol) || {};
        
        // Use mid-point if no trade data yet
        if (!existing.price) {
            const midPrice = (quote.bp + quote.ap) / 2;
            
            this.stockData.set(symbol, {
                ...existing,
                price: midPrice,
                bid: quote.bp,
                ask: quote.ap,
                timestamp: quote.t,
                type: 'quote'
            });
            
            this.broadcastStockUpdate(symbol);
        }
    }

    handleBar(bar) {
        const symbol = bar.S;
        
        this.stockData.set(symbol, {
            price: bar.c,
            volume: bar.v,
            timestamp: bar.t,
            type: 'bar'
        });
        
        this.broadcastStockUpdate(symbol);
    }

    broadcastStockUpdate(symbol) {
        const formattedData = this.formatStockData(symbol);
        if (formattedData) {
            this.broadcastToClients({
                type: 'stock_update',
                data: formattedData
            });
        }
    }

    async subscribeToStocks() {
        console.log('📊 Getting previous closes for all stocks...');
        
        // Get previous closes for all symbols
        await Promise.all(
            this.symbols.map(symbol => this.getPreviousClose(symbol))
        );

        // Subscribe to all symbols
        const subscribeMessage = {
            action: 'subscribe',
            trades: this.symbols,
            quotes: this.symbols,
            bars: this.symbols
        };

        this.alpacaWs.send(JSON.stringify(subscribeMessage));
        console.log(`✅ Subscribed to ${this.symbols.length} stock data streams`);
    }

    startWebSocketServer() {
        // Create HTTP server
        this.server = http.createServer();
        
        // Create WebSocket server
        this.wss = new WebSocket.Server({ server: this.server });

        this.wss.on('connection', (ws, req) => {
            console.log(`🌐 New client connected from ${req.socket.remoteAddress}`);
            this.clients.add(ws);

            // Send current stock data to new client
            const allStockData = [];
            for (const symbol of this.symbols) {
                const formattedData = this.formatStockData(symbol);
                if (formattedData) {
                    allStockData.push(formattedData);
                }
            }

            if (allStockData.length > 0) {
                ws.send(JSON.stringify({
                    type: 'initial_data',
                    data: allStockData
                }));
            }

            // Send connection status
            ws.send(JSON.stringify({
                type: 'connection_status',
                connected: this.isConnectedToAlpaca,
                message: this.isConnectedToAlpaca ? 'Connected to live data' : 'Connecting to live data...'
            }));

            ws.on('close', () => {
                console.log('🔌 Client disconnected');
                this.clients.delete(ws);
            });

            ws.on('error', (error) => {
                console.error('❌ Client WebSocket error:', error);
                this.clients.delete(ws);
            });
        });

        this.server.listen(PORT, () => {
            console.log(`🚀 WebSocket server running on port ${PORT}`);
            console.log(`📡 Clients can connect to: ws://localhost:${PORT}`);
        });
    }

    async start() {
        try {
            console.log('🔥 Starting Stock Data Server...');
            
            // Start the WebSocket server for clients
            this.startWebSocketServer();
            
            // Connect to Alpaca
            await this.connectToAlpaca();
            
            // Subscribe to stock data
            await this.subscribeToStocks();
            
            console.log('✅ Stock Data Server is running!');
            console.log(`📊 Tracking ${this.symbols.length} symbols: ${this.symbols.join(', ')}`);
            
        } catch (error) {
            console.error('❌ Failed to start server:', error.message);
            
            if (error.message.includes('401') || error.message.includes('authentication')) {
                console.log('💡 This might be because your Alpaca credentials are invalid.');
                console.log('💡 Please check your API keys and generate new ones if needed.');
            }
            
            process.exit(1);
        }
    }

    stop() {
        console.log('👋 Shutting down Stock Data Server...');
        
        if (this.alpacaWs) {
            this.alpacaWs.close();
        }
        
        if (this.wss) {
            this.wss.close();
        }
        
        if (this.server) {
            this.server.close();
        }
    }
}

// Create and start the server
const server = new StockDataServer();

// Handle graceful shutdown
process.on('SIGINT', () => {
    server.stop();
    process.exit(0);
});

process.on('SIGTERM', () => {
    server.stop();
    process.exit(0);
});

// Start the server
server.start().catch(console.error);

module.exports = StockDataServer;
