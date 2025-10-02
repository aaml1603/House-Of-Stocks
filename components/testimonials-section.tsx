"use client"

import { Star } from "lucide-react"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import Image from "next/image"

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Community Member",
    image: "https://i.pravatar.cc/150?img=1",
    content: "I joined as a complete beginner and was amazed by how welcoming everyone was. No question was too basic, and people actually took time to help me understand the markets.",
    rating: 5
  },
  {
    name: "Maria Garcia",
    role: "Active Trader",
    image: "https://i.pravatar.cc/150?img=2",
    content: "The best part about this community is the genuine support. We celebrate each other's wins and learn from losses together. It's like having trading friends who truly care.",
    rating: 5
  },
  {
    name: "James Wilson",
    role: "Long-term Investor",
    image: "https://i.pravatar.cc/150?img=3",
    content: "Finally found a trading community without the sales pressure! Just real people sharing knowledge and experiences. The casual conversations are just as valuable as the trading discussions.",
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-green-600">Community Says</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from real members about their experience in our supportive trading community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="rounded-2xl hover:shadow-lg transition-shadow duration-300 relative"
            >
              <CardHeader>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                
                {/* Quote decoration */}
                <div className="absolute top-6 right-6 text-green-100">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "2,500+", label: "Community Members" },
            { value: "500+", label: "Daily Messages" },
            { value: "100%", label: "Welcoming Vibes" },
            { value: "24/7", label: "Active Community" }
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-200">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
