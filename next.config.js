/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos'],
    unoptimized: true,
  },
  output: 'export',
}

module.exports = nextConfig 