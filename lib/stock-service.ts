// Real-time stock data service using WebSocket connection to our intermediate server
export interface StockData {
  symbol: string;
  price: string;
  change: string;
  changePercent: string;
  volume?: number;
  timestamp?: string;
  lastUpdate?: string;
}

export interface WebSocketMessage {
  type: 'stock_update' | 'initial_data' | 'connection_status';
  data?: StockData | StockData[];
  connected?: boolean;
  message?: string;
}

class StockDataService {
  private ws: WebSocket | null = null;
  private listeners: Set<(data: StockData[]) => void> = new Set();
  private connectionListeners: Set<(connected: boolean) => void> = new Set();
  private stockData: Map<string, StockData> = new Map();
  private isConnected = false;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectDelay = 1000; // Start with 1 second

  constructor() {
    // Only connect if we're in the browser
    if (typeof window !== 'undefined') {
      this.connect();
    }
  }

  private connect() {
    try {
      const wsUrl = process.env.NODE_ENV === 'production' 
        ? 'wss://stock-websocket-server.aaml1603.workers.dev' 
        : 'wss://stock-websocket-server.aaml1603.workers.dev';
      
      console.log('📡 Connecting to stock data server...');
      this.ws = new WebSocket(wsUrl);

      this.ws.onopen = () => {
        console.log('✅ Connected to stock data server');
        this.isConnected = true;
        this.reconnectAttempts = 0;
        this.reconnectDelay = 1000;
        this.notifyConnectionListeners(true);
      };

      this.ws.onmessage = (event) => {
        try {
          const message: WebSocketMessage = JSON.parse(event.data);
          this.handleMessage(message);
        } catch (error) {
          console.error('❌ Error parsing WebSocket message:', error);
        }
      };

      this.ws.onclose = () => {
        console.log('🔌 Disconnected from stock data server');
        this.isConnected = false;
        this.notifyConnectionListeners(false);
        this.attemptReconnect();
      };

      this.ws.onerror = (error) => {
        console.error('❌ WebSocket error:', error);
        this.isConnected = false;
        this.notifyConnectionListeners(false);
      };

    } catch (error) {
      console.error('❌ Failed to connect to stock data server:', error);
      this.attemptReconnect();
    }
  }

  private attemptReconnect() {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.error('❌ Max reconnection attempts reached. Please refresh the page.');
      return;
    }

    this.reconnectAttempts++;
    console.log(`🔄 Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts}) in ${this.reconnectDelay}ms...`);
    
    setTimeout(() => {
      this.connect();
      this.reconnectDelay = Math.min(this.reconnectDelay * 2, 30000); // Exponential backoff, max 30 seconds
    }, this.reconnectDelay);
  }

  private handleMessage(message: WebSocketMessage) {
    switch (message.type) {
      case 'initial_data':
        if (Array.isArray(message.data)) {
          console.log(`📊 Received initial data for ${message.data.length} stocks`);
          message.data.forEach(stock => {
            this.stockData.set(stock.symbol, stock);
          });
          this.notifyListeners();
        }
        break;

      case 'stock_update':
        if (message.data && !Array.isArray(message.data)) {
          this.stockData.set(message.data.symbol, message.data);
          this.notifyListeners();
        }
        break;

      case 'connection_status':
        console.log(`📊 Server status: ${message.message}`);
        break;
    }
  }

  private notifyListeners() {
    const allStockData = Array.from(this.stockData.values());
    this.listeners.forEach(listener => listener(allStockData));
  }

  private notifyConnectionListeners(connected: boolean) {
    this.connectionListeners.forEach(listener => listener(connected));
  }

  // Subscribe to stock data updates
  subscribe(callback: (data: StockData[]) => void): () => void {
    this.listeners.add(callback);
    
    // Send current data immediately if available
    if (this.stockData.size > 0) {
      callback(Array.from(this.stockData.values()));
    }

    // Return unsubscribe function
    return () => {
      this.listeners.delete(callback);
    };
  }

  // Subscribe to connection status updates
  subscribeToConnection(callback: (connected: boolean) => void): () => void {
    this.connectionListeners.add(callback);
    
    // Send current connection status immediately
    callback(this.isConnected);

    // Return unsubscribe function
    return () => {
      this.connectionListeners.delete(callback);
    };
  }

  // Get current stock data
  getCurrentData(): StockData[] {
    return Array.from(this.stockData.values());
  }

  // Check if connected
  isConnectedToServer(): boolean {
    return this.isConnected;
  }

  // Disconnect
  disconnect() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    this.isConnected = false;
    this.listeners.clear();
    this.connectionListeners.clear();
  }
}

// Create singleton instance
const stockDataService = new StockDataService();

// Export the service instance and types
export { stockDataService };
export default stockDataService;

// Legacy functions for backward compatibility
export async function getAllStockData(): Promise<StockData[]> {
  return stockDataService.getCurrentData();
}

export function createMockRealTimeData(currentData: StockData[]): StockData[] {
  // This function is no longer needed as we have real-time data
  // But we'll keep it for compatibility
  return currentData;
}

// Fallback data for when the server is not available
export const fallbackStockData: StockData[] = [
  { symbol: "AAPL", price: "$192.53", change: "+2.45", changePercent: "+1.29%" },
  { symbol: "AMZN", price: "$155.89", change: "+3.21", changePercent: "+2.10%" },
  { symbol: "SPY", price: "$451.02", change: "+1.87", changePercent: "+0.42%" },
  { symbol: "TSLA", price: "$248.50", change: "-4.32", changePercent: "-1.71%" },
  { symbol: "GOOGL", price: "$142.56", change: "+0.98", changePercent: "+0.69%" },
  { symbol: "MSFT", price: "$378.85", change: "+2.15", changePercent: "+0.57%" },
  { symbol: "NVDA", price: "$875.28", change: "+15.43", changePercent: "+1.79%" },
  { symbol: "META", price: "$331.05", change: "+4.67", changePercent: "+1.43%" },
  { symbol: "QQQ", price: "$385.42", change: "+2.89", changePercent: "+0.76%" },
  { symbol: "NFLX", price: "$487.32", change: "-2.18", changePercent: "-0.45%" },
  { symbol: "AMD", price: "$139.87", change: "+6.54", changePercent: "+4.90%" },
  { symbol: "CRM", price: "$259.41", change: "+3.76", changePercent: "+1.47%" }
];