"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export const Button = React.forwardRef(({ 
  className, 
  children,
  onClick,
  ...props 
}, ref) => {
  return (
    <button
      className={cn("button-styles", className)}
      ref={ref}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
})
Button.displayName = "Button"
