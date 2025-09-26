"use client"

import { Users, MessageSquare, Heart, BookOpen, Coffee, Handshake } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Supportive Community",
    description: "Connect with traders of all experience levels in a judgment-free environment where questions are always welcome."
  },
  {
    icon: MessageSquare,
    title: "Open Discussions",
    description: "Share your wins, losses, and learning experiences. Our community thrives on honest conversations about trading."
  },
  {
    icon: Heart,
    title: "Mentorship Culture",
    description: "Experienced traders naturally mentor newcomers, creating a positive cycle of knowledge sharing and growth."
  },
  {
    icon: BookOpen,
    title: "Collaborative Learning",
    description: "Learn together through shared resources, study groups, and community-driven educational content."
  },
  {
    icon: Coffee,
    title: "Casual Atmosphere",
    description: "Beyond trading talk, enjoy casual conversations, memes, and build genuine friendships with fellow traders."
  },
  {
    icon: Handshake,
    title: "No Sales Pressure",
    description: "A community focused on mutual support and learning, not selling courses or pushing paid services."
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Makes Our
            <span className="block text-green-600 mt-2"> Community Special</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;ve built a space where traders can genuinely connect, learn, and grow together without the pressure of sales or competition.
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
