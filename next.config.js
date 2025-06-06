/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ['syedalinaqihasni.com'],
  },
  optimizeFonts: false,
};

module.exports = nextConfig;
