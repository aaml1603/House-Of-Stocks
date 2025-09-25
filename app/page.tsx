import { Navbar01 } from '@/components/ui/shadcn-io/navbar-01'
import { HeroSection } from "@/components/hero-section"
import { StockTicker } from "@/components/stock-ticker"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar01 />
      <main className="pt-16">
        <HeroSection />
        <StockTicker />
        <FeaturesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
