"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";

import { formatDate } from "@/lib/utils";
import { Post } from "@/types/blogs";

const CONSTANT = {
  searchPlaceholder: "Search articles...",
};

const styles = {
  inputWrapper: "mb-8",
  inputField: "max-w-md mx-auto",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  card: "h-full overflow-hidden hover:shadow-md transition-shadow duration-300",
  image: "object-cover transition-transform duration-300 hover:scale-105",
  categoriesWrapper: "flex flex-wrap gap-2 mb-3",tagsWrapper: "flex flex-wrap gap-2 mt-3",
  categoryBadge: "text-xs",
  title: "text-xl font-semibold mb-2 hover:text-primary transition-colors",
  excerpt: "text-muted-foreground mb-4 line-clamp-2",
  metaWrapper: "flex items-center text-sm text-muted-foreground",
  metaItem: "flex items-center mr-4",
  icon: "h-4 w-4 mr-1",
};

const BlogsList = ({ posts }: { posts: Post[] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredPosts = posts
    ?.filter((post) => {
      const query = searchQuery.toLowerCase();
      return (
        post?.title.toLowerCase().includes(query) ||
        post?.excerpt.toLowerCase().includes(query) ||
        post?.tags.some((cat) => cat.toLowerCase().includes(query))
      );
    })
    ?.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

  return (
    <div>
      <div className={styles?.inputWrapper}>
        <Input
          placeholder={CONSTANT?.searchPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles?.inputField}
        />
      </div>
      <div className={styles?.grid}>
        {filteredPosts?.map((post, index) => (
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
                  src={
                    post?.image
                      ? post?.image
                      : "/images/blogs/blogs-placeholder.jpg"
                  }
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
                  <a href={`/blogs/category/${post?.category.toLowerCase()}` }>
                    
                  <Badge
                    variant={"secondary"}
                    className={styles?.categoryBadge}
                  >
                    {post?.category}
                  </Badge>
                  </a>
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
                <div className={styles?.tagsWrapper}>
                  {post?.tags.slice(0, 2)?.map((tag) => (
                  <a href={`/blogs/tag/${tag.toLowerCase()}` } 
                      key={tag}>
                    <Badge
                      variant={"secondary"}
                      className={styles?.categoryBadge}
                    >
                      {tag}
                    </Badge></a>
                  ))}
                  {post?.tags.length > 2 && (
                    <Badge
                      variant={"outline"}
                      className={styles?.categoryBadge}
                    >
                      +{post?.tags.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogsList;
