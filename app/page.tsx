import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import { FloatingKeys } from "@/components/floating-keys"

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
        <Footer />
      </div>
    </main>
  )
}
