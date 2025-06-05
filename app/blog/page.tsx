import { Metadata } from 'next';
import BlogList from '@/components/blog/blog-list';
import { CONSTANT } from '@/constants/blogs';
import { styles } from '@/styles/blogs';
import { getMetadataForPath } from '@/lib/metadata';

// --- Metadata ---
// Force static generation

export const metadata = getMetadataForPath('/blog');


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
