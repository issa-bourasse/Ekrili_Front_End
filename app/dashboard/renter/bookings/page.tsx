import Bookings from "@/components/renter/bookings"
import DashboardLayout from "@/components/dashboard-layout"
import { renterSidebarItems } from "@/lib/sidebar-items"

export default function RenterBookingsPage() {
  return (
    <DashboardLayout sidebarItems={renterSidebarItems} userRole="Renter">
      <Bookings />
    </DashboardLayout>
  )
}

