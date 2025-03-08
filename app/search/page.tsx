"use client"

import { motion } from "framer-motion"
import { Search as SearchIcon } from "lucide-react"
import SharedLayout from "@/components/shared-layout"

export default function SearchPage() {
  return (
    <SharedLayout>
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Find Your Perfect Student Housing
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Search through thousands of verified student accommodations
          </p>
          {/* Add your search functionality here */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <p className="text-gray-300">Search functionality coming soon...</p>
          </div>
        </motion.div>
      </div>
    </SharedLayout>
  )
} 