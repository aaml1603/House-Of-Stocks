"use client"

import { MessageCircle, Heart, Smile, Shield, Sprout, GraduationCap, Users, Globe, Building, TrendingUp, Target, BookOpen, Trophy, Coffee } from "lucide-react"

const visionPoints = [
  {
    title: "No Sales Pressure",
    content: "We're building a space where traders can connect without being sold courses, signals, or 'get rich quick' schemes. Just real people sharing real experiences.",
    icon: Shield
  },
  {
    title: "Beginner Friendly",
    content: "Everyone starts somewhere! We want this to be the place where new traders feel safe asking questions without judgment or ridicule.",
    icon: Sprout
  },
  {
    title: "Learn Together",
    content: "Whether you're sharing a win, learning from a loss, or just discussing market trends, we believe learning happens best in community.",
    icon: GraduationCap
  },
  {
    title: "Real Conversations",
    content: "Beyond just trading talk - we're real people with real lives. Sometimes the best trading advice comes from casual conversations.",
    icon: MessageCircle
  },
  {
    title: "Global Perspective",
    content: "Markets are global, and so should be our community. Different time zones, different markets, different perspectives - all welcome.",
    icon: Globe
  },
  {
    title: "Long-term Thinking",
    content: "We're not here for quick wins or hype. We're building something sustainable that will be valuable for years to come.",
    icon: Building
  }
]

const plannedChannels = [
  {
    name: "general-chat",
    description: "Daily conversations and community hangout",
    status: "Ready",
    icon: MessageCircle
  },
  {
    name: "market-discussion",
    description: "Share analysis, ask questions, discuss trends",
    status: "Ready",
    icon: TrendingUp
  },
  {
    name: "trade-ideas",
    description: "Share your trades and learn from others",
    status: "Ready",
    icon: Target
  },
  {
    name: "learning-corner",
    description: "Educational resources and beginner questions",
    status: "Ready",
    icon: BookOpen
  },
  {
    name: "wins-and-losses",
    description: "Celebrate successes and learn from mistakes",
    status: "Ready",
    icon: Trophy
  },
  {
    name: "off-topic",
    description: "Everything non-trading related",
    status: "Ready",
    icon: Coffee
  }
]

export function CommunityStories() {
  return (
    <section id="stories" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Our Vision */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-green-600">Vision</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            What we're building and why we think the trading community deserves something better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {visionPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <point.icon className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-lg mb-2">{point.title}</h4>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                {point.content}
              </p>
            </div>
          ))}
        </div>

        {/* Discord Channels Preview */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              What's Waiting in Our Discord
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We've set up channels for different types of conversations. Come help us bring them to life!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plannedChannels.map((channel, index) => {
              const Icon = channel.icon
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <Icon className="h-4 w-4 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 text-lg">
                        {channel.name}
                      </h4>
                    </div>
                    <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded">
                      {channel.status}
                    </span>
                  </div>
                  <p className="text-gray-600">
                    {channel.description}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://discord.gg/z6FA8DHf53"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 text-lg"
            >
              <MessageCircle className="h-5 w-5" />
              Help Us Build This Community
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
