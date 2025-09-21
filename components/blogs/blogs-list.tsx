"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, List, Grid3X3, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { formatDate } from "@/lib/utils";
import { Post } from "@/types/blogs";

const CONSTANT = {
  searchPlaceholder: "Search articles...",
  perPageOptions: [10, 20, 30, 40, 50, 100],
  modes: {
    grid: { id: "grid", label: "Grid", icon: Grid3X3, defaultPerPage: 20 },

    iconList: {
      id: "iconList",
      label: "Icon List",
      icon: List,
      defaultPerPage: 30,
    },
    titleList: {
      id: "titleList",
      label: "Title List",
      icon: FileText,
      defaultPerPage: 50,
    },
  },
};

const styles = {
  inputWrapper:
    "mb-8 flex flex-col md:flex-row justify-between items-center gap-4",
  inputField: "max-w-md w-full",
  viewModes: "flex gap-2",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  card: "h-full overflow-hidden hover:shadow-md transition-shadow duration-300",
  categoriesWrapper: "flex flex-wrap gap-2 mb-3",
  tagsWrapper: "flex flex-wrap gap-2 mt-3",
  categoryBadge: "text-xs",
  title: "text-xl font-semibold mb-2 hover:text-primary transition-colors",
  excerpt: "text-muted-foreground mb-4 line-clamp-2",
  metaWrapper: "flex items-center text-sm text-muted-foreground mt-2",
  metaItem: "flex items-center mr-4",
  icon: "h-4 w-4 mr-1",
  paginationWrapper: "flex justify-center items-center gap-2 mt-8 flex-wrap",
};

