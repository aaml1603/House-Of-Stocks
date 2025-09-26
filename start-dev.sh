#!/bin/bash

# Development startup script for House of Stocks
# This script starts both the WebSocket server and Next.js app

echo "🏠 Starting House of Stocks Development Environment..."
echo ""

# Function to cleanup processes on exit
cleanup() {
    echo ""
    echo "🛑 Shutting down..."
    kill $SERVER_PID $NEXTJS_PID 2>/dev/null
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Start the WebSocket server in the background
echo "🚀 Starting WebSocket server..."
cd server
npm run dev &
SERVER_PID=$!
cd ..

# Wait a moment for the server to start
sleep 2

# Start Next.js development server
echo "🌐 Starting Next.js application..."
echo "⚠️  Note: npm run dev is disabled per user rules"
echo "💡 Please start Next.js manually with: npm run dev"
echo ""

# Show connection info
echo "📡 WebSocket Server: ws://localhost:8080"
echo "🌐 Next.js App: http://localhost:3000 (when started)"
echo ""
echo "Press Ctrl+C to stop all services"

# Wait for the server process
wait $SERVER_PID
