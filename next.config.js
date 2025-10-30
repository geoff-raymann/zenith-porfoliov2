/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.jsdelivr.net',
      'cdn.sanity.io'
    ],
    formats: ['image/avif', 'image/webp'],
  },
  swcMinify: true,
  compress: true,
  reactStrictMode: true,
}

module.exports = nextConfig