"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

const communityAccess = [
  {
    name: "Community Member",
    price: "Free",
    period: "Forever",
    description: "Join our welcoming trading community at no cost",
    features: [
      "Full Discord server access",
      "Daily market discussions",
      "Share trades and strategies",
      "Learn from experienced traders",
      "Participate in community events",
      "Access to educational resources"
    ],
    popular: true
  },
  {
    name: "Premium Supporter",
    price: "$15",
    period: "/month",
    description: "Support the community and get exclusive perks",
    features: [
      "Everything in Community",
      "Exclusive premium channels",
      "Early access to events",
      "Custom Discord role",
      "Priority in Q&A sessions",
      "Support community growth"
    ],
    popular: false
  },
  {
    name: "Community Champion",
    price: "$50",
    period: "/month",
    description: "Become a champion of our growing community",
    features: [
      "Everything in Premium",
      "Help shape community direction",
      "Access to private mentorship group",
      "Monthly 1-on-1 with moderators",
      "Special recognition",
      "Exclusive community merchandise"
    ],
    popular: false
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
}

export function PricingSection() {
  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our <span className="text-primary">Trading Community</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Start with free access to our community. Support us if you'd like to help us grow and get some perks!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-0">
          {communityAccess.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <Card
                className={`relative h-full ${plan.popular ? 'border-primary shadow-lg' : ''}`}
              >
                {plan.popular && (
                  <motion.div 
                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                  >
                    Most Popular
                  </motion.div>
                )}
                
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <motion.div 
                    className="mb-6"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  >
                    <span className="text-3xl sm:text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </motion.div>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: 0.4 + index * 0.1 + featureIndex * 0.05, 
                          duration: 0.3 
                        }}
                      >
                        <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <motion.div 
                    className="w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className={`w-full ${plan.popular ? 'bg-green-600 hover:bg-green-700' : ''}`}
                      variant={plan.popular ? "default" : "outline"}
                      asChild
                    >
                      <a href="https://discord.gg/z6FA8DHf53" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        {plan.price === "Free" ? "Join for Free" : "Join & Support"}
                      </a>
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-gray-600">
            Join our Discord for <span className="font-semibold">free</span> and see what makes our community special!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
