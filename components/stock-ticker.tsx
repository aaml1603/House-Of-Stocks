"use client"

import { motion } from "framer-motion"
import { getStockIcon } from "./stock-icons"

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

// Duplicate the array to create seamless loop
const duplicatedStocks = [...stockData, ...stockData]

export function StockTicker() {
  return (
    <section className="w-full bg-gradient-to-r from-green-50 via-white to-emerald-50 border-y border-gray-200 py-4 sm:py-6 overflow-hidden relative">
      {/* Background gradient overlay for fade effect */}
      <div className="absoluteç inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none" />
      
      {/* Subtle animated background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316a34a' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "40px 40px"
        }}
      />
      
      {/* Header */}
      <div className="container mx-auto px-4 mb-3 sm:mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <motion.div
              className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            </motion.div>
          </div>
          
          {/* Live indicator */}
          <div className="flex items-center space-x-2">
            <motion.div 
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-xs text-gray-700 font-medium uppercase tracking-wide">Live</span>
          </div>
        </div>
      </div>
      
      <motion.div
        className="flex space-x-8 whitespace-nowrap"
        animate={{
          x: [0, -50 * stockData.length + "%"]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear"
          }
        }}
      >
        {duplicatedStocks.map((stock, index) => (
          <motion.div
            key={`${stock.symbol}-${index}`}
            className="flex items-center space-x-2 sm:space-x-4 px-3 sm:px-6 py-2 sm:py-3 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-200/50 shadow-sm"
            whileHover={{ 
              scale: 1.02,
              y: -2,
              backgroundColor: "rgba(255, 255, 255, 0.9)"
            }}
            transition={{ duration: 0.2 }}
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
                  <span className="font-bold text-gray-900">${stock.symbol}</span>
                  <div className="text-lg font-semibold text-gray-900">{stock.price}</div>
                </div>
              </div>
              
              {/* Change indicator */}
              <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                stock.change.startsWith('+') 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                <span className={stock.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                  {stock.change.startsWith('+') ? '↗' : '↘'}
                </span>
                <span>{stock.change} ({stock.changePercent})</span>
              </div>
            </div>
            
            {/* Animated mini chart */}
            <motion.div 
              className="flex items-end space-x-1 h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-1 rounded-full ${
                    stock.change.startsWith('+') 
                      ? 'bg-gradient-to-t from-green-400 to-green-500' 
                      : 'bg-gradient-to-t from-red-400 to-red-500'
                  }`}
                  initial={{ height: 8 }}
                  animate={{ 
                    height: [8, Math.random() * 20 + 8, 8]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
