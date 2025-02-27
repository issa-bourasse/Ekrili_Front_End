"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Search, Home } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Find Your Perfect
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600">
              {" "}
              Student Home
            </span>
          </h1>
          <p className="text-gray-300 text-xl mb-8">
            Ekrili connects students with homeowners, making it easy to find affordable and comfortable housing that
            fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              <Search className="mr-2 h-5 w-5" />
              Find Housing
            </Button>
            <Button size="lg" variant="outline" className="text-white border-blue-500 hover:bg-blue-500/20">
              <Home className="mr-2 h-5 w-5" />
              List Property
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏠",
                title: "Verified Listings",
                description: "All properties are vetted for quality and safety",
              },
              { icon: "💰", title: "Student-Friendly Prices", description: "Find accommodations that fit your budget" },
              { icon: "🗺️", title: "Prime Locations", description: "Properties close to universities and amenities" },
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

