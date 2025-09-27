import Link from "next/link"
import Image from "next/image"
import { MessageCircle, TrendingUp, Users, Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/browserlogo.png"
                alt="House of Stocks Logo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-xl"
              />
              <span className="font-bold text-xl sm:text-2xl text-white tracking-[-0.01em]">House of Stocks</span>
            </div>
            <p className="text-slate-400 leading-relaxed font-medium">
              Join our exclusive Discord trading community where professional traders share real-time insights and proven strategies.
            </p>
            <div className="flex items-center space-x-3">
              <MessageCircle className="h-5 w-5 text-[#5865F2]" />
              <Link
                href="https://discord.gg/z6FA8DHf53"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5865F2] hover:text-[#4752C4] transition-colors font-semibold"
              >
                Join Discord Community
              </Link>
            </div>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-lg tracking-[-0.01em]">Community</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="hover:text-emerald-400 transition-colors font-medium text-slate-400">
                  Trading Features
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-emerald-400 transition-colors font-medium text-slate-400">
                  Member Reviews
                </Link>
              </li>
              <li>
                <Link href="https://discord.gg/z6FA8DHf53" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors font-medium text-slate-400">
                  Discord Server
                </Link>
              </li>
            </ul>
          </div>

          {/* Trading Resources */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-lg tracking-[-0.01em]">Trading Resources</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 justify-center sm:justify-start">
                <TrendingUp className="h-4 w-4 text-emerald-400" />
                <span className="text-sm font-medium text-slate-400">Real-time Market Analysis</span>
              </li>
              <li className="flex items-center space-x-3 justify-center sm:justify-start">
                <Users className="h-4 w-4 text-emerald-400" />
                <span className="text-sm font-medium text-slate-400">Expert Trading Community</span>
              </li>
              <li className="flex items-center space-x-3 justify-center sm:justify-start">
                <Shield className="h-4 w-4 text-emerald-400" />
                <span className="text-sm font-medium text-slate-400">Risk Management Tools</span>
              </li>
              <li className="flex items-center space-x-3 justify-center sm:justify-start">
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                <span className="text-sm font-medium text-slate-400">24/7 Discord Support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-500 font-medium">
              © 2025 House of Stocks Trading Community. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link href="#" className="text-sm hover:text-emerald-400 transition-colors font-medium text-slate-400">
                Community Guidelines
              </Link>
              <Link href="#" className="text-sm hover:text-emerald-400 transition-colors font-medium text-slate-400">
                Trading Disclaimer
              </Link>
              <Link href="#" className="text-sm hover:text-emerald-400 transition-colors font-medium text-slate-400">
                Risk Disclosure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
