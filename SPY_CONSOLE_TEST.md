# SPY Console Test

## Quick One-Liner Test

Copy and paste this into your browser console:

```javascript
fetch('https://api.polygon.io/v2/aggs/ticker/SPY/prev?adjusted=true&apikey=AA9qkjbMH2XDizjqEubSAakefn4Oxi78').then(r => r.json()).then(d => { console.log('SPY Data:', d); if(d.results?.[0]) { const p = d.results[0]; console.log(`SPY Previous Close: $${p.c}, Volume: ${p.v.toLocaleString()}, High: $${p.h}, Low: $${p.l}`); } else { console.log('No data received'); } });
```

## Detailed Test Function

Copy and paste this larger function for more detailed testing:

```javascript
async function testSPY() {
  const response = await fetch('https://api.polygon.io/v2/aggs/ticker/SPY/prev?adjusted=true&apikey=AA9qkjbMH2XDizjqEubSAakefn4Oxi78');
  const data = await response.json();
  console.log('🔍 SPY API Response:', data);
  
  if (data.results?.[0]) {
    const spy = data.results[0];
    console.log(`📊 SPY Previous Close: $${spy.c}`);
    console.log(`📈 Volume: ${spy.v.toLocaleString()}`);
    console.log(`⬆️ High: $${spy.h}`);
    console.log(`⬇️ Low: $${spy.l}`);
    
    // Simulate current price
    const currentPrice = spy.c * (1 + (Math.random() - 0.5) * 0.02);
    const change = currentPrice - spy.c;
    console.log(`💰 Simulated Current: $${currentPrice.toFixed(2)} (${change >= 0 ? '+' : ''}${change.toFixed(2)})`);
  } else {
    console.log('❌ No SPY data received');
  }
}

testSPY();
```

## What to Expect

- If successful: You'll see SPY's previous close price, volume, high, low, and a simulated current price
- If API limit reached: You'll see an error message about rate limits
- If no data: The fallback will show demo data

## Troubleshooting

- **Rate limit error**: Wait a minute and try again (free tier = 5 calls/minute)
- **CORS error**: This is normal for direct API calls from browser, the app handles this differently
- **No data**: Market might be closed or no data available for that date
