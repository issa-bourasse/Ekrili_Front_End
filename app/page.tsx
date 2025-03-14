import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import { FloatingKeys } from "@/components/floating-keys"
import CallToAction from "@/components/call-to-action"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import PopularCities from "@/components/popular-cities"
import FAQ from "@/components/faq"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 antialiased relative">
      <AnimatedBackground />
      <div className="absolute inset-0 z-0">
        <FloatingKeys />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <CallToAction />
        <Features />
        <Testimonials />
        <PopularCities />
        <FAQ />
        <Footer />
      </div>
    </main>
  )
}
