import { Metadata } from 'next';

const baseUrl = 'https://www.syedalinaqihasni.com';
const defaultOgImage = `${baseUrl}/images/about-us-syed-ali-naqi-hasni.jpg`;

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
  const ogImage = image || defaultOgImage;

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
      images: [
        {
          url: ogImage,
          alt: title,
          width: 1200,
          height: 630,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: safeDescription,
      images: [ogImage],
      site: '@syedalinaqi1997', // Optional: if you have a Twitter handle
      creator: '@syedalinaqi1997',
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
      google: 'obYcqlLDubY2nOpL61i22oXpe7nNdWiNLhCb_VDyIQA',
    },
  };
}
