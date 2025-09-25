"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Michael Chen",
    role: "Day Trader",
    image: "https://i.pravatar.cc/150?img=1",
    content: "House of Stocks transformed my trading game. The real-time alerts and community insights helped me increase my portfolio by 40% in just 6 months.",
    rating: 5
  },
  {
    name: "Sarah Williams",
    role: "Portfolio Manager",
    image: "https://i.pravatar.cc/150?img=2",
    content: "The AI predictions are incredibly accurate. I've never had access to such sophisticated tools at this price point. It's a game-changer for serious traders.",
    rating: 5
  },
  {
    name: "David Rodriguez",
    role: "Swing Trader",
    image: "https://i.pravatar.cc/150?img=3",
    content: "The community aspect is what sets House of Stocks apart. Learning from experienced traders and sharing strategies has accelerated my growth exponentially.",
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-green-600">Thousands of Traders</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our community members have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 relative"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
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
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "10,000+", label: "Active Traders" },
            { value: "$2.5B+", label: "Trading Volume" },
            { value: "95%", label: "Success Rate" },
            { value: "24/7", label: "Support" }
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
