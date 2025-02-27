"use client"

import { motion } from "framer-motion"
import { Users, Home, Book, Award } from "lucide-react"

export default function AboutUs() {
  const features = [
    {
      icon: <Users className="w-12 h-12 text-blue-400" />,
      title: "Community-Driven",
      description: "Built by students, for students",
    },
    {
      icon: <Home className="w-12 h-12 text-blue-400" />,
      title: "Quality Housing",
      description: "Vetted properties for your peace of mind",
    },
    {
      icon: <Book className="w-12 h-12 text-blue-400" />,
      title: "Educational Focus",
      description: "Properties near educational institutions",
    },
    {
      icon: <Award className="w-12 h-12 text-blue-400" />,
      title: "Trusted Platform",
      description: "Thousands of satisfied students",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          About Ekrili
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center mb-16 max-w-3xl mx-auto"
        >
          Ekrili is revolutionizing student housing by connecting students with quality, affordable accommodations near
          their educational institutions.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto">
            To provide students with a seamless, trustworthy platform for finding their ideal living space, fostering
            academic success and personal growth.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

