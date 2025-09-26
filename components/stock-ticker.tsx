"use client"

import { useState, useEffect } from "react"
import { getStockIcon } from "./stock-icons"
import { TrendingUp, AlertCircle, Wifi, WifiOff } from "lucide-react"
import { stockDataService, fallbackStockData, type StockData } from "../lib/stock-service"

export function StockTicker() {
  const [stockData, setStockData] = useState<StockData[]>(fallbackStockData)
  const [isLoading, setIsLoading] = useState(true)
  const [isConnected, setIsConnected] = useState(false)
  const [lastUpdateTime, setLastUpdateTime] = useState<Date>(new Date())

  // Subscribe to real-time stock data updates
  useEffect(() => {
    const unsubscribeData = stockDataService.subscribe((data: StockData[]) => {
      if (data && data.length > 0) {
        setStockData(data)
        setLastUpdateTime(new Date())
        setIsLoading(false)
      }
    })

    const unsubscribeConnection = stockDataService.subscribeToConnection((connected: boolean) => {
      setIsConnected(connected)
      if (!connected && isLoading) {
        // If not connected and still loading, use fallback data
        setStockData(fallbackStockData)
        setIsLoading(false)
      }
    })

    // Check if we already have data
    const currentData = stockDataService.getCurrentData()
    if (currentData.length > 0) {
      setStockData(currentData)
      setIsLoading(false)
    }

    return () => {
      unsubscribeData()
      unsubscribeConnection()
    }
  }, [])

  const formatLastUpdate = (date: Date) => {
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)
    
    if (diffInSeconds < 60) {
      return `${diffInSeconds}s ago`
    } else if (diffInSeconds < 3600) {
      return `${Math.floor(diffInSeconds / 60)}m ago`
    } else {
      return date.toLocaleTimeString()
    }
  }

  return (
    <section className="w-full bg-gray-50 border-y border-gray-200 py-6 overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-4 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Market Overview</h3>
          </div>
          
          {/* Status indicator */}
          <div className="flex items-center space-x-2">
            {!isConnected ? (
              <>
                <WifiOff className="w-3 h-3 text-amber-500" />
                <span className="text-xs text-amber-700 font-medium uppercase tracking-wide">
                  Offline Mode
                </span>
              </>
            ) : (
              <>
                <Wifi className="w-3 h-3 text-green-600" />
                <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-amber-500 animate-pulse' : 'bg-green-500 animate-pulse'}`}></div>
                <span className="text-xs text-gray-700 font-medium uppercase tracking-wide">
                  {isLoading ? 'Connecting...' : 'Live Data'}
                </span>
              </>
            )}
            <span className="text-xs text-gray-500 hidden md:inline">
              Updated {formatLastUpdate(lastUpdateTime)}
            </span>
          </div>
        </div>
      </div>
      
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
        
        <div className="marquee-container animate-marquee">
          {/* Create seamless loop with multiple copies */}
          {[1, 2, 3].map((setNumber) => (
            <div key={`stock-set-${setNumber}`} className="flex space-x-6 whitespace-nowrap" style={{ paddingRight: '1.5rem' }}>
              {stockData.map((stock, index) => (
                <div
                  key={`${stock.symbol}-${setNumber}-${index}`}
                  className="flex items-center space-x-4 px-6 py-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 w-56 min-w-56"
                >
                  <div className="flex items-center space-x-3">
                    {/* Stock symbol with icon */}
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 flex items-center justify-center">
                        {(() => {
                          const IconComponent = getStockIcon(stock.symbol);
                          return <IconComponent className="w-8 h-8" />;
                        })()}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-gray-900 text-sm">{stock.symbol}</span>
                          {/* Change indicator inline with symbol */}
                          <span className={`text-xs font-medium tabular-nums ${
                            stock.change.startsWith('+') 
                              ? 'text-green-600' 
                              : 'text-red-600'
                          }`}>
                            {stock.changePercent}
                          </span>
                        </div>
                        <div className="text-base font-normal text-gray-600 tabular-nums">{stock.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
