import { Metadata } from 'next';
import BlogList from '@/components/blog/blog-list';
import { Post } from '@/types';

export const metadata: Metadata = {
  title: 'Blog | Syed Ali Naqi Hasni',
  description:
    'Read my latest articles about web development, design, and technology',
};

export default async function BlogPage() {
  // const posts: Post[] = await sanityFetch({ query: postsQuery });

  return (
    <div className="container mx-auto px-4 py-32 md:py-40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Blog</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {`Thoughts, tutorials, and insights about web development, design, and technology.`}
          </p>
        </div>

        {/* <BlogList posts={posts} /> */}
      </div>
    </div>
  );
}
