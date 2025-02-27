"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"

export default function Testimonials() {
  return (
    <section className="py-20 bg-blue-800/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-white mb-12"
        >
          What Our Users Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial
            name="Sarah K."
            role="Student"
            content="Ekrili made finding a place near my university so easy! I found the perfect apartment in just a few days."
            delay={0}
          />
          <Testimonial
            name="John D."
            role="Property Owner"
            content="As a landlord, Ekrili has been a game-changer. It's so simple to list my properties and connect with reliable student tenants."
            delay={0.2}
          />
          <Testimonial
            name="Emma R."
            role="Student"
            content="I love how Ekrili simplifies the entire process. The map feature helped me find a great place within walking distance of my classes."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  )
}

function Testimonial({ name, role, content, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/5 p-6 rounded-lg backdrop-blur-sm"
    >
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-300 mb-4">{content}</p>
      <div className="font-semibold text-white">{name}</div>
      <div className="text-sm text-gray-400">{role}</div>
    </motion.div>
  )
}

