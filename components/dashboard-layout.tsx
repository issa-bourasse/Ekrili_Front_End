"use client"

import { type ReactNode } from "react"
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

export default function DashboardLayout({
  children,
  sidebarItems,
  userRole,
}: DashboardLayoutProps) {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden border-r bg-background md:block w-64">
        <div className="flex h-full flex-col">
          <div className="border-b px-6 py-4">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Home className="h-6 w-6" />
              <span>Ekrili</span>
            </Link>
          </div>
          <ScrollArea className="flex-1 px-3 py-2">
            <div className="space-y-1">
              {sidebarItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent"
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </div>
          </ScrollArea>
          <div className="border-t p-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="h-9 w-9"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <LogOut className="h-4 w-4" />
                <span className="sr-only">Log out</span>
              </Button>
              <span className="ml-auto text-sm font-medium">{userRole}</span>
            </div>
          </div>
        </div>
      </div>
      {/* Main content */}
      <main className="flex-1">{children}</main>
    </div>
  )
}
