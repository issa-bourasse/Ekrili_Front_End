import MyProperties from "@/components/renter/my-properties"
import DashboardLayout from "@/components/dashboard-layout"
import { renterSidebarItems } from "@/lib/sidebar-items"

export default function RenterPropertiesPage() {
  return (
    <DashboardLayout sidebarItems={renterSidebarItems} userRole="Renter">
      <MyProperties />
    </DashboardLayout>
  )
}

