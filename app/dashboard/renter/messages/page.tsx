'use client'

import Messages from "@/components/renter/messages"
import DashboardLayout from "@/components/dashboard-layout"
import { renterSidebarItems } from "@/lib/sidebar-items"
import "@/app/globals.css"

export default function RenterMessagesPage() {
  return (
    <DashboardLayout sidebarItems={renterSidebarItems} userRole="Renter">
      <Messages />
    </DashboardLayout>
  )
}
