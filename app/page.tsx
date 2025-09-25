"use client"

import { Navbar01 } from '@/components/ui/shadcn-io/navbar-01'
import { HeroSection } from "@/components/hero-section"
import { StockTicker } from "@/components/stock-ticker"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative w-full">
        <Navbar01 />
      </div>
      <main>
        <HeroSection />
        <StockTicker />
        <FeaturesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </motion.div>
  )
}
