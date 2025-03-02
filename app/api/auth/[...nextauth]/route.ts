'use client'

import NextAuth from 'next-auth'
import { authConfig } from '@/lib/auth.config'

// Create the handler directly in the route file
const handler = NextAuth(authConfig)

// Export the handler methods
export const GET = handler.GET
export const POST = handler.POST
