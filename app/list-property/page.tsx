"use client"

import { motion } from "framer-motion"
import { Home } from "lucide-react"
import SharedLayout from "@/components/shared-layout"
import { Button } from "@/components/ui/button"

export default function ListPropertyPage() {
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
            List Your Property
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Connect with students and earn by renting out your property
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Home className="mr-2 h-5 w-5" />
              Start Listing
            </Button>
          </div>
        </motion.div>
      </div>
    </SharedLayout>
  )
} 