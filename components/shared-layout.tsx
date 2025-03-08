"use client"

import { ReactNode } from "react"
import Navbar from "./navbar"
import AnimatedBackground from "./animated-background"

interface SharedLayoutProps {
  children: ReactNode
}

export default function SharedLayout({ children }: SharedLayoutProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        {children}
      </div>
    </main>
  )
} 