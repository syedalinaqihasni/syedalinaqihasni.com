// app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import { Calendar, Clock, Share2 } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CONSTANT, posts } from '@/constants/blogs';
import { Post } from '@/types/blogs';
import { notFound } from 'next/navigation';
import { formatDate } from '@/lib/utils';
import { styles } from '@/styles/singleBlogs';
import HtmlRenderer from '@/components/HtmlRenderer';


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

// export async function generateStaticParams() {
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
const post = posts.find((post) => post.slug === params.slug);
if (!post) notFound();

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
      <HtmlRenderer html={post.content}/>
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
