"use client"

import { Users, MessageCircle, TrendingUp, Heart, Coffee, BookOpen, Sprout, Handshake, Lightbulb, Gift, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const highlights = [
  {
    icon: Bell,
    title: "Free Trading Alerts",
    description: "Get daily trading alerts and market insights shared by our community members - completely free, no strings attached."
  },
  {
    icon: MessageCircle,
    title: "Daily Market Chat",
    description: "Join our active daily discussions about market movements, share your thoughts, and learn from others' perspectives."
  },
  {
    icon: Users,
    title: "Beginner Friendly",
    description: "New to trading? Our community loves helping newcomers learn the ropes without judgment or pressure."
  },
  {
    icon: Heart,
    title: "Supportive Environment",
    description: "We celebrate wins together and support each other through losses. Trading can be lonely, but it doesn't have to be."
  }
]

const communityValues = [
  { icon: Sprout, label: "Growing Together", description: "We're just getting started and building something special" },
  { icon: Handshake, label: "Everyone Welcome", description: "New traders, experienced ones, and everyone in between" },
  { icon: Lightbulb, label: "Real Learning", description: "Authentic discussions about trading successes and failures" },
  { icon: Gift, label: "Always Free", description: "No hidden fees, no sales pressure, just genuine community" }
]

export function CommunityHighlights() {
  return (
    <section id="community" className="py-24 bg-gradient-to-b from-white to-slate-50/50">
      <div className="container mx-auto px-4">
        
        {/* Main highlights */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight tracking-[-0.02em]">
            Help Us Build <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Something Special</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            We&apos;re creating a different kind of trading community - one focused on genuine connections and real learning, not sales or hype.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
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
                    {highlight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Community Values */}
        <div className="bg-gradient-to-br from-emerald-50/60 via-green-50/40 to-teal-50/60 rounded-3xl p-10 md:p-16 border border-emerald-100/50 shadow-xl shadow-emerald-500/5">
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-[-0.02em]">
              What We&apos;re Building Together
            </h3>
            <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto">
              Our vision for creating the most welcoming trading community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {communityValues.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:from-emerald-200 group-hover:to-green-200 transition-all duration-300 shadow-sm">
                    <Icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <div className="text-lg font-semibold text-slate-900 mb-3 tracking-[-0.01em]">
                    {value.label}
                  </div>
                  <div className="text-sm text-slate-600 leading-relaxed font-medium">
                    {value.description}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 rounded-3xl p-10 md:p-16 text-white shadow-2xl shadow-emerald-500/25 border border-emerald-500/20 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-20"></div>

            <div className="relative z-10">
              <Coffee className="h-14 w-14 mx-auto mb-8 text-emerald-200" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 tracking-[-0.02em]">
                Be One of Our First Members!
              </h3>
              <p className="text-lg md:text-xl mb-10 text-emerald-100 max-w-2xl mx-auto leading-relaxed font-medium">
                We&apos;re just getting started and looking for genuine people who want to build something special together.
                Join us on Discord and help shape what this community becomes!
              </p>
              <Button
                size="lg"
                className="group bg-white text-emerald-600 hover:bg-slate-50"
                asChild
              >
                <a href="https://discord.gg/z6FA8DHf53" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="group-hover:scale-110 transition-transform duration-200" />
                  Join Our Discord
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
