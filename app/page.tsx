import { Navbar01 } from '@/components/ui/shadcn-io/navbar-01'
import { HeroSection } from "@/components/hero-section"
import { StockTicker } from "@/components/stock-ticker"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
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
    </div>
  )
}
