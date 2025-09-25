"use client"

import { TrendingUp, Brain, Users, Zap, Shield, BarChart } from "lucide-react"
import { motion } from "framer-motion"

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to
            <span className="text-primary"> Succeed in Trading</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Our platform combines cutting-edge technology with community wisdom to give you an unmatched trading edge.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-200 group"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
