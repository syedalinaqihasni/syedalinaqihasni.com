import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { Calendar, Clock, Share2 } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Post } from '@/types/blogs';
import { generateDynamicMetadata } from '@/lib/generateDynamicMetadata';
import { CONSTANT, posts } from '@/constants/blogs';
import { notFound } from 'next/navigation';
import { formatDate } from '@/lib/utils';
import HtmlRenderer from '@/components/HtmlRenderer';

const styles = {
  container: 'container mx-auto px-4 py-32 md:py-40',
  wrapper: 'max-w-4xl mx-auto',
  categoryWrapper: 'flex flex-wrap gap-2 mb-4',
  title: 'text-4xl md:text-5xl font-bold mb-6',
  metaRow: 'flex items-center gap-6 text-muted-foreground',
  metaItem: 'flex items-center gap-2',
  imageWrapper: 'relative h-[400px] rounded-lg overflow-hidden mb-12',
  image: 'object-cover',
  content: 'prose dark:prose-invert max-w-none mb-16',
  shareWrapper: 'text-center',
};


export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts?.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return generateDynamicMetadata({
    title: post?.title,
    description: post?.excerpt,
    image: post?.image,
    publishedAt: post?.publishedAt,
    path: `/blogs/${post?.slug}`, 
  });
}

const BlogsPostPage = async ({ params }: { params: { slug: string } }) => {
const post = posts?.find((post) => post?.slug === params.slug);
if (!post) notFound();

return (
<div className={styles?.container}>
  <div className={styles?.wrapper}>
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
    {post?.image && (
      <div className={styles?.imageWrapper}>
        <Image
          src={post?.image}
          alt={post?.title}
          fill
          className={styles?.image}
        />
      </div>
    )}
    <div className={styles?.content}>
      <div >
        <HtmlRenderer html={post?.content}/>
        </div> 
    </div>
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

export default BlogsPostPage;

