// app/lib/metadata.ts
import { Metadata } from 'next';

const siteBase = 'https://www.syedalinaqihasni.com';

export const siteRoutes: { path: string; title: string; description: string }[] = [
  {
    path: '/',
    title: 'Home',
    description: 'Welcome to my personal website where I showcase my work, thoughts, and journey.',
  },
  {
    path: '/about',
    title: 'About',
    description: 'Learn more about Syed Ali Naqi Hasni, a passionate frontend developer.',
  },
  {
    path: '/archive',
    title: 'Archive',
    description: 'Browse through the archived content, ideas, and past updates.',
  },
  {
    path: '/blog',
    title: 'Blog',
    description: 'Read my technical thoughts, tutorials, and personal dev experiences.',
  },
  {
    path: '/contact',
    title: 'Contact',
    description: 'Get in touch with me via email or social platforms.',
  },
  {
    path: '/events',
    title: 'Events',
    description: 'Check out tech talks, meetups, and events I’ve attended or hosted.',
  },
  {
    path: '/experience',
    title: 'Experience',
    description: 'Explore my professional background and work history.',
  },
  {
    path: '/gallery',
    title: 'Gallery',
    description: 'A visual showcase of my life, work, and creative moments.',
  },
  {
    path: '/links',
    title: 'Links',
    description: 'Useful links to my profiles, tools, and favorite resources.',
  },
  {
    path: '/projects',
    title: 'Projects',
    description: 'A collection of personal and professional projects I’ve built.',
  },
  {
    path: '/resume',
    title: 'Resume',
    description: 'Download or view my resume to learn about my technical skills and experience.',
  },
  {
    path: '/skills',
    title: 'Skills',
    description: 'An overview of my technical abilities and tools I work with.',
  },
 {
  path: '/socials',
  title: 'Socials',
  description: 'Connect with me on various social platforms and see my online presence.',
}

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
    title: `${title} | ${defaultMetadata.siteName}`,
    description: finalDescription,
    metadataBase: new URL(defaultMetadata.baseUrl),
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: fullUrl,
      title: `${title} | ${defaultMetadata.siteName}`,
      description: finalDescription,
      siteName: defaultMetadata.siteName,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${defaultMetadata.siteName}`,
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
  };
}

export function getMetadataForPath(path: string): Metadata {
  const page = siteRoutes.find(route => route.path === path);
  if (!page) throw new Error(`No metadata found for path: ${path}`);
  return generateMetadata(page);
}
