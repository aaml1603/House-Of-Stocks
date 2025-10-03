"use client"

import { Brain, BarChart3, Target, Zap, ArrowRight, TrendingUp, Eye, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const aiFeatures = [
  {
    icon: Brain,
    title: "Strategy Understanding",
    description: "Our AI learns your unique trading patterns and preferences to provide personalized insights tailored to your approach."
  },
  {
    icon: BarChart3,
    title: "Advanced Chart Analysis",
    description: "Get sophisticated technical analysis with pattern recognition, support/resistance levels, and trend identification."
  },
  {
    icon: Target,
    title: "Personalized Alerts",
    description: "Receive custom alerts based on your specific criteria and risk tolerance, not generic market noise."
  },
  {
    icon: Zap,
    title: "Real-time Insights",
    description: "Access instant analysis and recommendations as market conditions change throughout the trading day."
  }
]

const aiCapabilities = [
  {
    icon: Eye,
    text: "Identifies chart patterns you might miss"
  },
  {
    icon: TrendingUp,
    text: "Analyzes multiple timeframes simultaneously"
  },
  {
    icon: Brain,
    text: "Learns from your successful trades"
  }
]

export function AITradingAssistantSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50/50">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/60 text-emerald-700 px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm mb-8">
            <Brain className="h-4 w-4" />
            AI-Powered Trading Assistant
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight tracking-[-0.02em]">
            Meet Your Personal{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              AI Trading Assistant
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Our advanced AI understands your trading strategies and analyzes charts with precision. 
            Get personalized insights that adapt to your unique approach and help you make smarter trading decisions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {aiFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="group rounded-3xl hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-500 text-center hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:from-emerald-200 group-hover:to-green-200 transition-all duration-300 shadow-sm">
                    <Icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl tracking-[-0.01em]">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Main CTA Section */}
        <div className="bg-gradient-to-br from-emerald-50/60 via-green-50/40 to-teal-50/60 rounded-3xl p-10 md:p-16 border border-emerald-100/50 shadow-xl shadow-emerald-500/5">
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-[-0.02em]">
              Ready to Trade Smarter?
            </h3>
            <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto">
              Experience the future of trading with AI that understands your strategies and provides personalized chart analysis.
            </p>
          </div>

          {/* Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {aiCapabilities.map((capability, index) => {
              const Icon = capability.icon
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:from-emerald-200 group-hover:to-green-200 transition-all duration-300 shadow-sm">
                    <Icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <div className="text-lg font-semibold text-slate-900 mb-3 tracking-[-0.01em]">
                    {capability.text}
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href="https://ai.houseofstocks.io" target="_blank" rel="noopener noreferrer">
                <Brain className="mr-2 h-5 w-5" />
                Try AI Assistant
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold rounded-xl"
              asChild
            >
              <a href="https://discord.gg/z6FA8DHf53" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Learn More in Discord
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 rounded-3xl p-10 md:p-16 text-white shadow-2xl shadow-emerald-500/25 border border-emerald-500/20 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-20"></div>

            <div className="relative z-10">
              <Brain className="h-14 w-14 mx-auto mb-8 text-emerald-200" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 tracking-[-0.02em]">
                Transform Your Trading with AI
              </h3>
              <p className="text-lg md:text-xl mb-10 text-emerald-100 max-w-2xl mx-auto leading-relaxed font-medium">
                Join thousands of traders who are already using our AI assistant to make better decisions, 
                identify opportunities faster, and improve their trading performance.
              </p>
              <Button
                size="lg"
                className="group bg-white text-emerald-600 hover:bg-slate-50"
                asChild
              >
                <a href="https://ai.houseofstocks.io" target="_blank" rel="noopener noreferrer">
                  <Target className="group-hover:scale-110 transition-transform duration-200" />
                  Start Free Trial
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
