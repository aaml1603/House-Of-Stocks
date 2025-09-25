"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Users, Shield, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { WavyBackground } from '@/components/ui/shadcn-io/wavy-background'

export function HeroSection() {
  return (
    <WavyBackground
      backgroundFill="white"
      colors={["#22c55e", "#16a34a", "#15803d"]}
      waveWidth={30}
      blur={10}
      speed="fast"
      waveOpacity={0.4}
      containerClassName="pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden"
      className="w-full"
    >
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-40 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">

          {/* Headline */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Master the Markets with
            <motion.span 
              className="text-primary block mt-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Elite Trading Insights
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Join the most exclusive trading community where professional traders share real-time analysis, 
            proven strategies, and market-moving insights.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="group bg-green-600 hover:bg-green-700 w-full sm:w-auto"
                asChild
              >
                <a href="https://discord.gg/z6FA8DHf53" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Join our Community
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            {[
              { icon: BarChart3, text: "95% Success Rate" },
              { icon: Users, text: "24/7 Community Support" },
              { icon: Shield, text: "Bank-Level Security" }
            ].map(({ icon: Icon, text }, index) => (
              <motion.div 
                key={index}
                className="flex items-center justify-center space-x-1 sm:space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Icon className="h-5 w-5 text-primary" />
                <span className="text-xs sm:text-sm text-gray-600 text-center">{text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </WavyBackground>
  )
}
