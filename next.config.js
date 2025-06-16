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
      // Redirect non-www to www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '^syedalinaqihasni\\.com$',
          },
        ],
        destination: 'https://www.syedalinaqihasni.com/:path*',
        permanent: true,
      },

      // Redirect HTTP to HTTPS (if needed and behind a proxy like Vercel)
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://www.syedalinaqihasni.com/:path*',
        permanent: true,
      },

      // Redirect /blog/* to /blogs/*
      {
        source: '/blog/:path*',
        destination: '/blogs/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
