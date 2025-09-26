const WebSocket = require('ws');
const axios = require('axios');

// ⚠️ SECURITY WARNING: Change these credentials immediately!
// These are now public and should be revoked ASAP
const API_KEY = 'PKCVVXAKS36NK3CPW934';
const API_SECRET = 'v6c2IvSDNQQNsKVdSjc2DNvXjbE4OVjx7py76nQO';

class QuickStockTracker {
    constructor() {
        this.wsUrl = 'wss://stream.data.alpaca.markets/v2/iex'; // Free IEX feed
        this.stockData = new Map();
        this.previousCloses = new Map();
        this.ws = null;
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

    displayStockData(symbol) {
        const data = this.stockData.get(symbol);
        const previousClose = this.previousCloses.get(symbol);
        
        if (!data) return;

        const percentChange = this.calculatePercentChange(data.price, previousClose);
        const changeAmount = previousClose ? (data.price - previousClose) : null;
        
        console.clear();
        console.log('🚨 WARNING: Change your API credentials immediately! 🚨');
        console.log('='.repeat(60));
        console.log(`📈 REAL-TIME TRACKER - ${symbol}`);
        console.log('='.repeat(60));
        console.log(`💰 Current Price: $${data.price.toFixed(2)}`);
        
        if (previousClose) {
            console.log(`📋 Previous Close: $${previousClose.toFixed(2)}`);
            
            if (changeAmount !== null) {
                const changeSymbol = changeAmount >= 0 ? '📈' : '📉';
                const changeText = `${changeSymbol} $${Math.abs(changeAmount).toFixed(2)} (${Math.abs(percentChange).toFixed(2)}%)`;
                
                if (changeAmount >= 0) {
                    console.log(`🟢 Change: +${changeText}`);
                } else {
                    console.log(`🔴 Change: -${changeText}`);
                }
            }
        }
        
        if (data.volume) {
            console.log(`📊 Volume: ${data.volume.toLocaleString()}`);
        }
        console.log(`⏰ Last Update: ${new Date(data.timestamp).toLocaleTimeString()}`);
        console.log('='.repeat(60));
        console.log('Press Ctrl+C to exit');
    }

    async connect() {
        return new Promise((resolve, reject) => {
            console.log('🔗 Connecting to Alpaca WebSocket...');
            this.ws = new WebSocket(this.wsUrl);

            this.ws.on('open', () => {
                console.log('✅ Connected! Authenticating...');
                
                const authMessage = {
                    action: 'auth',
                    key: API_KEY,
                    secret: API_SECRET
                };
                
                this.ws.send(JSON.stringify(authMessage));
            });

            this.ws.on('message', (data) => {
                try {
                    const messages = JSON.parse(data);
                    
                    for (const message of messages) {
                        this.handleMessage(message, resolve, reject);
                    }
                } catch (error) {
                    console.error('❌ Error parsing message:', error);
                }
            });

            this.ws.on('error', (error) => {
                console.error('❌ WebSocket error:', error);
                reject(error);
            });

            this.ws.on('close', () => {
                console.log('🔌 Connection closed');
            });
        });
    }

    handleMessage(message, resolve, reject) {
        switch (message.T) {
            case 'success':
                if (message.msg === 'authenticated') {
                    console.log('🎉 Authenticated successfully!');
                    resolve();
                }
                break;
                
            case 'error':
                console.error('❌ Error:', message.msg);
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
                console.log('📋 Subscribed:', Object.keys(message).filter(k => k !== 'T' && message[k].length > 0));
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
        
        this.displayStockData(symbol);
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
            
            this.displayStockData(symbol);
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
        
        this.displayStockData(symbol);
    }

    async subscribe(symbol) {
        console.log(`📊 Getting previous close for ${symbol}...`);
        await this.getPreviousClose(symbol);

        const subscribeMessage = {
            action: 'subscribe',
            trades: [symbol],
            quotes: [symbol],
            bars: [symbol]
        };

        this.ws.send(JSON.stringify(subscribeMessage));
        console.log(`✅ Subscribed to ${symbol} data streams`);
    }

    close() {
        if (this.ws) {
            this.ws.close();
        }
    }
}

async function main() {
    console.log('🚨 SECURITY WARNING: Your API credentials are now public!');
    console.log('🔒 Please revoke them immediately and generate new ones!');
    console.log('');
    
    const ticker = process.argv[2] || 'SPY';
    const tracker = new QuickStockTracker();

    try {
        await tracker.connect();
        await tracker.subscribe(ticker.toUpperCase());
        console.log(`🚀 Now tracking ${ticker.toUpperCase()}...`);
        
    } catch (error) {
        console.error('❌ Failed to start:', error.message);
        
        if (error.message.includes('401') || error.message.includes('authentication')) {
            console.log('💡 This might be because your credentials are invalid or have been revoked.');
            console.log('💡 Please check your Alpaca dashboard and generate new API keys.');
        }
        
        process.exit(1);
    }

    process.on('SIGINT', () => {
        console.log('\n👋 Shutting down...');
        tracker.close();
        process.exit(0);
    });
}

// Run with: node script.js [TICKER]
// Example: node script.js TSLA
main().catch(console.error);