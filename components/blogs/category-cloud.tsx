"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Post } from "@/types/blogs";

const styles = {
  categoryCloudWrapper: "flex flex-wrap gap-2 mb-8 justify-center",
  activeCategory: "bg-primary text-white hover:bg-primary/90",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  card: "h-full overflow-hidden hover:shadow-md transition-shadow duration-300",
  image: "object-cover transition-transform duration-300 hover:scale-105",
  categoriesWrapper: "flex flex-wrap gap-2 mb-3",
  categoryBadge: "text-xs cursor-pointer",
  title: "text-xl font-semibold mb-2 hover:text-primary transition-colors",
  excerpt: "text-muted-foreground mb-4 line-clamp-2",
  metaWrapper: "flex items-center text-sm text-muted-foreground",
  metaItem: "flex items-center mr-4",
  icon: "h-4 w-4 mr-1",
};

const CategoryCloud = ({ posts }: { posts: Post[] }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const allCategories = useMemo(
    () => Array.from(new Set(posts.map((p) => p.category))),
    [posts]
  );

  const filteredPosts = useMemo(() => {
    if (!selectedCategory) return posts;
    return posts.filter((p) => p.category === selectedCategory);
  }, [posts, selectedCategory]);

  const handleCategoryClick = useCallback((category: string) => {
    setSelectedCategory((prev) => (prev === category ? null : category));
  }, []);

  return (
    <div>
      {/* Category Filter */}
      <div className={styles?.categoryCloudWrapper}>
        {allCategories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "secondary"}
            onClick={() => handleCategoryClick(category)}
            className={`${styles?.categoryBadge} ${
              selectedCategory === category ? styles?.activeCategory : ""
            }`}
            aria-label={`Filter by ${category}`}
          >
            {category}
          </Badge>
        ))}

        {selectedCategory && (
          <button
            onClick={() => setSelectedCategory(null)}
            className="ml-4 text-sm text-blue-600 hover:underline"
          >
            Clear Filter
          </button>
        )}
      </div>

      {/* Blog Grid */}
      <div className={styles?.grid}>
        <AnimatePresence>
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post?.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className={styles?.card}>
                {post?.image ? (
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="relative block h-48 w-full rounded-lg overflow-hidden"
                  >
                    <Image
                      src={post.image}
                      alt={`${post.title} - Syed Ali Naqi Hasni`}
                      fill
                      className="object-cover"
                      priority={index < 3}
                    />
                  </Link>
                ) : (
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="h-48 w-full rounded-lg bg-gray-100 dark:bg-gray-800 p-4 flex flex-col justify-center items-center text-center"
                  >
                    <h3 className="text-lg font-bold w-full mb-1">
                      {post.title}
                    </h3>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                      Syed Ali Naqi Hasni
                    </div>
                  </Link>
                )}
                <CardContent className="p-6">
                  <div className={styles?.categoriesWrapper}>
                    <Link
                      href={`/blogs/category/${categoryToSlug(post?.category)}`}
                    >
                      <Badge
                        variant="secondary"
                        className={styles?.categoryBadge}
                      >
                        {post?.category}
                      </Badge>
                    </Link>
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
                    <div className="flex items-center">
                      <Clock className={styles?.icon} />
                      {post?.readingTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

const categoryToSlug = (category: string) =>
  category.toLowerCase().replace(/\s+/g, "-");

export default CategoryCloud;
