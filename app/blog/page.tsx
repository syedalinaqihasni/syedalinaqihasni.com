import { Metadata } from 'next';
import BlogList from '@/components/blog/blog-list';
import { Post } from '@/types/blogs';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Blog | Syed Ali Naqi Hasni',
  description:
    'Read my latest articles about web development, design, and technology',
};

// --- Static Text ---
const CONSTANT = {
  pageTitle: 'My Blog',
  pageDescription:
    'Thoughts, tutorials, and insights about web development, design, and technology.',
  openGraph: {
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

// --- Static Class Names ---
const styles = {
  container: 'container mx-auto px-4 py-32 md:py-40',
  wrapper: 'max-w-6xl mx-auto',
  header: 'text-center mb-16',
  title: 'text-4xl md:text-5xl font-bold mb-6',
  description: 'text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto',
};

export default async function BlogPage() {
  // const posts: Post[] = await sanityFetch({ query: postsQuery });

  return (
    <div className={styles?.container}>
      <div className={styles?.wrapper}>
        <div className={styles?.header}>
          <h1 className={styles?.title}>{CONSTANT?.pageTitle}</h1>
          <p className={styles?.description}>{CONSTANT?.pageDescription}</p>
        </div>

        {/* <BlogList posts={posts} /> */}
      </div>
    </div>
  );
}
