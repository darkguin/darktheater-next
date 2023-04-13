const path = require('path');

/** @doc https://github.com/shadowwalker/next-pwa */
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['viasat-small.cdnvideo.ru'],
    unoptimized: true,
  },
  crossOrigin: 'anonymous',
};

module.exports = withPWA(nextConfig);
