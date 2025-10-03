import { Navbar01 } from '@/components/ui/shadcn-io/navbar-01'
import { HeroSection } from "@/components/hero-section"
import { StockTicker } from "@/components/stock-ticker"
import { GainsSection } from "@/components/gains-section"
import { OptionsTraders } from "@/components/options-traders-section"
import { AITradingAssistantSection } from "@/components/ai-trading-assistant-section"
import { CommunityHighlights } from "@/components/community-highlights"
import { CommunityStories } from "@/components/community-stories"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar01 />
      <main className="pt-16">
        <HeroSection />
        <StockTicker />
        <GainsSection />
        <OptionsTraders />
        <AITradingAssistantSection />
        <CommunityHighlights />
        <CommunityStories />
      </main>
      <Footer />
    </div>
  )
}
