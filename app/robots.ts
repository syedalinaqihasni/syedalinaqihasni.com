import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: '/private/',
      },
      {
        userAgent: '*',
        disallow: '/_next/',
      },
    ],
    sitemap: 'https://www.syedalinaqihasni.com/sitemap.xml',
  }
}
