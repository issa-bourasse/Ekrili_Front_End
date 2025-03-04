"use client"

import dynamic from 'next/dynamic'
import DashboardLayout from "@/components/dashboard-layout"
import { clientSidebarItems } from "@/lib/sidebar-items"
import Loading from "@/components/loading"

const Settings = dynamic(
  () => import("@/components/client/settings"),
  {
    loading: () => <Loading />,
    ssr: false
  }
)

export default function ClientSettingsPage() {
  return (
    <DashboardLayout sidebarItems={clientSidebarItems} userRole="Client">
      <Settings />
    </DashboardLayout>
  )
}
