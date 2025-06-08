import BlogsList from '@/components/blogs/blogs-list';
import { getMetadataForPath } from '@/lib/metadata';
import { CONSTANT } from '@/constants/blogs';

export const metadata = getMetadataForPath('/blogs');

const styles = {
  container: 'container mx-auto px-4 py-32 md:py-40',
  wrapper: 'max-w-6xl mx-auto',
  header: 'text-center mb-16',
  title: 'text-4xl md:text-5xl font-bold mb-6',
  description: 'text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto',
};

export default async function BlogsPage() {
  return (
    <div className={styles?.container}>
      <div className={styles?.wrapper}>
        <div className={styles?.header}>
          <h1 className={styles?.title}>{CONSTANT?.pageTitle}</h1>
          <p className={styles?.description}>{CONSTANT?.pageDescription}</p>
        </div>

        <BlogsList  />
      </div>
    </div>
  );
}
