'use client'

import StaffManagement from "@/components/renter/staff-management"
import DashboardLayout from "@/components/dashboard-layout"
import { renterSidebarItems } from "@/lib/sidebar-items"

export default function RenterStaffPage() {
  return (
    <DashboardLayout sidebarItems={renterSidebarItems} userRole="Renter">
      <StaffManagement />
    </DashboardLayout>
  )
}

