export interface Env {
  // Durable Object binding
  STOCK_ROOM: DurableObjectNamespace;
  
  // Environment variables
  ALPACA_API_KEY: string;
  ALPACA_API_SECRET: string;
  POLYGON_API_KEY: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    
    // Handle WebSocket upgrade requests
    if (request.headers.get("Upgrade") === "websocket") {
      return handleWebSocket(request, env);
    }
    
    // Handle HTTP requests
    if (url.pathname === "/api/health") {
      return new Response("Stock WebSocket server is running", { status: 200 });
    }
    
    return new Response("Not found", { status: 404 });
  },
};

async function handleWebSocket(request: Request, env: Env): Promise<Response> {
  // Create or get the Durable Object for the stock room
  const roomId = env.STOCK_ROOM.idFromName("main-stock-room");
  const stockRoom = env.STOCK_ROOM.get(roomId);
  
  // Forward the WebSocket request to the Durable Object
  return stockRoom.fetch(request);
}

// Durable Object class for managing WebSocket connections and stock data
export class StockRoom {
  private state: DurableObjectState;
  private env: Env;
  private sessions: Set<WebSocket>;
  private stockData: Map<string, any>;
  private previousCloses: Map<string, number>;
  private alpacaWs: WebSocket | null = null;
  private isConnectedToAlpaca = false;
  private symbols = ['AAPL', 'AMZN', 'SPY', 'TSLA', 'GOOGL', 'MSFT', 'NVDA', 'META', 'QQQ', 'NFLX', 'AMD', 'CRM'];

  constructor(state: DurableObjectState, env: Env) {
    this.state = state;
    this.env = env;
    this.sessions = new Set();
    this.stockData = new Map();
    this.previousCloses = new Map();
    
    // Initialize Alpaca connection when the object starts
    this.connectToAlpaca();
  }

  async fetch(request: Request): Promise<Response> {
    const webSocketPair = new WebSocketPair();
    const [client, server] = Object.values(webSocketPair);

    // Accept the WebSocket connection
    server.accept();
    
    // Add to active sessions
    this.sessions.add(server);
    
    // Send initial data to new client
    this.sendInitialData(server);
    
    // Handle messages from client
    server.addEventListener("message", (event) => {
      // Handle client messages if needed
      console.log("Received message from client:", event.data);
    });
    
    // Handle client disconnect
    server.addEventListener("close", () => {
      this.sessions.delete(server);
      console.log("Client disconnected. Active sessions:", this.sessions.size);
    });
    
    server.addEventListener("error", (event) => {
      console.error("WebSocket error:", event);
      this.sessions.delete(server);
    });

    return new Response(null, {
      status: 101,
      webSocket: client,
    });
  }

  private async connectToAlpaca() {
    try {
      console.log('🔗 Connecting to Alpaca WebSocket...');
      
      this.alpacaWs = new WebSocket('wss://stream.data.alpaca.markets/v2/iex');
      
      this.alpacaWs.addEventListener('open', () => {
        console.log('✅ Connected to Alpaca! Authenticating...');
        
        const authMessage = {
          action: 'auth',
          key: this.env.ALPACA_API_KEY,
          secret: this.env.ALPACA_API_SECRET
        };
        
        this.alpacaWs?.send(JSON.stringify(authMessage));
      });
      
      this.alpacaWs.addEventListener('message', (event) => {
        this.handleAlpacaMessage(event.data);
      });
      
      this.alpacaWs.addEventListener('error', (event) => {
        console.error('❌ Alpaca WebSocket error:', event);
        this.isConnectedToAlpaca = false;
      });
      
      this.alpacaWs.addEventListener('close', () => {
        console.log('🔌 Alpaca connection closed');
        this.isConnectedToAlpaca = false;
        
        // Attempt to reconnect after 5 seconds
        setTimeout(() => {
          console.log('🔄 Attempting to reconnect to Alpaca...');
          this.connectToAlpaca();
        }, 5000);
      });
      
    } catch (error) {
      console.error('Failed to connect to Alpaca:', error);
    }
  }

  private handleAlpacaMessage(data: string) {
    try {
      const messages = JSON.parse(data);
      
      for (const message of messages) {
        switch (message.T) {
          case 'success':
            if (message.msg === 'authenticated') {
              console.log('🎉 Authenticated with Alpaca successfully!');
              this.isConnectedToAlpaca = true;
              this.subscribeToStocks();
            }
            break;
            
          case 'error':
            console.error('❌ Alpaca Error:', message.msg);
            this.isConnectedToAlpaca = false;
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
        }
      }
    } catch (error) {
      console.error('❌ Error parsing Alpaca message:', error);
    }
  }

