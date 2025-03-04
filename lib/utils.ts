import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

export function formatDateRange(dateRange: DateRange): string {
  const { from, to } = dateRange
  if (!from) return "Invalid date range"
  if (!to) return formatDate(from)
  return `${formatDate(from)} - ${formatDate(to)}`
}
