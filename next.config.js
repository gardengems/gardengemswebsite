/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? "" : "",
  output: 'export',
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig 