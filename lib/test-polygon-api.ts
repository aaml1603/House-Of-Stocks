// Test script to verify Polygon.io API integration
// Run this in the browser console or as a Node.js script

import { getAllStockData, getStockQuote, getStockTicker } from './stock-service';

export async function testPolygonAPI() {
  console.log('🧪 Testing Polygon.io API Integration...\n');

  try {
    // Test 1: Get a single stock quote
    console.log('📊 Test 1: Fetching AAPL quote...');
    const appleQuote = await getStockQuote('AAPL');
    console.log('✅ AAPL Quote:', appleQuote);
    console.log('');

    // Test 2: Get stock ticker info
    console.log('📈 Test 2: Fetching AAPL ticker info...');
    const appleTicker = await getStockTicker('AAPL');
    console.log('✅ AAPL Ticker Info:', appleTicker);
    console.log('');

    // Test 3: Get all stock data
    console.log('📊 Test 3: Fetching all stock data...');
    const allStocks = await getAllStockData();
    console.log('✅ All Stocks Count:', allStocks.length);
    console.log('✅ Sample Stock Data:', allStocks.slice(0, 3));
    console.log('');

    console.log('🎉 All tests completed successfully!');
    console.log('💡 Note: Using prevClose API + simulated variations for demo');
    return {
      success: true,
      appleQuote,
      appleTicker,
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
