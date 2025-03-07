"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import SharedLayout from "@/components/shared-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
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
            Contact Us
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-white mb-4">Get in Touch</h2>
              <form className="space-y-4">
                <Input placeholder="Your Name" className="bg-white/5 border-white/10 text-white" />
                <Input placeholder="Your Email" type="email" className="bg-white/5 border-white/10 text-white" />
                <Textarea placeholder="Your Message" className="bg-white/5 border-white/10 text-white" />
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>contact@ekrili.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>123 Student Street, Education City</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SharedLayout>
  )
} 