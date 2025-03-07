"use client"

import { motion } from "framer-motion"
import { Search, Home, CheckCircle } from "lucide-react"
import SharedLayout from "@/components/shared-layout"

const steps = [
  {
    icon: <Search className="w-12 h-12 text-blue-400" />,
    title: "Search",
    description: "Browse through our extensive list of student accommodations"
  },
  {
    icon: <Home className="w-12 h-12 text-blue-400" />,
    title: "Connect",
    description: "Connect directly with verified property owners"
  },
  {
    icon: <CheckCircle className="w-12 h-12 text-blue-400" />,
    title: "Move In",
    description: "Complete the booking process and move into your new home"
  }
]

export default function HowItWorksPage() {
  return (
    <SharedLayout>
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            How It Works
          </h1>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center"
              >
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SharedLayout>
  )
} 