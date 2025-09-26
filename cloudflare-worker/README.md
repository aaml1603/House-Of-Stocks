# Stock WebSocket Server on Cloudflare Workers

This implementation uses Cloudflare Workers + Durable Objects to provide real-time stock data via WebSocket connections.

## Setup

1. **Install Wrangler CLI**:
   ```bash
   npm install -g wrangler
   ```

2. **Install dependencies**:
   ```bash
   cd cloudflare-worker
   npm install
   ```

3. **Login to Cloudflare**:
   ```bash
   wrangler login
   ```

4. **Set environment variables**:
   ```bash
   wrangler secret put ALPACA_API_KEY
   wrangler secret put ALPACA_API_SECRET
   wrangler secret put POLYGON_API_KEY
   ```

5. **Deploy to production**:
   ```bash
   npm run deploy
   ```

## Development

Run locally with:
```bash
npm run dev
```

## WebSocket Connection

Connect to your WebSocket server at:
- **Development**: `ws://localhost:8787`
- **Production**: `wss://your-worker-name.your-subdomain.workers.dev`

## Message Format

The server sends messages in this format:

```json
{
  "type": "stock_update",
  "data": {
    "symbol": "AAPL",
    "price": "$150.25",
    "change": "+2.15",
    "changePercent": "+1.45%",
    "volume": 1234567,
    "timestamp": 1640995200000,
    "lastUpdate": "2024-01-01T12:00:00.000Z"
  }
}
```

## Cost Comparison

### Cloudflare Workers
- **Free tier**: 100,000 requests/day
- **Paid**: $5/month for 10M requests + $0.50 per million requests
- **Durable Objects**: $5/month for 1M requests + $0.15 per million requests

### Traditional Hosting (Railway/Render)
- **Cost**: $5-12/month for persistent server
- **Scaling**: Manual configuration required

## Benefits of Cloudflare Workers

1. **Global Edge Network**: Ultra-low latency worldwide
2. **Automatic Scaling**: Handles traffic spikes seamlessly
3. **No Cold Starts**: After initial request, responses are instant
4. **Built-in DDoS Protection**: Enterprise-grade security
5. **Cost Effective**: Pay only for what you use
