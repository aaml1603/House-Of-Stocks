// Console test for Polygon.io API
// Copy and paste this into your browser console to test SPY

const API_KEY = "AA9qkjbMH2XDizjqEubSAakefn4Oxi78";

async function testSPYPrice() {
  console.log('🧪 Testing SPY stock price from Polygon.io API...\n');
  
  try {
    // Test the direct API call for SPY
    const url = `https://api.polygon.io/v2/aggs/ticker/SPY/prev?adjusted=true&apikey=${API_KEY}`;
    console.log('📡 API URL:', url);
    
    const response = await fetch(url);
    const data = await response.json();
    
    console.log('📊 Raw API Response:', data);
    
    if (data.status === 'OK' && data.results && data.results.length > 0) {
      const prevData = data.results[0];
      console.log('\n✅ SPY Previous Close Data:');
      console.log('- Symbol:', prevData.T);
      console.log('- Previous Close:', `$${prevData.c}`);
      console.log('- Volume:', prevData.v.toLocaleString());
      console.log('- High:', `$${prevData.h}`);
      console.log('- Low:', `$${prevData.l}`);
      console.log('- Open:', `$${prevData.o}`);
      
      // Simulate current price
      const variation = (Math.random() - 0.5) * 0.1; // ±5% variation
      const currentPrice = prevData.c * (1 + variation);
      const changeAmount = currentPrice - prevData.c;
      const changePercent = (changeAmount / prevData.c) * 100;
      
      console.log('\n📈 Simulated Current Price:');
      console.log('- Current Price:', `$${currentPrice.toFixed(2)}`);
      console.log('- Change:', changeAmount >= 0 ? `+$${changeAmount.toFixed(2)}` : `-$${Math.abs(changeAmount).toFixed(2)}`);
      console.log('- Change %:', changePercent >= 0 ? `+${changePercent.toFixed(2)}%` : `${changePercent.toFixed(2)}%`);
      
      return {
        success: true,
        symbol: 'SPY',
        previousClose: prevData.c,
        currentPrice: currentPrice.toFixed(2),
        change: changeAmount.toFixed(2),
        changePercent: changePercent.toFixed(2)
      };
    } else {
      console.log('❌ No data received from API');
      console.log('Response status:', data.status);
      console.log('Response:', data);
      
      // Fallback demo
      console.log('\n🔄 Using fallback demo data for SPY:');
      const demoPrice = 450;
      const variation = (Math.random() - 0.5) * 0.1;
      const currentPrice = demoPrice * (1 + variation);
      const changeAmount = currentPrice - demoPrice;
      const changePercent = (changeAmount / demoPrice) * 100;
      
      console.log('- Demo Price:', `$${currentPrice.toFixed(2)}`);
      console.log('- Demo Change:', `${changeAmount >= 0 ? '+' : ''}${changeAmount.toFixed(2)}`);
      console.log('- Demo Change %:', `${changePercent >= 0 ? '+' : ''}${changePercent.toFixed(2)}%`);
      
      return {
        success: false,
        fallback: true,
        symbol: 'SPY',
        demoPrice: currentPrice.toFixed(2)
      };
    }
  } catch (error) {
    console.error('❌ Error testing SPY API:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

// Run the test
testSPYPrice().then(result => {
  console.log('\n🎯 Test Result:', result);
});

console.log('📝 Test function created! It will run automatically above.');
console.log('💡 You can also call testSPYPrice() again to test with a new simulated price.');
