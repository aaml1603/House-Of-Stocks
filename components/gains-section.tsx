"use client"

import { TrendingUp, DollarSign, Target, Award, BarChart3, Zap } from "lucide-react"
import Image from "next/image"

const gainStats = [
  {
    icon: TrendingUp,
    title: "Average Monthly Gains",
    value: "23.7%",
    description: "Our community members report consistent monthly returns"
  },
  {
    icon: DollarSign,
    title: "Total Community Profits",
    value: "$2.4M+",
    description: "Combined profits shared by our active members"
  },
  {
    icon: Target,
    title: "Success Rate",
    value: "78%",
    description: "Percentage of profitable trades shared in our community"
  },
  {
    icon: Award,
    title: "Top Monthly Gain",
    value: "187%",
    description: "Highest single-month return achieved by a member"
  }
]

const successStories = [
  {
    name: "Sarah M.",
    gain: "+$47,500",
    timeframe: "6 months",
    strategy: "Options Trading",
    quote: "The community's support and shared strategies completely changed my trading game."
  },
  {
    name: "Mike R.",
    gain: "+$23,800",
    timeframe: "3 months", 
    strategy: "Swing Trading",
    quote: "Learning from others' wins and losses helped me avoid costly mistakes."
  },
  {
    name: "Jessica L.",
    gain: "+$89,200",
    timeframe: "1 year",
    strategy: "Growth Stocks",
    quote: "From beginner to profitable trader thanks to this amazing community."
  }
]

export function GainsSection() {
  return (
    <section id="gains" className="py-24 bg-gradient-to-b from-slate-50/50 to-white">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight tracking-[-0.02em]">
            Real <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Gains</span>, Real People
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            See the actual results our community members are achieving through collaborative learning and shared strategies.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {gainStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-500 border border-slate-200/60 text-center hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:from-emerald-200 group-hover:to-green-200 transition-all duration-300 shadow-sm">
                  <Icon className="h-8 w-8 text-emerald-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2 tracking-[-0.02em]">
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-[-0.01em]">
                  {stat.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {stat.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Featured Gains Images */}
        <div className="mb-24">
          <div className="bg-gradient-to-br from-emerald-50/60 via-green-50/40 to-teal-50/60 rounded-3xl p-10 md:p-16 border border-emerald-100/50 shadow-xl shadow-emerald-500/5">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-[-0.02em]">
                Community Gains Showcase
              </h3>
              <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto">
                Real screenshots shared by our members showing their trading success
              </p>
            </div>
            
            {/* Marquee Container */}
            <div className="relative overflow-hidden">
              {/* Gradient overlays for fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-emerald-50/90 via-green-50/60 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-emerald-50/90 via-green-50/60 to-transparent z-10 pointer-events-none"></div>
              
              {/* Scrolling content */}
              <div className="flex gap-3 justify-center">
                <div className="relative group">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/20 border border-emerald-200/50 hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-2 bg-white">
                    <Image
                      src="/gains/image.png"
                      alt="Community Trading Gains - Portfolio Performance"
                      width={400}
                      height={300}
                      className="w-auto h-[300px] object-contain"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 via-transparent to-transparent"></div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/20 border border-emerald-200/50 hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-2 bg-white">
                    <Image
                      src="/gains/WhatsApp Image 2025-09-29 at 15.18.25.jpeg"
                      alt="Community Trading Gains - Member Success"
                      width={400}
                      height={300}
                      className="w-auto h-[300px] object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 via-transparent to-transparent"></div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/20 border border-emerald-200/50 hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-2 bg-white">
                    <Image
                      src="/gains/WhatsApp Image 2025-09-25 at 11.40.22.jpeg"
                      alt="Community Trading Gains - Trading Results"
                      width={400}
                      height={300}
                      className="w-auto h-[300px] object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="flex justify-center gap-4 mt-8">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 rounded-lg font-semibold shadow-lg text-sm">
                <Zap className="inline h-3 w-3 mr-1" />
                Live Results
              </div>
              <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-lg font-semibold shadow-lg text-sm">
                <BarChart3 className="inline h-3 w-3 mr-1" />
                Verified Gains
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-[-0.02em]">
              Success Stories from Our Community
            </h3>
            <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto">
              Real members, real results, real transformations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-500 border border-slate-200/60 hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-2xl font-bold text-emerald-600 mb-1">
                      {story.gain}
                    </div>
                    <div className="text-sm text-slate-500 font-medium">
                      in {story.timeframe}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-slate-900">
                      {story.name}
                    </div>
                    <div className="text-sm text-slate-500 font-medium">
                      {story.strategy}
                    </div>
                  </div>
                </div>
                
                <blockquote className="text-slate-600 italic leading-relaxed font-medium">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 rounded-3xl p-10 md:p-16 text-white shadow-2xl shadow-emerald-500/25 border border-emerald-500/20 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-20"></div>

            <div className="relative z-10">
              <TrendingUp className="h-14 w-14 mx-auto mb-8 text-emerald-200" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 tracking-[-0.02em]">
                Ready to Start Your Success Story?
              </h3>
              <p className="text-lg md:text-xl mb-10 text-emerald-100 max-w-2xl mx-auto leading-relaxed font-medium">
                Join our community and learn from traders who are actually making money. 
                No fake promises, just real results and genuine support.
              </p>
              <a
                href="https://discord.gg/z6FA8DHf53"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white text-emerald-600 px-10 py-5 rounded-xl font-semibold hover:bg-slate-50 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <DollarSign className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                Start Your Journey
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
