"use client"

import { TrendingUp, Brain, Users, Zap, Shield, BarChart } from "lucide-react"

const features = [
  {
    icon: TrendingUp,
    title: "Real-Time Market Analysis",
    description: "Get instant insights with our advanced algorithms tracking thousands of stocks every second."
  },
  {
    icon: Brain,
    title: "AI-Powered Predictions",
    description: "Leverage machine learning models trained on decades of market data for smarter trading decisions."
  },
  {
    icon: Users,
    title: "Expert Community",
    description: "Connect with verified professional traders and learn from their strategies and experiences."
  },
  {
    icon: Zap,
    title: "Lightning Fast Alerts",
    description: "Never miss an opportunity with instant notifications for price movements and trading signals."
  },
  {
    icon: Shield,
    title: "Risk Management Tools",
    description: "Protect your portfolio with advanced stop-loss strategies and position sizing calculators."
  },
  {
    icon: BarChart,
    title: "Comprehensive Analytics",
    description: "Track your performance with detailed reports, charts, and portfolio analysis tools."
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="block text-green-600 mt-2"> Succeed in Trading</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our platform combines cutting-edge technology with community wisdom to give you an unmatched trading edge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors duration-300">
                  <Icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
