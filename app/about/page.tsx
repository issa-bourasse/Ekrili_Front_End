import AboutUs from "@/components/about-us"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900">
      <Navbar />
      <AboutUs />
      <Footer />
    </div>
  )
}

