"use client"

import dynamic from 'next/dynamic'
import DashboardLayout from "@/components/dashboard-layout"
import { renterSidebarItems } from "@/lib/sidebar-items"

// Use the correct export name for dynamic rendering
export const dynamic = "force-dynamic"

// Use dynamic import with ssr: false
const Bookings = dynamic(() => import("@/components/renter/bookings"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-screen">Loading bookings...</div>
})

export default function RenterBookingsPage() {
  return (
    <DashboardLayout sidebarItems={renterSidebarItems} userRole="Renter">
      <Bookings />
    </DashboardLayout>
  )
}
