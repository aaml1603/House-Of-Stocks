"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Users, Shield, MessageCircle, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-emerald-50 pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      
      {/* Subtle background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-96 h-96 bg-green-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

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
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join the most exclusive trading community where professional traders share real-time analysis, 
            proven strategies, and market-moving insights.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mb-12">
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

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: BarChart3, text: "95% Success Rate", description: "Track record" },
              { icon: Users, text: "24/7 Support", description: "Community help" },
              { icon: Shield, text: "Secure Platform", description: "Protected trading" }
            ].map(({ icon: Icon, text, description }, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-200">
                  <Icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{text}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
