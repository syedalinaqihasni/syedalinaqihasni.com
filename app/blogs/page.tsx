import BlogsList from '@/components/blogs/blogs-list';
import { getMetadataForPath } from '@/lib/metadata';
import { CONSTANT, posts } from '@/constants/blogs';
import { Post } from "@/types/blogs";
import StructuredData from '@/components/StructuredData';
import { blogSchema } from '@/constants/structuredData';

export const metadata = getMetadataForPath('/blogs');

const styles = {
  container: 'container mx-auto px-4 py-32 md:py-40',
  wrapper: 'max-w-6xl mx-auto',
  header: 'text-center mb-16',
  title: 'text-4xl md:text-5xl font-bold mb-6',
  description: 'text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto',
};

export default async function Page() {
  return (
    <>
      <StructuredData data={blogSchema} />
      <div className={styles?.container}>
        <div className={styles?.wrapper}>
          <div className={styles?.header}>
            <h1 className={styles?.title}>{CONSTANT?.pageTitle}</h1>
            <p className={styles?.description}>{CONSTANT?.pageDescription}</p>
          </div>

          <BlogsList posts={posts} />
        </div>
      </div>
    </>
  );
}