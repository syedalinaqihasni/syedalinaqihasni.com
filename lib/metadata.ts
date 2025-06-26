import { Metadata } from 'next';

export const siteBase = 'https://www.syedalinaqihasni.com';

export const siteRoutes: { path: string; title: string; description: string }[] = [
 {
    path: '/',
    title: 'Home | Portfolio of Syed Ali Naqi Hasni - Frontend Developer',
    description: 'Explore the portfolio of Syed Ali Naqi Hasni, showcasing projects, experiences, blogs, and services.',
  },
  {
    path: '/about',
    title: 'About Syed Ali Naqi Hasni | Frontend Developer Portfolio',
    description: 'Get to know Syed Ali Naqi Hasni—his background, interests, values, and journey as a frontend developer.',
  },
  {
    path: '/archive',
    title: 'Content Archive | Syed Ali Naqi Hasni Portfolio',
    description: 'Discover past articles, projects, and updates organized in an easy-to-navigate archive.',
  },
  {
    path: '/blogs',
    title: `Syed Ali Naqi Hasni's Blog | Dev Tutorials & Tricks`,
    description: 'Read technical tutorials, dev insights, and programming tips from real-world experience.',
  },
  {
    path: '/contact',
    title: 'Contact Syed Ali Naqi Hasni | Get in Touch',
    description: 'Reach out to me directly through email or connect on social media for collaborations and inquiries.',
  },
  {
    path: '/experience',
    title: 'Professional Experience | Syed Ali Naqi Hasni',
    description: 'A summary of my work experience, roles held, companies worked with, and tech stack used.',
  },
  {
    path: '/projects',
    title: 'Previous Projects | Work by Syed Ali Naqi Hasni',
    description: 'View my featured frontend development projects—professional, freelance, and personal.',
  },
  {
    path: '/skills',
    title: 'Skills & Tools | Syed Ali Naqi Hasni, Frontend Engineer',
    description: 'Discover the technologies, frameworks, and tools I use to build fast, scalable web apps.',
  },
  {
    path: '/resume',
    title: 'Resume of Syed Ali Naqi Hasni | Frontend Developer',
    description: 'Browse or download my resume showcasing skills, experience, and career achievements.',
  },
  {
    path: '/services',
    title: 'Web Development Services | Syed Ali Naqi Hasni',
    description: 'Offering custom frontend development, design, and optimization services tailored for you.',
  },
  {
    path: '/pricing',
    title: 'Service Pricing | Web Development Packages - Syed Ali Naqi Hasni',
    description: 'Check transparent pricing for my web services—affordable plans for startups and businesses.',
  },
  {
    path: '/certificates',
    title: 'Professional Certificates | Syed Ali Naqi Hasni',
    description: 'Browse recognized certifications in frontend development, web design, and software skills.',
  },
  {
    path: '/gallery',
    title: 'Project & Life Gallery | Syed Ali Naqi Hasni - Frontend Developer',
    description: 'A visual journey through my tech projects, events, life moments, and creative captures.',
  },
  {
    path: '/events',
    title: 'Tech Events & Meetups | Syed Ali Naqi Hasni - Frontend Developer',
    description: 'Explore tech talks, coding events, and developer meetups I\'ve attended or participated in.',
  },
  {
    path: '/links',
    title: 'Useful Developer Links | Syed Ali Naqi Hasni\'s Web Toolkit',
    description: 'A curated list of my web profiles, favorite dev tools, resources, and productivity links.',
  },
  {
    path: '/socials',
    title: 'Social Profiles | Connect with Syed Ali Naqi Hasni Online',
    description: 'Connect with me across LinkedIn, GitHub, Twitter, and more developer-centric platforms.',
  },
  {
    path: '/blogs/tag',
    title: `Syed Ali Naqi Hasni's Blog tag | Dev Tutorials & Tricks`,
    description: 'Explore blog posts filtered by specific tags related to web development and frontend trends.',
  },
  {
    path: '/blogs/category',
    title: `Syed Ali Naqi Hasni's Blog category | Dev Tutorials & Tricks`,
    description: 'Browse tech articles grouped by categories such as JavaScript, React, performance, and more.',
  },
  {
    path: '/events/tag',
    title: 'Tech Events & Meetups Tag | Syed Ali Naqi Hasni - Frontend Developer',
    description: 'Find tech events I\'ve tagged based on relevance—frameworks, communities, and innovation.',
  },
  {
    path: '/events/category',
    title: 'Tech Events & Meetups Category | Syed Ali Naqi Hasni - Frontend Developer',
    description: 'Grouped tech events and coding meetups by categories like conferences, talks, and bootcamps.',
  },
  {
    path: '/projects/tag',
    title: 'Previous Projects Tag | Work by Syed Ali Naqi Hasni',
    description: 'Projects filtered by tag to help you find related work in specific stacks or industries.',
  },
  {
    path: '/projects/category',
    title: 'Previous Projects Category | Work by Syed Ali Naqi Hasni',
    description: 'Discover projects categorized by domain—ecommerce, CMS, SaaS, UI kits, and more.',
  }
];

