'use client'
import ListProperty from "@/components/list-property"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ListPropertyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900">
      <Navbar />
      <ListProperty />
      <Footer />
    </div>
  )
}

