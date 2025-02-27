import MyBookings from "@/components/client/my-bookings"
import DashboardLayout from "@/components/dashboard-layout"
import { clientSidebarItems } from "@/lib/sidebar-items"

export default function ClientBookingsPage() {
  return (
    <DashboardLayout sidebarItems={clientSidebarItems} userRole="Client">
      <MyBookings />
    </DashboardLayout>
  )
}

