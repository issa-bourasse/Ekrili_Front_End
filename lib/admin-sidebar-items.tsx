import { BarChart, Users, Settings } from "lucide-react"

export const adminSidebarItems = [
  { icon: <BarChart className="h-4 w-4" />, label: "Dashboard", href: "/dashboard/admin" },
  { icon: <Users className="h-4 w-4" />, label: "Users", href: "/dashboard/admin/users" },
  { icon: <Settings className="h-4 w-4" />, label: "Settings", href: "/dashboard/admin/settings" },
]
