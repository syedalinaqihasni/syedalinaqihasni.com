// app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import { Calendar, Clock, Share2 } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CONSTANT, posts } from '@/constants/blogs';
import { Post } from '@/types/blogs';
import { notFound } from 'next/navigation';


export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post: Post | undefined = posts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return {
    title: post.title,
    description: post.excerpt || post.title,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      type: 'article',
      publishedTime: post.publishedAt,
      images: post.image
        ? [
            {
              url: post.image,
              alt: post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || post.title,
      images: post.image ? [post.image] : [],
    },
  };
}

const styles = {
  container: 'container mx-auto px-4 py-32 md:py-40',
  wrapper: 'max-w-4xl mx-auto',
  categoryWrapper: 'flex flex-wrap gap-2 mb-4',
  title: 'text-4xl md:text-5xl font-bold mb-6',
  metaRow: 'flex items-center gap-6 text-muted-foreground',
  metaItem: 'flex items-center gap-2',
  imageWrapper: 'relative h-[400px] rounded-lg overflow-hidden mb-12',
  imageClass: 'object-cover',
  content: 'prose dark:prose-invert max-w-none mb-16',
  shareWrapper: 'text-center',
};

// Utils
const formatDate = (dateString: string): string =>
  new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });


const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
const post:Post=posts.filter ((post) => post.slug === params.slug)[0];

return (
<div className={styles?.container}>
  <div className={styles?.wrapper}>
    {/* Header */}
    <div className={'mb-8'}>
      <div className={styles?.categoryWrapper}>
        {post?.categories?.map((category: string) => (
          <Badge key={category} variant={'secondary'}>
            {category}
          </Badge>
        ))}
      </div>

      <h1 className={styles?.title}>{post?.title}</h1>

      <div className={styles?.metaRow}>
        <div className={styles?.metaItem}>
          <Calendar className={'h-4 w-4'} />
          {formatDate(post?.publishedAt)}
        </div>
        <div className={styles?.metaItem}>
          <Clock className={'h-4 w-4'} />
          {post?.readingTime} {CONSTANT?.readUnit}
        </div>
      </div>
    </div>

    {/* Featured Image */}
    {post?.image && (
      <div className={styles?.imageWrapper}>
        <Image
          src={post.image}
          alt={post?.title}
          fill
          className={styles?.imageClass}
        />
      </div>
    )}

    {/* Content */}
    <div className={styles?.content}>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>

    {/* Share Button */}
    <div className={styles?.shareWrapper}>
      <Button variant={'outline'}>
        <Share2 className={'h-4 w-4 mr-2'} />
        {CONSTANT?.shareButton}
      </Button>
    </div>
  </div>
</div>
  );
};

export default BlogPostPage;
