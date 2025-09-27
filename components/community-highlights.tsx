"use client"

import { Users, MessageCircle, TrendingUp, Heart, Coffee, BookOpen, Sprout, Handshake, Lightbulb, Gift, Bell } from "lucide-react"

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
    <section id="community" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Main highlights */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Help Us Build <span className="text-green-600">Something Special</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;re creating a different kind of trading community - one focused on genuine connections and real learning, not sales or hype.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-green-200 transition-colors duration-300">
                  <Icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Community Values */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              What We&apos;re Building Together
            </h3>
            <p className="text-gray-600 text-lg">
              Our vision for creating the most welcoming trading community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityValues.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <Icon className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">
                    {value.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {value.description}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-green-600 rounded-2xl p-8 md:p-12 text-white">
            <Coffee className="h-12 w-12 mx-auto mb-6 text-green-200" />
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Be One of Our First Members!
            </h3>
            <p className="text-lg mb-8 text-green-100 max-w-2xl mx-auto">
              We&apos;re just getting started and looking for genuine people who want to build something special together. 
              Join us on Discord and help shape what this community becomes!
            </p>
            <a
              href="https://discord.gg/z6FA8DHf53"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 text-lg"
            >
              <MessageCircle className="h-5 w-5" />
              Join Our Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
