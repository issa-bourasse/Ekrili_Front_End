"use client"

import dynamic from 'next/dynamic'
import DashboardLayout from "@/components/dashboard-layout"
import { clientSidebarItems } from "@/lib/sidebar-items"

// Use dynamic import
const MyBookings = dynamic(() => import("@/components/client/my-bookings"), {
  loading: () => <div className="flex items-center justify-center h-screen">Loading bookings...</div>
})

export default function ClientBookingsPage() {
  return (
    <DashboardLayout sidebarItems={clientSidebarItems} userRole="Client">
      <MyBookings />
    </DashboardLayout>
  )
}
