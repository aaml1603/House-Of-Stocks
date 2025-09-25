"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, TrendingUp } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-emerald-50 pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      
      {/* Subtle background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-96 h-96 bg-green-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Two-column layout for desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left column - Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <TrendingUp className="h-4 w-4" />
                #1 Trading Community
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Master the Markets with
                <span className="block text-green-600 mt-2">
                  Elite Trading Insights
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Join the most exclusive trading community where professional traders share real-time analysis, 
                proven strategies, and market-moving insights.
              </p>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start mb-12">
                <Button 
                  size="lg" 
                  className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                  asChild
                >
                  <a href="https://discord.gg/z6FA8DHf53" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Join our Community
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </Button>
              </div>

            </div>

            {/* Right column - Trading Phone Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Subtle glow effect behind the phone */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-emerald-200 rounded-3xl blur-2xl opacity-30 scale-110"></div>
                
                {/* Phone image */}
                <div className="relative z-10">
                  <Image
                    src="/trading_phone.png"
                    alt="Trading App Mockup"
                    width={400}
                    height={600}
                    className="w-auto h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
