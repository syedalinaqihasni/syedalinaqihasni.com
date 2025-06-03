import { Metadata } from 'next';
import BlogList from '@/components/blog/blog-list';
import { CONSTANT } from '@/constants/blogs';
import { styles } from '@/styles/blogs';

// --- Metadata ---
// Force static generation
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Blog | Syed Ali Naqi Hasni',
  description:
    'Read my latest articles about web development, design, and technology', openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://syedalinaqihasni.com',
    title: 'Syed Ali Naqi Hasni | Frontend Web Developer',
    description:
      'Personal portfolio website showcasing my projects, skills, and experience',
    siteName: 'Syed Ali Naqi Hasni',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syed Ali Naqi Hasni | Frontend Web Developer',
    description:
      'Personal portfolio website showcasing my projects, skills, and experience',
  },
  metadataBase: new URL('https://syedalinaqihasni.com'),
};

export default async function BlogPage() {

  return (
    <div className={styles?.container}>
      <div className={styles?.wrapper}>
        <div className={styles?.header}>
          <h1 className={styles?.title}>{CONSTANT?.pageTitle}</h1>
          <p className={styles?.description}>{CONSTANT?.pageDescription}</p>
        </div>
        <BlogList />
      </div>
    </div>
  );
}
