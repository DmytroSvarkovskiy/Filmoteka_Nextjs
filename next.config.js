/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    formats:['image/webp','image/avif'],
  remotePatterns: [{
      protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
  }]}}

module.exports= nextConfig;