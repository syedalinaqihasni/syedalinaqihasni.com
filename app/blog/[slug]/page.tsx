import { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity";
import { postBySlugQuery, postsQuery } from "@/lib/sanity.queries";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PortableText } from "@portabletext/react";

export async function generateStaticParams() {
  const posts = await sanityFetch({ query: postsQuery });
  return posts.map((post: { slug: { current: string } }) => ({
    slug: post.slug.current,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await sanityFetch({
    query: postBySlugQuery,
    params: { slug: params.slug },
  });

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await sanityFetch({
    query: postBySlugQuery,
    params: { slug: params.slug },
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="container mx-auto px-4 py-32 md:py-40">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category: string) => (
              <Badge key={category} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {formatDate(post.publishedAt)}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.estimatedReadingTime} min read
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-12">
          <Image
            src={post.mainImage}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose dark:prose-invert max-w-none mb-16">
          <PortableText value={post.content} />
        </div>

        {/* Share Button */}
        <div className="text-center">
          <Button variant="outline">
            <Share2 className="h-4 w-4 mr-2" />
            Share Article
          </Button>
        </div>
      </div>
    </div>
  );
}