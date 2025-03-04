"use client"

import dynamic from 'next/dynamic'
import DashboardLayout from "@/components/dashboard-layout"
import { clientSidebarItems } from "@/lib/sidebar-items"
import Loading from "@/components/loading"

const Payments = dynamic(
  () => import("@/components/client/payments").then(mod => mod.default),
  {
    loading: () => <Loading />,
    ssr: false
  }
)

export default function ClientPaymentsPage() {
  return (
    <DashboardLayout sidebarItems={clientSidebarItems} userRole="Client">
      <Payments />
    </DashboardLayout>
  )
}

