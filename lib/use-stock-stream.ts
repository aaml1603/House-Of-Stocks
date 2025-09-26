import { useEffect, useState, useCallback } from 'react';

interface StockData {
  symbol: string;
  price: string;
  change: string;
  changePercent: string;
  volume: number;
  timestamp: number;
  lastUpdate: string;
}

interface StreamMessage {
  type: 'stock_update' | 'connection_status' | 'heartbeat' | 'error';
  data?: StockData;
  connected?: boolean;
  message?: string;
  timestamp?: string;
}

export function useStockStream() {
  const [stocks, setStocks] = useState<Map<string, StockData>>(new Map());
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const connectToStream = useCallback(() => {
    const eventSource = new EventSource('/api/stock-stream');
    
    eventSource.onopen = () => {
      console.log('Connected to stock stream');
      setConnected(true);
      setError(null);
    };
    
    eventSource.onmessage = (event) => {
      try {
        const message: StreamMessage = JSON.parse(event.data);
        
        switch (message.type) {
          case 'stock_update':
            if (message.data) {
              setStocks(prev => new Map(prev.set(message.data!.symbol, message.data!)));
            }
            break;
            
          case 'connection_status':
            setConnected(message.connected || false);
            if (message.message) {
              console.log('Stream status:', message.message);
            }
            break;
            
          case 'heartbeat':
            // Keep connection alive
            break;
            
          case 'error':
            setError(message.message || 'Unknown error');
            console.error('Stream error:', message.message);
            break;
        }
      } catch (err) {
        console.error('Error parsing stream message:', err);
      }
    };
    
    eventSource.onerror = (event) => {
      console.error('Stream connection error:', event);
      setConnected(false);
      setError('Connection lost');
      
      // Attempt to reconnect after 3 seconds
      setTimeout(() => {
        console.log('Attempting to reconnect...');
        eventSource.close();
        connectToStream();
      }, 3000);
    };
    
    return eventSource;
  }, []);

  useEffect(() => {
    const eventSource = connectToStream();
    
    return () => {
      eventSource.close();
      setConnected(false);
    };
  }, [connectToStream]);

  return {
    stocks: Array.from(stocks.values()),
    connected,
    error
  };
}
