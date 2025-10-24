/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
    formats: ['image/avif', 'image/webp'],
  },
  // These help with performance
  swcMinify: true,
  compress: true,
  // Enable React strict mode for better error handling
  reactStrictMode: true,
}

module.exports = nextConfig