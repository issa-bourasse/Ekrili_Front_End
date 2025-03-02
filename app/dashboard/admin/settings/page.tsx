'use client'

import dynamic from 'next/dynamic'
import DashboardLayout from "@/components/dashboard-layout"
import { adminSidebarItems } from "@/lib/sidebar-items"

// Renamed from 'dynamic' to 'dynamicConfig' to avoid conflict
export const dynamicConfig = "force-dynamic"

// Use dynamic import with ssr: false
const Settings = dynamic(() => import("@/components/admin/settings"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-screen">Loading settings...</div>
})

export default function AdminSettingsPage() {
  return (
    <DashboardLayout sidebarItems={adminSidebarItems} userRole="Admin">
      <Settings />
    </DashboardLayout>
  )
}

