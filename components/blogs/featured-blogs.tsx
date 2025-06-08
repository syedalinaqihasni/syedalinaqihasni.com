"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/constants/blogs";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";

const styles = {
  inputWrapper: "mb-8",
  inputField: "max-w-md mx-auto",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  card: "h-full overflow-hidden hover:shadow-md transition-shadow duration-300",
  image: "object-cover transition-transform duration-300 hover:scale-105",
  categoriesWrapper: "flex flex-wrap gap-2 mb-3",
  categoryBadge: "text-xs",
  title: "text-xl font-semibold mb-2 hover:text-primary transition-colors",
  excerpt: "text-muted-foreground mb-4 line-clamp-2",
  metaWrapper: "flex items-center text-sm text-muted-foreground",
  metaItem: "flex items-center mr-4",
  icon: "h-4 w-4 mr-1",
};

const FeaturedBlogs = () => {
  const featuredBlogs = posts
    ?.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, 3);
  if (!featuredBlogs.length) return notFound();

  return (
    <div>
      <div className={styles?.grid}>
        {featuredBlogs?.map((post, index) => (
          <motion.div
            key={post?.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className={styles?.card}>
              <Link
                href={`/blogs/${post?.slug}`}
                className={"relative block h-48 w-full"}
              >
                <Image
                  src={post?.image || "/images/blogs/blogs-placeholder.jpg"}
                  alt={post?.title}
                  fill
                  className={
                    styles?.image || "/images/blogs/blogs-placeholder.jpg"
                  }
                  priority={index < 3}
                />
              </Link>
              <CardContent className={"p-6"}>
                <div className={styles?.categoriesWrapper}>
                  {post?.tags.slice(0, 2)?.map((tag) => (
                    <Badge
                      key={tag}
                      variant={"secondary"}
                      className={styles?.categoryBadge}
                    >
                      {tag}
                    </Badge>
                  ))}
                  {post?.tags.length > 2 && (
                    <Badge
                      variant={"outline"}
                      className={styles?.categoryBadge}
                    >
                      +{post?.tags.length - 2}
                    </Badge>
                  )}
                  <Badge
                    variant={"secondary"}
                    className={styles?.categoryBadge}
                  >
                    {post?.category}
                  </Badge>
                </div>
                <Link href={`/blogs/${post?.slug}`}>
                  <h3 className={styles?.title}>{post?.title}</h3>
                </Link>
                <p className={styles?.excerpt}>{post?.excerpt}</p>
                <div className={styles?.metaWrapper}>
                  <div className={styles?.metaItem}>
                    <Calendar className={styles?.icon} />
                    {formatDate(post?.publishedAt)}
                  </div>
                  <div className={"flex items-center"}>
                    <Clock className={styles?.icon} />
                    {post?.readingTime}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBlogs;
