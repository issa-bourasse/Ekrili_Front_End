import DashboardOverview from "@/components/renter/dashboard-overview"
import DashboardLayout from "@/components/dashboard-layout"
import { renterSidebarItems } from "@/lib/sidebar-items"

export default function RenterDashboardPage() {
  return (
    <DashboardLayout sidebarItems={renterSidebarItems} userRole="Renter">
      <DashboardOverview />
    </DashboardLayout>
  )
}

