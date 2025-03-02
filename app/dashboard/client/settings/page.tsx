"use client"

import dynamic from 'next/dynamic'
import DashboardLayout from "@/components/dashboard-layout"
import { clientSidebarItems } from "@/lib/sidebar-items"

// Use the correct export name for dynamic rendering
export const dynamic = "force-dynamic"

// Use dynamic import with ssr: false
const Settings = dynamic(() => import("@/components/client/settings"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-screen">Loading settings...</div>
})

export default function ClientSettingsPage() {
  return (
    <DashboardLayout sidebarItems={clientSidebarItems} userRole="Client">
      <Settings />
    </DashboardLayout>
  )
}