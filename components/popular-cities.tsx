"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const cities = [
  { name: "New York", image: "/placeholder.svg" },
  { name: "London", image: "/placeholder.svg" },
  { name: "Paris", image: "/placeholder.svg" },
  { name: "Tokyo", image: "/placeholder.svg" },
]

export default function PopularCities() {
  return (
    <section className="py-20 bg-blue-800/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Popular Cities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <Image
                src={city.image || "/placeholder.svg"}
                alt={city.name}
                width={300}
                height={200}
                className="rounded-lg shadow-lg transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg flex items-end justify-center p-4">
                <h3 className="text-white text-xl font-semibold">{city.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