export const defaultMetadata = {
  author: 'Syed Ali Naqi Hasni',
  siteName: 'Syed Ali Naqi Hasni',
  image: `${siteBase}/about-us-syed-ali-naqi-hasni.jpg`,
  googleSiteVerification: 'obYcqlLDubY2nOpL61i22oXpe7nNdWiNLhCb_VDyIQA',
  baseUrl: siteBase,
  keywords: [
    'Syed Ali Naqi Hasni',
    'Frontend Developer',
    'Web Developer',
    'Chronical',
    'JavaScript',
    'React',
    'Next.js',
    'Developer Portfolio',
  ],
};

export function generateMetadata({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description?: string;
}): Metadata {
  const fullUrl = `${defaultMetadata.baseUrl}${path}`;
  const finalDescription = description ?? defaultMetadata.keywords.join(', ');

  return {
  title: `${title}`,
  description: finalDescription,
  metadataBase: new URL(defaultMetadata.baseUrl),
  alternates: {
    canonical: path,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: fullUrl,
    title: `${title}`,
    description: finalDescription,
    siteName: defaultMetadata.siteName,
    images: [
      {
        url: `${defaultMetadata.image}`, // You can customize per-page if needed
        width: 1200,
        height: 630,
        alt: `${title} | ${defaultMetadata.siteName}`,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title}`,
    description: finalDescription,
    images: [`${defaultMetadata.image}`],
    site: '@syedalinaqi1997', // optional: Twitter handle
    creator: '@@syedalinaqi1997',
  },
  authors: [
    {
      name: defaultMetadata.author,
      url: defaultMetadata.baseUrl,
    },
  ],
  keywords: defaultMetadata.keywords,
  category: 'technology',
  icons: {
    icon: [
      { url: 'https://www.syedalinaqihasni.com/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: 'https://www.syedalinaqihasni.com/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: 'https://www.syedalinaqihasni.com/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: 'https://www.syedalinaqihasni.com/apple-icon-57x57.png', sizes: '57x57' },
      { url: 'https://www.syedalinaqihasni.com/apple-icon-60x60.png', sizes: '60x60' },
      { url: 'https://www.syedalinaqihasni.com/apple-icon-72x72.png', sizes: '72x72' },
      { url: 'https://www.syedalinaqihasni.com/apple-icon-76x76.png', sizes: '76x76' },
      { url: 'https://www.syedalinaqihasni.com/apple-icon-114x114.png', sizes: '114x114' },
      { url: 'https://www.syedalinaqihasni.com/apple-icon-120x120.png', sizes: '120x120' },
      { url: 'https://www.syedalinaqihasni.com/apple-icon-144x144.png', sizes: '144x144' },
      { url: 'https://www.syedalinaqihasni.com/apple-icon-152x152.png', sizes: '152x152' },
      { url: 'https://www.syedalinaqihasni.com/apple-icon-180x180.png', sizes: '180x180' },
    ],
    other: [
      { rel: 'icon', url: 'https://www.syedalinaqihasni.com/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'manifest', url: 'https://www.syedalinaqihasni.com/manifest.json' },
      { rel: 'msapplication-TileImage', url: 'https://www.syedalinaqihasni.com/ms-icon-144x144.png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  verification: {
    google: defaultMetadata.googleSiteVerification,
  },
};
}

export function getMetadataForPath(path: string): Metadata {
  const page = siteRoutes.find(route => route.path === path);
  if (!page) throw new Error(`No metadata found for path: ${path}`);
  return generateMetadata(page);
}