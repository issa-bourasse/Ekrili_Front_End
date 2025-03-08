"use client"

import { motion } from "framer-motion"
import SharedLayout from "@/components/shared-layout"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does Ekrili work?",
    answer: "Ekrili connects students with property owners. Browse listings, contact owners, and book your accommodation directly through our platform."
  },
  {
    question: "Is Ekrili free to use?",
    answer: "Yes, searching and browsing properties on Ekrili is completely free for students."
  },
  {
    question: "How do I list my property?",
    answer: "Property owners can easily list their properties by creating an account and following our simple listing process."
  },
  {
    question: "Are the properties verified?",
    answer: "Yes, we verify all property listings to ensure they meet our quality and safety standards."
  }
]

export default function FAQPage() {
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
            Frequently Asked Questions
          </h1>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-white">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </SharedLayout>
  )
} 