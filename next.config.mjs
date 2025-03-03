/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
  // Disable experimental features that might be causing issues
  experimental: {
    // Disable all experimental features
  },
  // Increase static page generation timeout
  staticPageGenerationTimeout: 180,
  // Add trailingSlash for better compatibility with hosting providers
  trailingSlash: true,
  // Enable standalone mode
  output: "standalone",
}

export default nextConfig
