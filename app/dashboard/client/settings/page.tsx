"use client"

import dynamic from 'next/dynamic'
import DashboardLayout from "@/components/dashboard-layout"
import { clientSidebarItems } from "@/lib/sidebar-items"

export const dynamicConfig = "force-dynamic"

// Use dynamic import
const Settings = dynamic(() => import("@/components/client/settings"), {
  loading: () => <div className="flex items-center justify-center h-screen">Loading settings...</div>
})

export default function ClientSettingsPage() {
  return (
    <DashboardLayout sidebarItems={clientSidebarItems} userRole="Client">
      <Settings />
    </DashboardLayout>
  )
}
