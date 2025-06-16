'use client';
import { useCallback } from "react";
import Image from "next/image";
import { Calendar, Clock, Share2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CONSTANT, posts } from "@/constants/blogs";
import { formatDate } from "@/lib/utils";
import HtmlRenderer from "@/components/HtmlRenderer";
import { Post } from "@/types/blogs";

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

const SingleBlogPage = ({ post }: { post: Post }) => {
 const shareArticle = useCallback(() => {
  if (navigator.share) {
    navigator
      .share({
        title: post?.title,
        text: post?.excerpt,
        url: window.location.href,
      })
      .catch((error) => console.error("Error sharing:", error));
  } else {
    // fallback for browsers that don't support navigator.share
    alert("Sharing is not supported in your browser. Please copy the URL manually.");
  }
}, [post]);
  return (
    <>
      <div className={styles?.container}>
      <div className={styles?.wrapper}>
        <div className={"mb-8"}>
          <div className={styles?.categoryWrapper}>
            <a href={`https://www.syedalinaqihasni.com/blogs/category/${post?.category.toLowerCase()}`}>
              <Badge variant={"secondary"}>{post?.category}</Badge>
            </a>
          </div>

          <h1 className={styles?.title}>{post?.title}</h1>

          <div className={styles?.metaRow}>
            <div className={styles?.metaItem}>
              <Calendar className={"h-4 w-4"} />
              {formatDate(post?.publishedAt)}
            </div>
            <div className={styles?.metaItem}>
              <Clock className={"h-4 w-4"} />
              {post?.readingTime} {CONSTANT?.readUnit}
            </div>
          </div>
          <div className={styles?.tagWrapper}>
            {post?.tags?.map((tag: string) => (
              <a href={`https://www.syedalinaqihasni.com/blogs/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`} key={tag}>
                <Badge key={tag} variant={"secondary"}>
                  {tag}
                </Badge>
              </a>
            ))}
          </div>
        </div>
        {post?.image && (
          <div className={styles?.imageWrapper}>
            <Image
              src={post?.image || "https://www.syedalinaqihasni.com/images/blogs/blogs-placeholder.jpg"}
              alt={post?.title}
              fill
              className={styles?.image || "https://www.syedalinaqihasni.com/images/blogs/blogs-placeholder.jpg"}
            />
          </div>
        )}
        <div className={styles?.content}>
          <div>
            <HtmlRenderer html={post?.content} />
          </div>
        </div>
        <div className={styles?.shareWrapper}>
          <Button variant={"outline"} onClick={shareArticle}>
            <Share2 className={"h-4 w-4 mr-2"} />
            {CONSTANT?.shareButton}
          </Button>
        </div>
      </div>
    </div>
    </>
  )
}

export default SingleBlogPage