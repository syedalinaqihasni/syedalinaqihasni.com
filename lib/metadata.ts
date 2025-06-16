import { Metadata } from 'next';

export const siteBase = 'https://www.syedalinaqihasni.com';

export const siteRoutes: { path: string; title: string; description: string }[] = [
  {
    path: '/',
    title: 'Home | Portfolio of Syed Ali Naqi Hasni - Frontend Developer',
    description: 'Welcome to my personal website where I showcase my work, thoughts, and journey.',
  },
  {
    path: '/about',
    title: 'About Syed Ali Naqi Hasni | Frontend Developer Portfolio',
    description: 'Learn more about Syed Ali Naqi Hasni, a passionate frontend developer.',
  },
  {
    path: '/archive',
    title: 'Content Archive | Syed Ali Naqi Hasni Portfolio',
    description: 'Browse through the archived content, ideas, and past updates.',
  },
  {
    path: '/blogs',
    title: 'Tech Blogs by Syed Ali Naqi Hasni | Tutorials, Opinions, Tips & Tricks etc',
    description: 'Read my technical thoughts, tutorials, and personal dev experiences.',
  },
  {
    path: '/contact',
    title: 'Contact Syed Ali Naqi Hasni | Get in Touch',
    description: 'Get in touch with me via email or social platforms.',
  },
  {
    path: '/experience',
    title: 'Professional Experience | Syed Ali Naqi Hasni',
    description: 'Explore my professional background and work history.',
  },
  {
    path: '/projects',
    title: 'Previous Projects | Frontend Development Work by Syed Ali Naqi Hasni',
    description: 'A collection of personal and professional projects I\'ve built.',
  },
  {
    path: '/skills',
    title: 'Skills & Tools | Syed Ali Naqi Hasni, Frontend Engineer',
    description: 'An overview of my technical abilities and tools I work with.',
  },
  {
    path: '/resume',
    title: 'Resume of Syed Ali Naqi Hasni | Frontend Developer',
    description: 'Download or view my resume to learn about my technical skills and experience.',
  },
  {
    path: '/services',
    title: 'Web Development Services | Syed Ali Naqi Hasni',
    description: 'Professional web development and design services to help your business grow online.',
  },
  {
    path: '/pricing',
    title: 'Service Pricing | Web Development Packages - Syed Ali Naqi Hasni',
    description: 'Transparent pricing for web development services. Choose the perfect plan for your project.',
  },
  {
    path: '/certificates',
    title: 'Professional Certificates | Syed Ali Naqi Hasni',
    description: 'Browse through my professional certifications and achievements.',
  }, {
    path: '/services',
    title: 'Web Development & Design Services | Syed Ali Naqi Hasni',
    description: 'Professional web development and design services to help your business grow online.',
  },
  {
    path: '/pricing',
    title: 'Service Pricing Plans | Syed Ali Naqi Hasni - Web Developer',
    description: 'Transparent pricing for web development services. Choose the perfect plan for your project.',
  },
  {
    path: '/gallery',
    title: 'Project & Life Gallery | Syed Ali Naqi Hasni - Frontend Developer',
    description: 'A visual showcase of my life, work, and creative moments.',
  }, {
    path: '/events',
    title: 'Tech Events & Meetups | Syed Ali Naqi Hasni - Frontend Developer',
    description: 'Check out tech talks, meetups, and events I\'ve attended or hosted.',
  }
  , {
    path: '/links',
    title: 'Useful Developer Links | Syed Ali Naqi Hasni\'s Web Toolkit',
    description: 'Useful links to my profiles, tools, and favorite resources.',
  },
  {
    path: '/socials',
    title: 'Social Profiles | Connect with Syed Ali Naqi Hasni Online',
    description: 'Connect with me on various social platforms and see my online presence.',
  },
  {
    path: '/blogs/tag',
    title: 'Tech Blogs Tag by Syed Ali Naqi Hasni | Tutorials, Opinions, Tips & Tricks etc',
    description: 'Read my technical thoughts, tutorials, and personal dev experiences.',
  },
  {
    path: '/blogs/category',
    title: 'Tech Blogs Category by Syed Ali Naqi Hasni | Tutorials, Opinions, Tips & Tricks etc',
    description: 'Read my technical thoughts, tutorials, and personal dev experiences.',
  },
  {
    path: '/events/tag',
    title: 'Tech Events & Meetups Tag | Syed Ali Naqi Hasni - Frontend Developer',
    description: 'Check out tech talks, meetups, and events I\'ve attended or hosted.',
  },
  {
    path: '/events/category',
    title: 'Tech Events & Meetups Category| Syed Ali Naqi Hasni - Frontend Developer',
    description: 'Check out tech talks, meetups, and events I\'ve attended or hosted.',
  },
  {
    path: '/projects/tag',
    title: 'Previous Projects Tag | Frontend Development Work by Syed Ali Naqi Hasni',
    description: 'A collection of personal and professional projects I\'ve built.',
  },
  {
    path: '/projects/category',
    title: 'Previous Projects Category | Frontend Development Work by Syed Ali Naqi Hasni',
    description: 'A collection of personal and professional projects I\'ve built.',
  },
];

export const defaultMetadata = {
  author: 'Syed Ali Naqi Hasni',
  siteName: 'Syed Ali Naqi Hasni',
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
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title}`,
      description: finalDescription,
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
        { url: 'https://syedalinaqihasni.com/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: 'https://syedalinaqihasni.com/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        { url: 'https://syedalinaqihasni.com/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      ],
      apple: [
        { url: 'https://syedalinaqihasni.com/apple-icon-57x57.png', sizes: '57x57' },
        { url: 'https://syedalinaqihasni.com/apple-icon-60x60.png', sizes: '60x60' },
        { url: 'https://syedalinaqihasni.com/apple-icon-72x72.png', sizes: '72x72' },
        { url: 'https://syedalinaqihasni.com/apple-icon-76x76.png', sizes: '76x76' },
        { url: 'https://syedalinaqihasni.com/apple-icon-114x114.png', sizes: '114x114' },
        { url: 'https://syedalinaqihasni.com/apple-icon-120x120.png', sizes: '120x120' },
        { url: 'https://syedalinaqihasni.com/apple-icon-144x144.png', sizes: '144x144' },
        { url: 'https://syedalinaqihasni.com/apple-icon-152x152.png', sizes: '152x152' },
        { url: 'https://syedalinaqihasni.com/apple-icon-180x180.png', sizes: '180x180' },
      ],
      other: [
        { rel: 'icon', url: 'https://syedalinaqihasni.com/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
        { rel: 'manifest', url: 'https://syedalinaqihasni.com/manifest.json' },
        { rel: 'msapplication-TileImage', url: 'https://syedalinaqihasni.com/ms-icon-144x144.png' },
      ],
    },
  };
}

export function getMetadataForPath(path: string): Metadata {
  const page = siteRoutes.find(route => route.path === path);
  if (!page) throw new Error(`No metadata found for path: ${path}`);
  return generateMetadata(page);
}