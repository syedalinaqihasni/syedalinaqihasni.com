import { Metadata } from 'next';
import BlogList from '@/components/blog/blog-list';
import { Post } from '@/types';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Blog | Syed Ali Naqi Hasni',
  description:
    'Read my latest articles about web development, design, and technology',
};

// --- Static Text ---
const TEXT = {
  pageTitle: 'My Blog',
  pageDescription:
    'Thoughts, tutorials, and insights about web development, design, and technology.',
};

// --- Static Class Names ---
const CLASSES = {
  container: 'container mx-auto px-4 py-32 md:py-40',
  wrapper: 'max-w-6xl mx-auto',
  header: 'text-center mb-16',
  title: 'text-4xl md:text-5xl font-bold mb-6',
  description: 'text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto',
};

export default async function BlogPage() {
  // const posts: Post[] = await sanityFetch({ query: postsQuery });

  return (
    <div className={CLASSES.container}>
      <div className={CLASSES.wrapper}>
        <div className={CLASSES.header}>
          <h1 className={CLASSES.title}>{TEXT.pageTitle}</h1>
          <p className={CLASSES.description}>{TEXT.pageDescription}</p>
        </div>

        {/* <BlogList posts={posts} /> */}
      </div>
    </div>
  );
}
