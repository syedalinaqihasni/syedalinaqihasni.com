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

  async redirects() {
    return [
      // Redirect /blog/* to /blogs/*
      {
        source: '/blog/:path*',
        destination: '/blogs/:path*',
        permanent: true,
      },

      // Redirect HTTP to HTTPS
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'syedalinaqihasni.com',
          },
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://syedalinaqihasni.com/:1',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
