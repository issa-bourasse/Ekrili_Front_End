"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          Ready to Find Your Perfect Student Home?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-blue-100 mb-8"
        >
          Join thousands of students who have found their ideal accommodation through Ekrili.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            Get Started Now
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

