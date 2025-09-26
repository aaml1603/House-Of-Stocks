# Real-Time Stock Data Setup

Your House of Stocks application now includes a real-time stock data system using WebSocket connections to avoid API rate limiting.

## Architecture Overview

```
[Alpaca API] ↔ [WebSocket Server] ↔ [Multiple Browser Clients]
```

- **WebSocket Server** (`/server/`): Connects to Alpaca API and broadcasts data to clients
- **Next.js Frontend**: Receives real-time updates via WebSocket connection
- **Benefits**: Avoid rate limiting, real-time updates for all users, single API connection

## Quick Start

### 1. Set Up API Credentials

⚠️ **IMPORTANT**: Your current API credentials are public and should be revoked immediately!

1. Go to [Alpaca Markets](https://app.alpaca.markets/)
2. Revoke the current API keys: `PKCVVXAKS36NK3CPW934`
3. Generate new API keys
4. Create `/server/.env` file:
   ```bash
   ALPACA_API_KEY=your_new_api_key
   ALPACA_API_SECRET=your_new_api_secret
   PORT=8080
   ```

### 2. Install Dependencies

```bash
# Install server dependencies
cd server
npm install
cd ..
```

### 3. Start the System

**Option A: Use the startup script**
```bash
./start-dev.sh
```

**Option B: Manual startup**
```bash
# Terminal 1: Start WebSocket server
cd server
npm run dev

# Terminal 2: Start Next.js (when ready)
npm run dev
```

### 4. Verify Connection

- WebSocket Server: `ws://localhost:8080`
- Next.js App: `http://localhost:3000`
- Check browser console for connection messages

## Real-Time Features

### Stock Ticker Component
- ✅ Live price updates
- ✅ Real-time change calculations  
- ✅ Connection status indicators
- ✅ Automatic fallback data
- ✅ Reconnection handling

### Tracked Stocks
- AAPL, AMZN, SPY, TSLA, GOOGL
- MSFT, NVDA, META, QQQ, NFLX
- AMD, CRM

## File Structure

```
/server/
  ├── websocket-server.js    # Main WebSocket server
  ├── package.json           # Server dependencies
  └── README.md              # Server documentation

/lib/
  └── stock-service.ts       # WebSocket client service

/components/
  └── stock-ticker.tsx       # Updated with real-time data

start-dev.sh                 # Development startup script
```

## Development vs Production

### Development
- WebSocket server runs on `localhost:8080`
- Client connects to `ws://localhost:8080`
- Automatic reconnection on server restart

### Production
- Deploy WebSocket server separately
- Use WSS (secure WebSocket) in production
- Update client to connect to production server

## Troubleshooting

### No Data Appearing
1. Check WebSocket server is running on port 8080
2. Verify Alpaca API credentials are valid
3. Check browser console for connection errors
4. Ensure firewall allows port 8080

### Connection Issues
1. Server logs will show authentication status
2. Client will fall back to static data if disconnected
3. Automatic reconnection attempts every 1-30 seconds

### Rate Limiting
- Server handles Alpaca rate limits automatically
- Single connection shared among all users
- Consider upgrading Alpaca plan for higher limits

## Security Notes

1. **Never commit API keys** to version control
2. Use environment variables for all credentials
3. Revoke any exposed API keys immediately
4. Use WSS (secure WebSocket) in production
5. Consider IP whitelisting for production API keys

## Next Steps

1. **Security**: Update your API credentials immediately
2. **Monitoring**: Add logging and error tracking
3. **Scaling**: Consider Redis for multi-server deployments
4. **Features**: Add more stock symbols, portfolio tracking
5. **Production**: Deploy server with proper SSL and monitoring
