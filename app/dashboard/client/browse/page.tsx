'use client'

import dynamic from 'next/dynamic'
import DashboardLayout from "@/components/dashboard-layout"
import { clientSidebarItems } from "@/lib/sidebar-items"

// Renamed from 'dynamic' to 'dynamicConfig' to avoid conflict
export const dynamicConfig = "force-dynamic"

// Use dynamic import with ssr: false
const BrowseProperties = dynamic(() => import("@/components/client/browse-properties"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-screen">Loading properties...</div>
})

export default function ClientBrowsePropertiesPage() {
  return (
    <DashboardLayout sidebarItems={clientSidebarItems} userRole="Client">
      <BrowseProperties />
    </DashboardLayout>
  )
}

