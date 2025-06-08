import { Metadata } from 'next';

const baseUrl = 'https://www.syedalinaqihasni.com';

export function generateDynamicMetadata({
  title,
  description,
  image,
  publishedAt,
  path,
}: {
  title: string;
  description?: string;
  image?: string;
  publishedAt?: string;
  path: string;
}): Metadata {
  const safeDescription = description ?? title;
  const fullUrl = `${baseUrl}${path}`;

  return {
    title,
    description: safeDescription,
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title,
      description: safeDescription,
      type: 'article',
      publishedTime: publishedAt,
      url: fullUrl,
      siteName: 'Syed Ali Naqi Hasni',
      images: image
        ? [
            {
              url: image,
              alt: title,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: safeDescription,
      images: image ? [image] : [],
    },
    category: 'technology',
    authors: [
      {
        name: 'Syed Ali Naqi Hasni',
        url: baseUrl,
      },
    ],
    keywords: [
      'Syed Ali Naqi Hasni',
      'Frontend Developer',
      'Web Developer',
      'Chronical',
      'Blogs',
      'Projects',
      'Events',
      'Next.js',
      'React',
    ],
  };
}
