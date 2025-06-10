import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { Calendar, Clock, Share2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Post } from "@/types/blogs";
import { generateDynamicMetadata } from "@/lib/generateDynamicMetadata";
import { CONSTANT, posts } from "@/constants/blogs";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import HtmlRenderer from "@/components/HtmlRenderer";
import SingleBlogPage from "@/components/blogs/SingleBlogPage";
import StructuredData from '@/components/StructuredData';
import { generateBlogPostSchema, generateBreadcrumbSchema } from '@/constants/structuredData';

const styles = {
  container: "container mx-auto px-4 py-32 md:py-40",
  wrapper: "max-w-4xl mx-auto",
  categoryWrapper: "flex flex-wrap gap-2 mb-4",
  tagWrapper: "flex flex-wrap gap-2 mt-4",
  title: "text-4xl md:text-5xl font-bold mb-6",
  metaRow: "flex items-center gap-6 text-muted-foreground",
  metaItem: "flex items-center gap-2",
  imageWrapper: "relative h-[400px] rounded-lg overflow-hidden mb-12",
  image: "object-cover",
  content: "prose dark:prose-invert max-w-none mb-16",
  shareWrapper: "text-center",
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts?.find((p) => p?.slug === params?.slug);
  if (!post) return notFound();

  return generateDynamicMetadata({
    title: post?.title,
    description: post?.excerpt,
    image: post?.image,
    publishedAt: post?.publishedAt,
    path: `/blogs/${post?.slug}`,
  });
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const post = posts?.find((post) => post?.slug === params?.slug);
  if (!post) notFound();

  const blogPostSchema = generateBlogPostSchema(post);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.syedalinaqihasni.com" },
    { name: "Blogs", url: "https://www.syedalinaqihasni.com/blogs" },
    { name: post.title, url: `https://www.syedalinaqihasni.com/blogs/${post.slug}` }
  ]);

  return (
    <>
      <StructuredData data={blogPostSchema} />
      <StructuredData data={breadcrumbSchema} />
      <SingleBlogPage post={post}/>
    </>
  );
};

export default Page;