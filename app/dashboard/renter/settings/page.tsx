import Settings from "@/components/renter/settings"
import DashboardLayout from "@/components/dashboard-layout"
import { renterSidebarItems } from "@/lib/sidebar-items"

export default function RenterSettingsPage() {
  return (
    <DashboardLayout sidebarItems={renterSidebarItems} userRole="Renter">
      <Settings />
    </DashboardLayout>
  )
}

