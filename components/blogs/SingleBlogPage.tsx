"use client";
import { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Share2, ArrowLeft, ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { allTags, CONSTANT, posts } from "@/constants/blogs";
import { formatDate } from "@/lib/utils";
import HtmlRenderer from "@/components/HtmlRenderer";
import { Post } from "@/types/blogs";

const styles = {
  container: "container mx-auto px-4 py-32 md:py-40",
  wrapper: "max-w-8xl mx-auto",
  categoryWrapper: "flex flex-wrap gap-2 mb-4",
  tagWrapper: "flex flex-wrap gap-2 mt-4",
  title: "text-4xl md:text-5xl font-bold mb-6",
  metaRow: "flex items-center gap-6 text-muted-foreground",
  metaItem: "flex items-center gap-2",
  imageWrapper: "relative h-[400px] rounded-lg overflow-hidden mb-12",
  image: "object-cover",
  content: "prose dark:prose-invert max-w-none mb-16",
  shareWrapper: "text-center mt-12",
  navWrapper:
    "flex justify-between items-center gap-4 mt-8 border-t pt-8 border-muted-foreground/20",
  navBox:
    "flex-1 border rounded-xl p-4 hover:shadow-lg transition bg-background",
  navTitle: "font-medium text-lg",
  navLabel: "text-sm text-muted-foreground mb-1 flex items-center gap-1",
};

const SingleBlogPage = ({ post }: { post: Post }) => {
  const currentIndex = posts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

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
      alert(
        "Sharing is not supported in your browser. Please copy the URL manually."
      );
    }
  }, [post]);

  return (
    <>
      <div className={styles?.container}>
        <div className={styles?.wrapper}>
          <div className={"mb-8"}>
            {/* Category */}
            <div className={styles?.categoryWrapper}>
              <a href={`/blogs/category/${post?.category.toLowerCase()}`}>
                <Badge variant={"secondary"}>{post?.category}</Badge>
              </a>
            </div>

            {/* Title */}
            <h1 className={styles?.title}>{post?.title}</h1>

            {/* Meta */}
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

            {/* Tags */}
            <div className={styles?.tagWrapper}>
              {post?.tags?.map((tag: string) => (
                <a
                  href={`/blogs/tag/${tag
                    .toLowerCase()
                    .replace(/[\s/]+/g, "-")}`}
                  key={tag}
                >
                  <Badge key={tag} variant={"secondary"}>
                    {tag}
                  </Badge>
                </a>
              ))}
            </div>
          </div>

          {/* Featured Image */}
          {post?.image && (
            <div className={styles?.imageWrapper}>
              <Image
                src={
                  post?.image || "/images/placeholder-syed-ali-naqi-hasni.webp"
                }
                alt={`${post?.title} - Syed Ali Naqi Hasni`}
                fill
                className={
                  styles?.image ||
                  "/images/placeholder-syed-ali-naqi-hasni.webp"
                }
              />
            </div>
          )}

          {/* Content */}
          <div className={styles?.content}>
            <HtmlRenderer
              path="/blogs/tag"
              terms={allTags}
              html={post?.content}
            />
          </div>

          {/* Share */}
          <div className={styles?.shareWrapper}>
            <Button variant={"outline"} onClick={shareArticle}>
              <Share2 className={"h-4 w-4 mr-2"} />
              {CONSTANT?.shareButton}
            </Button>
          </div>

          {/* Next & Previous Navigation */}
          <div className={styles?.navWrapper}>
            {prevPost ? (
              <Link href={`/blogs/${prevPost.slug}`} className={styles?.navBox}>
                <div className={styles?.navLabel}>
                  <ArrowLeft className="h-4 w-4" /> Previous Post
                </div>
                <div className={styles?.navTitle}>{prevPost.title}</div>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link href={`/blogs/${nextPost.slug}`} className={styles?.navBox}>
                <div className={styles?.navLabel}>
                  Next Post <ArrowRight className="h-4 w-4" />
                </div>
                <div className={styles?.navTitle}>{nextPost.title}</div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlogPage;
