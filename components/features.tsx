"use client"

import { Shield, CreditCard, Map, Clock } from "lucide-react"
import { motion } from "framer-motion"

export default function Features() {
  return (
    <section className="py-20 bg-indigo-900/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-white mb-12"
        >
          Why Choose Ekrili
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Feature
            icon={<Shield className="w-10 h-10 text-blue-400" />}
            title="Secure"
            description="Verified listings and secure payment options for peace of mind."
            delay={0}
          />
          <Feature
            icon={<CreditCard className="w-10 h-10 text-blue-400" />}
            title="Affordable"
            description="Find accommodations that fit your budget with transparent pricing."
            delay={0.1}
          />
          <Feature
            icon={<Map className="w-10 h-10 text-blue-400" />}
            title="Location-based"
            description="Easy-to-use map interface to find housing near your campus."
            delay={0.2}
          />
          <Feature
            icon={<Clock className="w-10 h-10 text-blue-400" />}
            title="Time-saving"
            description="Streamlined process saves you time in your housing search."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  )
}

function Feature({ icon, title, description, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