const BlogsList = ({ posts }: { posts: Post[] }) => {
  // LocalStorage persistence
  const [viewMode, setViewMode] = useState<"grid" | "titleList" | "iconList">(
    () =>
      (typeof window !== "undefined" &&
        (localStorage.getItem("viewMode") as any)) ||
      "grid"
  );
  const [perPage, setPerPage] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("perPage");
      return saved ? Number(saved) : CONSTANT.modes.grid.defaultPerPage;
    }
    return CONSTANT.modes.grid.defaultPerPage;
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  // persist changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("viewMode", viewMode);
    }
  }, [viewMode]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("perPage", perPage.toString());
    }
  }, [perPage]);

  // Filter + sort posts
  const filteredPosts = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return posts
      ?.filter((post) => {
        return (
          post?.content?.trim() !== "" &&
          (post?.title.toLowerCase().includes(query) ||
            post?.excerpt.toLowerCase().includes(query) ||
            post?.tags?.some((tag) => tag.toLowerCase().includes(query)))
        );
      })
      ?.sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
  }, [posts, searchQuery]);

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / perPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  // Reset perPage when mode changes
  const handleModeChange = (mode: "grid" | "titleList" | "iconList") => {
    setViewMode(mode);
    setPerPage(CONSTANT.modes[mode].defaultPerPage);
    setCurrentPage(1);
  };

  // Pagination generator (MUI-like)
  const renderPageNumbers = () => {
    const siblingCount = 1; // show current ±1
    const boundaryCount = 1; // always show first + last
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      // If small number of pages, show all
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      const startPages = [1];
      const endPages = [totalPages];

      const start = Math.max(currentPage - siblingCount, boundaryCount + 2);
      const end = Math.min(
        currentPage + siblingCount,
        totalPages - boundaryCount - 1
      );

      const middlePages: (number | string)[] = [];
      for (let i = start; i <= end; i++) {
        middlePages.push(i);
      }

      pages.push(...startPages);

      if (start > boundaryCount + 2) {
        pages.push("...");
      } else if (start === boundaryCount + 2) {
        pages.push(boundaryCount + 1);
      }

      pages.push(...middlePages);

      if (end < totalPages - boundaryCount - 1) {
        pages.push("...");
      } else if (end === totalPages - boundaryCount - 1) {
        pages.push(totalPages - boundaryCount);
      }

      pages.push(...endPages);
    }

    return pages.map((page, idx) =>
      page === "..." ? (
        <span key={`dots-${idx}`} className="px-2">
          ...
        </span>
      ) : (
        <Button
          key={page}
          variant={currentPage === page ? "default" : "outline"}
          onClick={() => setCurrentPage(page as number)}
        >
          {page}
        </Button>
      )
    );
  };

  return (
    <div>
      {/* Search + View Mode Switch */}
      <div className={styles?.inputWrapper}>
        <Input
          placeholder={CONSTANT?.searchPlaceholder}
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
          className={styles?.inputField}
        />
        <div className={styles?.viewModes}>
          {Object.values(CONSTANT.modes).map((mode) => (
            <Button
              key={mode.id}
              variant={viewMode === mode.id ? "default" : "outline"}
              size="icon"
              onClick={() => handleModeChange(mode.id as any)}
            >
              <mode.icon className="h-5 w-5" />
            </Button>
          ))}
        </div>
      </div>

      {/* Grid View */}
      {viewMode === "grid" && (
        <div className={styles?.grid}>
          {paginatedPosts.map((post, index) => (
            <motion.div
              key={post?.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={styles?.card}>
                {post?.image && (
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="relative block h-48 w-full rounded-lg overflow-hidden"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </Link>
                )}
                <CardContent className={"p-6"}>
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
      )}

      {/* Title List View */}
      {viewMode === "titleList" && (
        <ul className="space-y-4">
          {paginatedPosts.map((post) => (
            <li key={post.slug} className="border-b pb-4">
              <Link href={`/blogs/${post.slug}`} className="hover:text-primary">
                <h3 className="text-lg font-semibold">{post.title}</h3>
              </Link>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                {post.excerpt}
              </p>
              <div className={styles?.metaWrapper}>
                <div className={styles?.metaItem}>
                  <Calendar className={styles?.icon} />
                  {formatDate(post?.publishedAt)}
                </div>
                <div className="flex items-center">
                  <Clock className={styles?.icon} />
                  {post?.readingTime}
                </div>

                <div className="flex flex-wrap gap-1 mx-2">
                  {post?.category && (
                    <Link
                      href={`/blogs/category/${post?.category
                        .toLowerCase()
                        .replace(/[\s/]+/g, "-")}`}
                    >
                      <Badge variant="secondary" className="mr-2">
                        {post.category}
                      </Badge>
                    </Link>
                  )}
                </div>
                <div className="flex flex-wrap gap-1 mx-2">
                  {post?.tags?.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blogs/tag/${tag
                        .toLowerCase()
                        .replace(/[\s/]+/g, "-")}`}
                    >
                      <Badge variant="outline">{tag}</Badge>
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Icon List View */}
      {viewMode === "iconList" && (
        <ul className="space-y-4">
          {paginatedPosts.map((post) => (
            <li
              key={post.slug}
              className="flex gap-4 items-start border-b pb-4"
            >
              {post?.image && (
                <Link
                  href={`/blogs/${post.slug}`}
                  className="flex-shrink-0 w-20 h-20 relative rounded-md overflow-hidden"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </Link>
              )}
              <div className="flex-1">
                <Link
                  href={`/blogs/${post.slug}`}
                  className="hover:text-primary"
                >
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                </Link>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                  {post.excerpt}
                </p>
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
                {post?.category && (
                  <Link
                    href={`/blogs/category/${post?.category
                      .toLowerCase()
                      .replace(/[\s/]+/g, "-")}`}
                  >
                    <Badge variant="secondary" className="mr-2">
                      {post.category}
                    </Badge>
                  </Link>
                )}
                <div className="flex flex-wrap gap-1 mt-2">
                  {post?.tags?.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blogs/tag/${tag
                        .toLowerCase()
                        .replace(/[\s/]+/g, "-")}`}
                    >
                      <Badge variant="outline">{tag}</Badge>
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className={styles?.paginationWrapper}>
          <Button
            variant="outline"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(1)}
          >
            {"I<"}
          </Button>
          <Button
            variant="outline"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            {"<<"}
          </Button>
          {renderPageNumbers()}
          <Button
            variant="outline"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            {">>"}
          </Button>
          <Button
            variant="outline"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(totalPages)}
          >
            {">I"}
          </Button>
        </div>
      )}

      {/* Per Page Selector */}
      <div className="flex justify-center mt-4">
        <Select
          value={perPage.toString()}
          onValueChange={(value) => {
            setPerPage(Number(value));
            setCurrentPage(1);
          }}
        >
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Per page" />
          </SelectTrigger>
          <SelectContent>
            {CONSTANT.perPageOptions.map((num) => (
              <SelectItem key={num} value={num.toString()}>
                {num} / page
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default BlogsList;
