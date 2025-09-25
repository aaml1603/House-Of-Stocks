"use client"

import { getStockIcon } from "./stock-icons"
import { TrendingUp } from "lucide-react"

const stockData = [
  { symbol: "AAPL", price: "$192.53", change: "+2.45", changePercent: "+1.29%" },
  { symbol: "AMZN", price: "$155.89", change: "+3.21", changePercent: "+2.10%" },
  { symbol: "SPY", price: "$451.02", change: "+1.87", changePercent: "+0.42%" },
  { symbol: "TSLA", price: "$248.50", change: "-4.32", changePercent: "-1.71%" },
  { symbol: "GOOGL", price: "$142.56", change: "+0.98", changePercent: "+0.69%" },
  { symbol: "MSFT", price: "$378.85", change: "+2.15", changePercent: "+0.57%" },
  { symbol: "NVDA", price: "$875.28", change: "+15.43", changePercent: "+1.79%" },
  { symbol: "META", price: "$331.05", change: "+4.67", changePercent: "+1.43%" },
  { symbol: "QQQ", price: "$385.42", change: "+2.89", changePercent: "+0.76%" },
  { symbol: "NFLX", price: "$487.32", change: "-2.18", changePercent: "-0.45%" },
  { symbol: "AMD", price: "$139.87", change: "+6.54", changePercent: "+4.90%" },
  { symbol: "CRM", price: "$259.41", change: "+3.76", changePercent: "+1.47%" }
]

export function StockTicker() {
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
          
          {/* Live indicator */}
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-700 font-medium uppercase tracking-wide">Live</span>
          </div>
        </div>
      </div>
      
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex space-x-6 whitespace-nowrap animate-scroll">
          {[...stockData, ...stockData].map((stock, index) => (
            <div
              key={`${stock.symbol}-${index}`}
              className="flex items-center space-x-4 px-6 py-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 min-w-fit"
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
                    <span className="font-bold text-gray-900 text-sm">{stock.symbol}</span>
                    <div className="text-base font-semibold text-gray-900">{stock.price}</div>
                  </div>
                </div>
                
                {/* Change indicator */}
                <div className={`flex items-center space-x-1 px-2 py-1 rounded-md text-xs font-medium ${
                  stock.change.startsWith('+') 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  <span className={stock.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                    {stock.change.startsWith('+') ? '↗' : '↘'}
                  </span>
                  <span>{stock.changePercent}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
