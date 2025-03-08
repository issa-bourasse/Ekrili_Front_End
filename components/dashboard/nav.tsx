"use client"

import Link from "next/link"
import { User } from "next-auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface DashboardNavProps {
  user: User & { id: string }
}

export function DashboardNav({ user }: DashboardNavProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              EKRILY
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Add search or other nav items here */}
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/dashboard/settings">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.image || ""} alt={user.name || ""} />
                <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
              </Avatar>
            </Link>
            <Link 
              href="/api/auth/signout"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Sign out
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
