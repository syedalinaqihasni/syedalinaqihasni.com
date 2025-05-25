// app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { Calendar, Clock, Share2 } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Post } from '@/types';

// Constants
const TEXT = {
  shareButton: 'Share Article',
  blogTitleSuffix: ' | Blog',
  readUnit: 'min read',
};

const STYLES = {
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

// Static Params
// export const generateStaticParams = async () => {
// const posts: Post[] = await sanityFetch({ query: postsQuery });
// return posts.map((post) => ({
//   slug: post?.slug.current,
// }));
// };

// Metadata
// export const generateMetadata = async ({
//   params,
// }: {
//   params: { slug: string };
// }): Promise<Metadata> => {
//   const post: Post = await sanityFetch({
//     query: postBySlugQuery,
//     params: { slug: params.slug },
//   });

//   return {
//     title: `${post?.title}${TEXT.blogTitleSuffix}`,
//     description: post?.excerpt,
//   };
// };

// Page Component
// const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
// const post: Post = await sanityFetch({
//   query: postBySlugQuery,
//   params: { slug: params.slug },
// });

// return (
// <div className={STYLES.container}>
//   <div className={STYLES.wrapper}>
//     {/* Header */}
//     <div className="mb-8">
//       <div className={STYLES.categoryWrapper}>
//         {post?.categories?.map((category: string) => (
//           <Badge key={category} variant="secondary">
//             {category}
//           </Badge>
//         ))}
//       </div>

//       <h1 className={STYLES.title}>{post?.title}</h1>

//       <div className={STYLES.metaRow}>
//         <div className={STYLES.metaItem}>
//           <Calendar className="h-4 w-4" />
//           {formatDate(post?.publishedAt)}
//         </div>
//         <div className={STYLES.metaItem}>
//           <Clock className="h-4 w-4" />
//           {post?.estimatedReadingTime} {TEXT.readUnit}
//         </div>
//       </div>
//     </div>

//     {/* Featured Image */}
//     {post?.mainImage && (
//       <div className={STYLES.imageWrapper}>
//         <Image
//           src={post.mainImage}
//           alt={post?.title}
//           fill
//           className={STYLES.imageClass}
//         />
//       </div>
//     )}

//     {/* Content */}
//     <div className={STYLES.content}>
//       <PortableText value={post?.content} />
//     </div>

//     {/* Share Button */}
//     <div className={STYLES.shareWrapper}>
//       <Button variant="outline">
//         <Share2 className="h-4 w-4 mr-2" />
//         {TEXT.shareButton}
//       </Button>
//     </div>
//   </div>
// </div>
//   );
// };

// export default BlogPostPage;

const page = () => {
  return <div></div>;
};

export default page;
