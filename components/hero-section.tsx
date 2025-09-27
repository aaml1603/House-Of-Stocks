"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, TrendingUp, Users } from "lucide-react"
import Image from "next/image"
import { BackgroundPaths } from "@/components/ui/shadcn-io/background-paths"

// Discord SVG Icon component
const DiscordIcon = ({ className, ...props }: React.SVGAttributes<SVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    shapeRendering="geometricPrecision" 
    textRendering="geometricPrecision" 
    imageRendering="optimizeQuality" 
    fillRule="evenodd" 
    clipRule="evenodd" 
    viewBox="0 0 512 365.467"
    className={className}
    {...props}
  >
    <path 
      fill="currentColor" 
      d="M378.186 365.028s-15.794-18.865-28.956-35.099c57.473-16.232 79.41-51.77 79.41-51.77-17.989 11.846-35.099 20.182-50.454 25.885-21.938 9.213-42.997 14.917-63.617 18.866-42.118 7.898-80.726 5.703-113.631-.438-25.008-4.827-46.506-11.407-64.494-18.867-10.091-3.947-21.059-8.774-32.027-14.917-1.316-.877-2.633-1.316-3.948-2.193-.877-.438-1.316-.878-1.755-.878-7.898-4.388-12.285-7.458-12.285-7.458s21.06 34.659 76.779 51.331c-13.163 16.673-29.395 35.977-29.395 35.977C36.854 362.395 0 299.218 0 299.218 0 159.263 63.177 45.633 63.177 45.633 126.354-1.311 186.022.005 186.022.005l4.388 5.264C111.439 27.645 75.461 62.305 75.461 62.305s9.653-5.265 25.886-12.285c46.945-20.621 84.236-25.885 99.592-27.64 2.633-.439 4.827-.878 7.458-.878 26.763-3.51 57.036-4.387 88.624-.878 41.68 4.826 86.43 17.111 132.058 41.68 0 0-34.66-32.906-109.244-55.281l6.143-7.019s60.105-1.317 122.844 45.628c0 0 63.178 113.631 63.178 253.585 0-.438-36.854 62.739-133.813 65.81l-.001.001zm-43.874-203.133c-25.006 0-44.75 21.498-44.75 48.262 0 26.763 20.182 48.26 44.75 48.26 25.008 0 44.752-21.497 44.752-48.26 0-26.764-20.182-48.262-44.752-48.262zm-160.135 0c-25.008 0-44.751 21.498-44.751 48.262 0 26.763 20.182 48.26 44.751 48.26 25.007 0 44.75-21.497 44.75-48.26.439-26.763-19.742-48.262-44.75-48.262z"
    />
  </svg>
);

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 dark:bg-neutral-950 pt-16 md:pt-20 lg:pt-0">
      
      {/* BackgroundPaths animated background */}
      <div className="absolute inset-0">
        <BackgroundPaths title="" />
      </div>

      {/* Hero content overlay */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Two-column layout for desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left column - Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/60 text-emerald-700 px-5 py-2.5 rounded-full text-sm font-medium mb-8 shadow-sm">
                <Users className="h-4 w-4" />
                New Trading Community
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-[-0.02em]">
                Welcome to
                <span className="block text-emerald-600 mt-2 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  House of Stocks
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                We&apos;re just getting started! Join us in building a welcoming space where traders can connect, learn, and grow together.
                <span className="block mt-3 text-slate-500 text-lg sm:text-xl font-normal">
                  Get free daily trading alerts and join genuine people who love trading - no sales pitches.
                </span>
              </p>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start mb-12">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-10 py-5 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 border border-emerald-600/20"
                  asChild
                >
                  <a href="https://discord.gg/z6FA8DHf53" target="_blank" rel="noopener noreferrer">
                    <DiscordIcon className="mr-3 h-5 w-5" />
                    Join Our Discord
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
              </div>

            </div>

            {/* Right column - Trading Phone Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Enhanced glow effect behind the phone */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/60 via-green-200/40 to-teal-200/60 rounded-3xl blur-3xl opacity-40 scale-110 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-green-100 rounded-3xl blur-xl opacity-20 scale-105"></div>

                {/* Phone image with enhanced styling */}
                <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/trading_phone.png"
                    alt="Trading App Mockup"
                    width={400}
                    height={600}
                    className="w-auto h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg drop-shadow-2xl rounded-3xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
