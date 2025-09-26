import { NextRequest } from 'next/server';

// In-memory storage for stock data (note: this resets on each serverless function invocation)
let stockDataCache = new Map();
let lastUpdateTime = 0;

// Polygon.io API configuration
const POLYGON_API_KEY = process.env.POLYGON_API_KEY || 'your-polygon-api-key';

async function fetchStockData() {
  const symbols = ['AAPL', 'AMZN', 'SPY', 'TSLA', 'GOOGL', 'MSFT', 'NVDA', 'META', 'QQQ', 'NFLX', 'AMD', 'CRM'];
  const stockData = [];
  
  try {
    // Fetch current prices from Polygon.io
    for (const symbol of symbols) {
      const response = await fetch(
        `https://api.polygon.io/v2/last/trade/${symbol}?apiKey=${POLYGON_API_KEY}`
      );
      
      if (response.ok) {
        const data = await response.json();
        if (data.results) {
          stockData.push({
            symbol,
            price: `$${data.results.p.toFixed(2)}`,
            change: '+0.00', // You'd calculate this from previous close
            changePercent: '+0.00%',
            volume: data.results.s || 0,
            timestamp: data.results.t,
            lastUpdate: new Date().toISOString()
          });
        }
      }
    }
  } catch (error) {
    console.error('Error fetching stock data:', error);
  }
  
  return stockData;
}

export async function GET(request: NextRequest) {
  const encoder = new TextEncoder();
  
  const stream = new ReadableStream({
    start(controller) {
      // Send initial connection message
      const initialMessage = `data: ${JSON.stringify({ type: 'connection_status', connected: true, message: 'Connected to stock stream' })}\n\n`;
      controller.enqueue(encoder.encode(initialMessage));
      
      // Send stock data every 5 seconds
      const interval = setInterval(async () => {
        try {
          const stockData = await fetchStockData();
          
          if (stockData.length > 0) {
            // Send individual stock updates
            for (const stock of stockData) {
              const message = `data: ${JSON.stringify({ type: 'stock_update', data: stock })}\n\n`;
              controller.enqueue(encoder.encode(message));
            }
          }
          
          // Send heartbeat
          const heartbeat = `data: ${JSON.stringify({ type: 'heartbeat', timestamp: new Date().toISOString() })}\n\n`;
          controller.enqueue(encoder.encode(heartbeat));
          
        } catch (error) {
          console.error('Error in SSE stream:', error);
          const errorMessage = `data: ${JSON.stringify({ type: 'error', message: 'Failed to fetch stock data' })}\n\n`;
          controller.enqueue(encoder.encode(errorMessage));
        }
      }, 5000);
      
      // Clean up interval when connection closes
      request.signal.addEventListener('abort', () => {
        clearInterval(interval);
        controller.close();
      });
    }
  });
  
  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Cache-Control',
    },
  });
}
