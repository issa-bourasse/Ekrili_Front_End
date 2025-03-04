"use client"

import { ReactNode } from "react"
import { BarChart, Home, Calendar, MessageSquare, CreditCard, Settings, Search, Users } from "lucide-react"

interface SidebarItem {
  icon: ReactNode;
  label: string;
  href: string;
}

export const renterSidebarItems: SidebarItem[] = [
  { icon: <BarChart className="h-4 w-4" />, label: "Dashboard", href: "/dashboard/renter" },
  { icon: <Home className="h-4 w-4" />, label: "My Properties", href: "/dashboard/renter/properties" },
  { icon: <Calendar className="h-4 w-4" />, label: "Bookings", href: "/dashboard/renter/bookings" },
  { icon: <Users className="h-4 w-4" />, label: "Staff Management", href: "/dashboard/renter/staff" },
  { icon: <MessageSquare className="h-4 w-4" />, label: "Messages", href: "/dashboard/renter/messages" },
  { icon: <Settings className="h-4 w-4" />, label: "Settings", href: "/dashboard/renter/settings" },
]

export const adminSidebarItems: SidebarItem[] = [
  { icon: <BarChart className="h-4 w-4" />, label: "Dashboard", href: "/dashboard/admin" },
  { icon: <Users className="h-4 w-4" />, label: "Users", href: "/dashboard/admin/users" },
  { icon: <Home className="h-4 w-4" />, label: "Properties", href: "/dashboard/admin/properties" },
  { icon: <Calendar className="h-4 w-4" />, label: "Bookings", href: "/dashboard/admin/bookings" },
  { icon: <MessageSquare className="h-4 w-4" />, label: "Support", href: "/dashboard/admin/support" },
  { icon: <CreditCard className="h-4 w-4" />, label: "Transactions", href: "/dashboard/admin/transactions" },
  { icon: <Settings className="h-4 w-4" />, label: "Settings", href: "/dashboard/admin/settings" },
]

export const clientSidebarItems: SidebarItem[] = [
  { icon: <BarChart className="h-4 w-4" />, label: "Dashboard", href: "/dashboard/client" },
  { icon: <Search className="h-4 w-4" />, label: "Browse", href: "/dashboard/client/browse" },
  { icon: <Calendar className="h-4 w-4" />, label: "My Bookings", href: "/dashboard/client/bookings" },
  { icon: <MessageSquare className="h-4 w-4" />, label: "Messages", href: "/dashboard/client/messages" },
  { icon: <CreditCard className="h-4 w-4" />, label: "Payments", href: "/dashboard/client/payments" },
  { icon: <Settings className="h-4 w-4" />, label: "Settings", href: "/dashboard/client/settings" },
]

export function getSidebarItems(role: string): SidebarItem[] {
  const items = {
    client: clientSidebarItems,
    renter: renterSidebarItems,
    admin: adminSidebarItems
  }
  return items[role as keyof typeof items] || []
}
