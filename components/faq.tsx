"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How does Ekrili work?",
    answer:
      "Ekrili connects students with homeowners. Students can search for available properties, while homeowners can list their properties for rent. Our platform facilitates communication and booking processes.",
  },
  {
    question: "Is Ekrili free to use?",
    answer:
      "Ekrili is free for students to search and browse listings. Property owners pay a small fee to list their properties on our platform.",
  },
  {
    question: "How do I know the listings are legitimate?",
    answer:
      "We verify all property listings and homeowners to ensure the safety and satisfaction of our users. We also encourage users to report any suspicious activity.",
  },
  {
    question: "Can I list a shared room or just entire properties?",
    answer:
      "You can list both shared rooms and entire properties on Ekrili. We cater to various student housing needs and budgets.",
  },
]

export default function FAQ() {
  return (
    <section className="py-20 bg-indigo-900/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-4">
      <motion.button
        initial={false}
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <ChevronDown className={`w-5 h-5 text-white transition-transform ${isOpen ? "transform rotate-180" : ""}`} />
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="p-4 text-gray-300">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
