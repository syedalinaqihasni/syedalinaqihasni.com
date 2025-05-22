"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";

// Mock data - in a real app, this would come from Sanity
// const posts = [
//   {
//     id: "1",
//     title: "Getting Started with Next.js and Tailwind",
//     excerpt: "Learn how to set up a new Next.js project with Tailwind CSS for rapid development.",
//     slug: "getting-started-nextjs-tailwind",
//     publishedAt: "2023-05-15",
//     readingTime: "5 min read",
//     image: "https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg",
//     categories: ["Next.js", "Tailwind CSS", "Web Development"],
//   },
//   {
//     id: "2",
//     title: "Building Responsive UIs with Tailwind CSS",
//     excerpt: "Explore techniques for creating fully responsive user interfaces using Tailwind CSS.",
//     slug: "responsive-ui-tailwind",
//     publishedAt: "2023-06-10",
//     readingTime: "7 min read",
//     image: "https://images.pexels.com/photos/938965/pexels-photo-938965.jpeg",
//     categories: ["CSS", "Tailwind CSS", "Responsive Design"],
//   },
//   {
//     id: "3",
//     title: "State Management in React Applications",
//     excerpt: "An overview of different state management approaches in modern React applications.",
//     slug: "state-management-react",
//     publishedAt: "2023-07-22",
//     readingTime: "10 min read",
//     image: "https://images.pexels.com/photos/7095/people-coffee-notes-tea.jpg",
//     categories: ["React", "State Management", "JavaScript"],
//   },
//   {
//     id: "4",
//     title: "Creating Animations with Framer Motion",
//     excerpt: "Learn how to add beautiful animations to your React applications using Framer Motion.",
//     slug: "framer-motion-animations",
//     publishedAt: "2023-08-05",
//     readingTime: "8 min read",
//     image: "https://images.pexels.com/photos/957002/berchtesgaden-alpine-watzmann-berchtesgaden-national-park-957002.jpeg",
//     categories: ["React", "Animation", "Framer Motion"],
//   },
//   {
//     id: "5",
//     title: "Serverless Functions with Next.js API Routes",
//     excerpt: "Explore how to use Next.js API routes to create serverless functions for your applications.",
//     slug: "nextjs-api-routes",
//     publishedAt: "2023-09-18",
//     readingTime: "6 min read",
//     image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
//     categories: ["Next.js", "Serverless", "API"],
//   },
// ];

export type Post = {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  readingTime: string;
  image: string;
  categories: string[];
};

interface BlogListProps {
  posts: Post[];
}

export default function BlogList({ posts }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.categories.some(category =>
      category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div>
      <div className="mb-8">
        <Input
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-md mx-auto"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full overflow-hidden hover:shadow-md transition-shadow duration-300">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </Link>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.categories.slice(0, 2).map((category) => (
                    <Badge key={category} variant="secondary" className="text-xs">
                      {category}
                    </Badge>
                  ))}
                  {post.categories.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{post.categories.length - 2}
                    </Badge>
                  )}
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-sm text-muted-foreground">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(post.publishedAt)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readingTime}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}