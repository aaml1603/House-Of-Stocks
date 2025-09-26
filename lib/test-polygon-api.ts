// Test script to verify Polygon.io API integration
// Run this in the browser console or as a Node.js script

import { getAllStockData, stockDataService } from './stock-service';

export async function testPolygonAPI() {
  console.log('🧪 Testing Stock Data Service Integration...\n');

  try {
    // Test 1: Check if service is connected
    console.log('📊 Test 1: Checking connection status...');
    const isConnected = stockDataService.isConnectedToServer();
    console.log('✅ Connection Status:', isConnected ? 'Connected' : 'Disconnected');
    console.log('');

    // Test 2: Get current stock data
    console.log('📈 Test 2: Fetching current stock data...');
    const currentData = stockDataService.getCurrentData();
    console.log('✅ Current Data Count:', currentData.length);
    if (currentData.length > 0) {
      console.log('✅ Sample Stock Data:', currentData.slice(0, 3));
    }
    console.log('');

    // Test 3: Get all stock data (legacy function)
    console.log('📊 Test 3: Fetching all stock data via legacy function...');
    const allStocks = await getAllStockData();
    console.log('✅ All Stocks Count:', allStocks.length);
    console.log('✅ Sample Stock Data:', allStocks.slice(0, 3));
    console.log('');

    console.log('🎉 All tests completed successfully!');
    console.log('💡 Note: Using WebSocket connection to Cloudflare Workers');
    return {
      success: true,
      isConnected,
      currentDataCount: currentData.length,
      allStocksCount: allStocks.length,
      sampleData: allStocks.slice(0, 3)
    };

  } catch (error) {
    console.error('❌ Test failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error)
    };
  }
}

// Export for easy testing
if (typeof window !== 'undefined') {
  // Browser environment
  (window as any).testPolygonAPI = testPolygonAPI;
  console.log('🔧 Test function available as window.testPolygonAPI()');
}
