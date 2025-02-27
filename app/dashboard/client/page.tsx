import DashboardOverview from "@/components/client/dashboard-overview"
import DashboardLayout from "@/components/dashboard-layout"
import { clientSidebarItems } from "@/lib/sidebar-items"

export default function ClientDashboardPage() {
  return (
    <DashboardLayout sidebarItems={clientSidebarItems} userRole="Client">
      <DashboardOverview />
    </DashboardLayout>
  )
}

