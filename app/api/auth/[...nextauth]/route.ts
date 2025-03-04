import NextAuth from 'next-auth'
import { authConfig } from '@/lib/auth.config'

export const dynamic = 'force-dynamic'

// Create the handler directly in the route file
const handler = NextAuth(authConfig)

// Export the handler methods
export { handler as GET, handler as POST }