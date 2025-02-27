import { ReactNode } from "react";
import { BarChart, Home, Calendar, MessageSquare, CreditCard, Settings, Search, Users } from "lucide-react";

interface SidebarItem {
  icon: ReactNode;
  label: string;
  href: string;
}

export const renterSidebarItems: SidebarItem[] = [
  { icon: <BarChart className="h-4 w-4" />, label: "Dashboard", href: "/dashboard/renter" },
  { icon: <Home className="h-4 w-4" />, label: "My Properties", href: "/dashboard/renter/properties" },
  { icon: <Calendar className="h-4 w-4" />, label: "Bookings", href: "/dashboard/renter/bookings" },
  { icon: <Users className="h-4 w-4" />, label: "Staff Management", href: "/dashboard/renter/staff" },
];
