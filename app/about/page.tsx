"use client"

import { motion } from "framer-motion"
import SharedLayout from "@/components/shared-layout"

export default function AboutPage() {
  return (
    <SharedLayout>
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            About Ekrili
          </h1>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-gray-300 space-y-6">
            <p>
              Ekrili is a platform dedicated to making student housing search easy and efficient. 
              We connect students with quality accommodation providers, ensuring a smooth and 
              trustworthy rental experience.
            </p>
            <p>
              Our mission is to simplify the student housing journey, providing a secure and 
              user-friendly platform for both students and property owners.
            </p>
            <p>
              Founded with the vision of transforming student accommodation search, we strive 
              to create a community where finding your perfect student home is just a few 
              clicks away.
            </p>
          </div>
        </motion.div>
      </div>
    </SharedLayout>
  )
} 