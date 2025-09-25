"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"

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

const testimonialVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6 }
  }
}

const statVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6 }
  }
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-primary">Thousands of Traders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our community members have to say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={testimonialVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-gray-50 rounded-lg p-6 relative cursor-pointer"
            >
              <motion.div 
                className="flex items-center mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.4 }}
              >
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.3 }}
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.2 + i * 0.1, duration: 0.3 }}
                  >
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.p 
                className="text-gray-700 italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
              >
                "{testimonial.content}"
              </motion.p>
              
              {/* Quote decoration */}
              <motion.div 
                className="absolute top-4 right-4 text-primary/10"
                initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
                whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.4 }}
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { value: "10,000+", label: "Active Traders" },
            { value: "$2.5B+", label: "Trading Volume" },
            { value: "95%", label: "Success Rate" },
            { value: "24/7", label: "Support" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              variants={statVariants}
              transition={{ delay: 1.0 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div 
                className="text-3xl font-bold text-primary"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 1.2 + index * 0.1, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
