import { Metadata } from 'next';
import BlogsList from '@/components/blogs/blogs-list';
import { posts } from '@/constants/blogs';
import { toProperCase } from '@/lib/utils';


// Optional: You can add specific overrides here
const DESCRIPTION_OVERRIDES: Record<string, string> = {
  tutorials: 'These are tutorial blogs to help you learn by doing.',
  freelance: 'These are freelance blogs about client work, projects, and lifestyle.',
  design: 'These are design blogs focused on UI/UX and creative thinking.',
  // Add more if needed
};

const styles = {
  container: 'container mx-auto px-4 py-32 md:py-40',
  wrapper: 'max-w-6xl mx-auto',
  header: 'text-center mb-16',
  title: 'text-4xl md:text-5xl font-bold mb-6',
  description: 'text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto',
};

// Generate <head> metadata dynamically
export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
  const tag = params.tag;
  const title = `${toProperCase(tag)} Blogs`;
  const description =
    DESCRIPTION_OVERRIDES[tag.toLowerCase()] ||
    `These are ${tag.toLowerCase()} blogs for curious minds.`;

  return {
    title,
    description,
  };
}

// Server component
export default async function BlogsPage({ params }: { params: { tag: string } }) {
  const tag = params.tag.toLowerCase();
  const categorizedPosts = posts.filter(post =>
  post.tags.map(c => c.toLowerCase()).includes(tag)
);

  const title = `${toProperCase(tag)} Blogs`;
  const description =
    DESCRIPTION_OVERRIDES[tag] ||
    `These are ${tag} blogs for curious minds.`;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>
        <BlogsList posts={categorizedPosts} />
      </div>
    </div>
  );
}
