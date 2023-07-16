/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    formats:['image/avif','image/webp'],
  remotePatterns: [{
      protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
  }]}}

module.exports= nextConfig;