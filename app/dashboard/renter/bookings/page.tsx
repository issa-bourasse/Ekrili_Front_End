"use client"

import dynamic from 'next/dynamic'
import DashboardLayout from "@/components/dashboard-layout"
import { renterSidebarItems } from "@/lib/sidebar-items"
import Loading from "@/components/loading"

const Bookings = dynamic(
  () => import("@/components/renter/bookings").then(mod => mod.default),
  {
    loading: () => <Loading />,
    ssr: false
  }
)

export default function RenterBookingsPage() {
  return (
    <DashboardLayout sidebarItems={renterSidebarItems} userRole="Renter">
      <Bookings />
    </DashboardLayout>
  )
}
