import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isDashboard = nextUrl.pathname.startsWith("/dashboard")
      
      if (isDashboard) {
        if (isLoggedIn) return true
        return false
      } else if (isLoggedIn) {
        return true
      }
      return true
    },
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        // Add your authentication logic here
        // This is a placeholder that allows any login for development
        return {
          id: "1",
          name: "Demo User",
          email: "demo@example.com",
        }
      },
    }),
  ],
} satisfies NextAuthConfig
