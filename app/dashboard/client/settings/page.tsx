"use client"

import dynamic from 'next/dynamic'
import DashboardLayout from "@/components/dashboard-layout"
import { clientSidebarItems } from "@/lib/sidebar-items"

// Next.js config for dynamic rendering
export const dynamic = "force-dynamic"

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