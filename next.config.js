/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // This helps with Vercel deployment
  images: {
    domains: ['cdn.sanity.io'],
    formats: ['image/avif', 'image/webp'],
  },
  swcMinify: true,
  compress: true,
  reactStrictMode: true,
}

module.exports = nextConfig