# Stock Data WebSocket Server

This intermediate server connects to the Alpaca API and broadcasts live stock data to clients via WebSocket, helping avoid rate limiting issues.

## Setup

1. **Install dependencies:**
   ```bash
   cd server
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env` file in the server directory:
   ```bash
   # Alpaca API Configuration
   ALPACA_API_KEY=your_alpaca_api_key_here
   ALPACA_API_SECRET=your_alpaca_api_secret_here
   
   # WebSocket Server Configuration  
   PORT=8080
   ```

3. **Get Alpaca API credentials:**
   - Sign up at [Alpaca Markets](https://app.alpaca.markets/)
   - Navigate to "Your API Keys" in the dashboard
   - Generate new API keys (Paper trading is fine for development)
   - Add the keys to your `.env` file

## Running the Server

**Development mode (with auto-restart):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on port 8080 (or the PORT specified in your environment variables).

## Client Connection

Your Next.js application will automatically connect to the WebSocket server:
- **Development**: `ws://localhost:8080`
- **Production**: `wss://yourdomain.com/ws`

## Tracked Stocks

The server tracks these stock symbols by default:
- AAPL, AMZN, SPY, TSLA, GOOGL, MSFT, NVDA, META, QQQ, NFLX, AMD, CRM

## Features

- ✅ Real-time stock data from Alpaca IEX feed
- ✅ WebSocket broadcasting to multiple clients
- ✅ Automatic reconnection handling
- ✅ Rate limiting protection
- ✅ Graceful error handling
- ✅ Previous close price calculation

## Security Notes

⚠️ **Important**: The current API credentials in your codebase are now public and should be revoked immediately!

1. Go to your Alpaca dashboard
2. Revoke the current API keys
3. Generate new API keys
4. Update your `.env` file with the new credentials
5. Never commit API credentials to version control

## Troubleshooting

**Connection Issues:**
- Make sure the server is running on port 8080
- Check that your Alpaca API credentials are valid
- Verify your firewall allows connections on port 8080

**No Data Received:**
- Check the server logs for authentication errors
- Ensure your Alpaca account has data feed permissions
- Verify the stock symbols are valid

**Rate Limiting:**
- The server automatically handles Alpaca rate limits
- If you hit limits, the server will reconnect automatically
- Consider upgrading to a paid Alpaca plan for higher limits
