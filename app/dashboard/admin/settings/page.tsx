"use client"

import dynamic from 'next/dynamic'
import DashboardLayout from "@/components/dashboard-layout"
import { adminSidebarItems } from "@/lib/sidebar-items"

// Use the correct export name for dynamic rendering
export const dynamic = "force-dynamic"

// Use dynamic import
const Settings = dynamic(() => import("@/components/admin/settings"), {
  loading: () => <div className="flex items-center justify-center h-screen">Loading settings...</div>
})

export default function AdminSettingsPage() {
  return (
    <DashboardLayout sidebarItems={adminSidebarItems} userRole="Admin">
      <Settings />
    </DashboardLayout>
  )
}