  private async subscribeToStocks() {
    console.log('📊 Getting previous closes for all stocks...');
    
    // Get previous closes for all symbols
    await Promise.all(
      this.symbols.map(symbol => this.getPreviousClose(symbol))
    );

    const subscribeMessage = {
      action: 'subscribe',
      trades: this.symbols,
      quotes: this.symbols,
      bars: this.symbols
    };

    this.alpacaWs?.send(JSON.stringify(subscribeMessage));
    console.log(`✅ Subscribed to ${this.symbols.length} stock data streams`);
  }

  private async getPreviousClose(symbol: string): Promise<number | null> {
    try {
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      
      const endDate = yesterday.toISOString().split('T')[0];
      const startDate = new Date(yesterday);
      startDate.setDate(startDate.getDate() - 5);
      const startDateStr = startDate.toISOString().split('T')[0];

      const url = `https://data.alpaca.markets/v2/stocks/${symbol}/bars?start=${startDateStr}&end=${endDate}&timeframe=1Day&limit=5`;
      
      const response = await fetch(url, {
        headers: {
          'APCA-API-KEY-ID': this.env.ALPACA_API_KEY,
          'APCA-API-SECRET-KEY': this.env.ALPACA_API_SECRET
        }
      });

      if (!response.ok) {
        console.error(`❌ Failed to fetch previous close for ${symbol}:`, response.status);
        return null;
      }

      const data = await response.json();
      const bars = data.bars;
      if (bars && bars.length > 0) {
        const previousClose = bars[bars.length - 1].c;
        this.previousCloses.set(symbol, previousClose);
        console.log(`📊 Previous close for ${symbol}: $${previousClose.toFixed(2)}`);
        return previousClose;
      }
      return null;
    } catch (error) {
      console.error(`❌ Error fetching previous close for ${symbol}:`, error);
      return null;
    }
  }

  private calculatePercentChange(currentPrice: number, previousClose: number): number | null {
    if (!previousClose || previousClose === 0) return null;
    return ((currentPrice - previousClose) / previousClose) * 100;
  }

  private handleTrade(trade: any) {
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

  private handleQuote(quote: any) {
    const symbol = quote.S;
    const existing = this.stockData.get(symbol) || {};
    
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

  private handleBar(bar: any) {
    const symbol = bar.S;
    
    this.stockData.set(symbol, {
      price: bar.c,
      volume: bar.v,
      timestamp: bar.t,
      type: 'bar'
    });
    
    this.broadcastStockUpdate(symbol);
  }

  private broadcastStockUpdate(symbol: string) {
    const data = this.stockData.get(symbol);
    const previousClose = this.previousCloses.get(symbol);
    if (!data) return;

    const percentChange = this.calculatePercentChange(data.price, previousClose || 0);
    const changeAmount = previousClose ? (data.price - previousClose) : 0;

    const formattedData = {
      symbol,
      price: `$${data.price.toFixed(2)}`,
      change: changeAmount ? `${changeAmount >= 0 ? '+' : ''}${changeAmount.toFixed(2)}` : '+0.00',
      changePercent: percentChange ? `${percentChange >= 0 ? '+' : ''}${percentChange.toFixed(2)}%` : '+0.00%',
      volume: data.volume || 0,
      timestamp: data.timestamp,
      lastUpdate: new Date().toISOString()
    };

    const message = JSON.stringify({
      type: 'stock_update',
      data: formattedData
    });

    // Broadcast to all connected clients
    this.sessions.forEach(session => {
      try {
        session.send(message);
      } catch (error) {
        console.error('Error sending message to client:', error);
        this.sessions.delete(session);
      }
    });
  }

  private sendInitialData(client: WebSocket) {
    // Send connection status
    client.send(JSON.stringify({
      type: 'connection_status',
      connected: this.isConnectedToAlpaca,
      message: this.isConnectedToAlpaca ? 'Connected to live data' : 'Connecting to live data...'
    }));

    // Send current stock data
    const allStockData: any[] = [];
    for (const symbol of this.symbols) {
      const data = this.stockData.get(symbol);
      const previousClose = this.previousCloses.get(symbol);
      
      if (data) {
        const percentChange = this.calculatePercentChange(data.price, previousClose || 0);
        const changeAmount = previousClose ? (data.price - previousClose) : 0;

        allStockData.push({
          symbol,
          price: `$${data.price.toFixed(2)}`,
          change: changeAmount ? `${changeAmount >= 0 ? '+' : ''}${changeAmount.toFixed(2)}` : '+0.00',
          changePercent: percentChange ? `${percentChange >= 0 ? '+' : ''}${percentChange.toFixed(2)}%` : '+0.00%',
          volume: data.volume || 0,
          timestamp: data.timestamp,
          lastUpdate: new Date().toISOString()
        });
      }
    }

    if (allStockData.length > 0) {
      client.send(JSON.stringify({
        type: 'initial_data',
        data: allStockData
      }));
    }
  }
}
