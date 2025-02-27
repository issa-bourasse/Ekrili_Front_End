"use client"

import { type ReactNode, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"
import { Home, LogOut, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

interface SidebarItem {
  icon: ReactNode
  label: string
  href: string
}

interface DashboardLayoutProps {
  children: ReactNode
  sidebarItems: SidebarItem[]
  userRole: string
}

export default function DashboardLayout({ children, sidebarItems, userRole }: DashboardLayoutProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-md">
        <div className="p-4">
          <Link href="/" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
            <Home className="w-6 h-6" />
            <span className="text-lg font-semibold">Ekrili</span>
          </Link>
        </div>
        <ScrollArea className="h-[calc(100vh-8rem)] py-4">
          <nav className="space-y-2 px-4">
            {sidebarItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <Button variant="ghost" className="w-full justify-start">
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </Button>
              </Link>
            ))}
          </nav>
        </ScrollArea>
        <div className="p-4">
          <Button variant="outline" className="w-full">
            <LogOut className="mr-2 h-4 w-4" /> Log out
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-900">
        <header className="bg-white dark:bg-gray-800 shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">{userRole} Dashboard</h1>
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          </div>
        </header>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  )
}

