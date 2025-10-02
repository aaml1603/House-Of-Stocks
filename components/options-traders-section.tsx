"use client"

import { TrendingUp, Zap, Target, Trophy, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function OptionsTraders() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/60 text-emerald-700 px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm">
              <Zap className="h-4 w-4" />
              Options Traders Unite
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-[-0.02em]">
              Master the Art of{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Options Trading
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Options trading isn&apos;t just about making money—it&apos;s about strategy, timing, and community support. 
                Join fellow options traders who understand the thrill of a perfectly timed play and the discipline 
                it takes to succeed.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Whether you&apos;re trading calls, puts, spreads, or iron condors, our community has traders at every 
                level sharing insights, strategies, and real-time analysis.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                { icon: Target, text: "Share your plays and learn from others' strategies" },
                { icon: TrendingUp, text: "Real-time discussions on market movements" },
                { icon: Trophy, text: "Celebrate wins and learn from losses together" }
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon className="h-5 w-5 text-emerald-600" />
                    </div>
                    <p className="text-slate-700 font-medium pt-2">
                      {item.text}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* CTA Button */}
            <div>
              <Button
                size="lg"
                className="group bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white"
                asChild
              >
                <a href="https://discord.gg/z6FA8DHf53" target="_blank" rel="noopener noreferrer">
                  Join Options Traders
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/60 via-green-200/40 to-teal-200/60 rounded-3xl blur-3xl opacity-40 scale-105 animate-pulse"></div>
              
              {/* Image container */}
              <div className="relative z-10 group">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/20 border border-emerald-200/50 bg-white hover:shadow-emerald-500/30 transition-all duration-500 hover:-translate-y-2">
                  <Image
                    src="/misc/upscaled-image (15).png"
                    alt="Options Trading Success - Community Achievement"
                    width={600}
                    height={400}
                    className="w-full h-auto max-h-[400px] object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-slate-200/60 hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">157%</div>
                    <div className="text-sm text-slate-600 font-medium">Avg. Options ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

