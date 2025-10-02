"use client"

import { MessageCircle, Heart, Smile, Shield, Sprout, GraduationCap, Users, Globe, Building, TrendingUp, Target, BookOpen, Trophy, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

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
            What we&apos;re building and why we think the trading community deserves something better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {visionPoints.map((point, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <point.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">{point.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {point.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Discord Channels Preview */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              What&apos;s Waiting in Our Discord
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We&apos;ve set up channels for different types of conversations. Come help us bring them to life!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plannedChannels.map((channel, index) => {
              const Icon = channel.icon
              return (
                <Card key={index} className="bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <Icon className="h-4 w-4 text-green-600" />
                        </div>
                        <CardTitle className="text-lg">{channel.name}</CardTitle>
                      </div>
                      <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded">
                        {channel.status}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {channel.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white"
              asChild
            >
              <a href="https://discord.gg/z6FA8DHf53" target="_blank" rel="noopener noreferrer">
                <MessageCircle />
                Help Us Build This Community
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
