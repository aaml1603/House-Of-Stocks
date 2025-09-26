# Polygon.io API Integration

This project integrates with [Polygon.io](https://polygon.io/) to fetch live stock market data for the ticker marquee.

## Setup

1. **Get a Polygon.io API Key**
   - Sign up for a free account at [polygon.io](https://polygon.io/)
   - Get your API key from the dashboard
   - Free tier includes 5 API calls per minute

2. **Configure Environment Variables** (Optional)
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local and add your API key:
   NEXT_PUBLIC_POLYGON_API_KEY=your_api_key_here
   ```

## Features

- **Live Stock Data**: Fetches real-time stock prices and changes
- **Smart Rate Limiting**: Only fetches live data for 3 priority stocks (AAPL, TSLA, NVDA) to respect free tier limits
- **Intelligent Fallback**: Uses enhanced static data with realistic variations for remaining stocks
- **Auto-Updates**: Refreshes data every 30 seconds with simulated price movements
- **Error Handling**: Gracefully handles API errors and rate limits with visual indicators
- **Rate Limit Detection**: Automatically detects and handles "maximum requests exceeded" errors

## API Usage

The integration uses direct REST API calls to Polygon.io endpoints:

- `GET /v3/reference/tickers/{ticker}` - Company information and market cap
- `GET /v2/aggs/ticker/{ticker}/prev` - Previous day's closing prices for comparison
- Demo mode: Simulates real-time price movements based on actual previous close data

**Note**: We use direct fetch() calls instead of the @polygon.io/client-js library methods due to API structure compatibility issues.

## Stock Symbols Tracked

- AAPL (Apple)
- AMZN (Amazon)
- SPY (SPDR S&P 500)
- TSLA (Tesla)
- GOOGL (Alphabet)
- MSFT (Microsoft)
- NVDA (NVIDIA)
- META (Meta)
- QQQ (Invesco QQQ Trust)
- NFLX (Netflix)
- AMD (Advanced Micro Devices)
- CRM (Salesforce)

## File Structure

- `lib/stock-service.ts` - Main API service
- `components/stock-ticker.tsx` - Live ticker component

## Rate Limiting Solution

The free tier of Polygon.io allows **5 API calls per minute**. Our solution:

1. **Priority Stocks**: Only fetch live data for 3 high-priority stocks (AAPL, TSLA, NVDA)
2. **Rate Limiting**: 12-second delays between API calls to respect limits
3. **Smart Fallback**: Enhanced static data with realistic price variations for other stocks
4. **Error Detection**: Automatically detects rate limit errors and switches to fallback
5. **Session Limits**: Limits API calls per session to avoid hitting rate limits

### Console Commands for Testing

```javascript
// Reset API call counter
import { resetApiCallCounter } from './lib/stock-service';
resetApiCallCounter();

// Test individual stock
import { getStockQuote } from './lib/stock-service';
getStockQuote('SPY').then(console.log);
```

## Development Notes

- **Current Implementation**: Live data for 3 stocks + realistic simulations for others
- **Production**: Consider upgrading to paid plan for more API calls
- **Alternative**: Implement server-side API routes to keep API keys secure
- **Real-time**: Consider WebSocket connections for true real-time updates (paid plans)
