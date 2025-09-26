import Link from "next/link"
import Image from "next/image"
import { MessageCircle, TrendingUp, Users, Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image 
                src="/browserlogo.png" 
                alt="House of Stocks Logo" 
                width={48} 
                height={48}
                className="h-12 w-12"
              />
              <span className="font-bold text-lg sm:text-xl text-white">House of Stocks</span>
            </div>
            <p className="text-sm">
              Join our exclusive Discord trading community where professional traders share real-time insights and proven strategies.
            </p>
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5 text-[#5865F2]" />
              <Link 
                href="https://discord.gg/z6FA8DHf53" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#5865F2] hover:text-[#4752C4] transition-colors font-medium"
              >
                Join Discord Community
              </Link>
            </div>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-white mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="hover:text-primary transition-colors">
                  Trading Features
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-primary transition-colors">
                  Member Reviews
                </Link>
              </li>
              <li>
                <Link href="https://discord.gg/z6FA8DHf53" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Discord Server
                </Link>
              </li>
            </ul>
          </div>

          {/* Trading Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Trading Resources</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 justify-center sm:justify-start">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="text-sm">Real-time Market Analysis</span>
              </li>
              <li className="flex items-center space-x-2 justify-center sm:justify-start">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm">Expert Trading Community</span>
              </li>
              <li className="flex items-center space-x-2 justify-center sm:justify-start">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm">Risk Management Tools</span>
              </li>
              <li className="flex items-center space-x-2 justify-center sm:justify-start">
                <MessageCircle className="h-4 w-4 text-primary" />
                <span className="text-sm">24/7 Discord Support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 House of Stocks Trading Community. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-sm hover:text-primary transition-colors">
                Community Guidelines
              </Link>
              <Link href="#" className="text-sm hover:text-primary transition-colors">
                Trading Disclaimer
              </Link>
              <Link href="#" className="text-sm hover:text-primary transition-colors">
                Risk Disclosure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
