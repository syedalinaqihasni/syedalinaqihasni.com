'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Post } from '@/types';

// Static fallback blog post data
const DATA = {
  posts: [
    {
      id: '1',
      title: 'Getting Started with Next.js and Tailwind',
      excerpt:
        'Learn how to set up a new Next.js project with Tailwind CSS for rapid development.',
      slug: 'getting-started-nextjs-tailwind',
      publishedAt: '2023-05-15',
      readingTime: '5 min read',
      image: 'https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg',
      categories: ['Next.js', 'Tailwind CSS', 'Web Development'],
    },
    {
      id: '2',
      title: 'Building Responsive UIs with Tailwind CSS',
      excerpt:
        'Explore techniques for creating fully responsive user interfaces using Tailwind CSS.',
      slug: 'responsive-ui-tailwind',
      publishedAt: '2023-06-10',
      readingTime: '7 min read',
      image: 'https://images.pexels.com/photos/938965/pexels-photo-938965.jpeg',
      categories: ['CSS', 'Tailwind CSS', 'Responsive Design'],
    },
    {
      id: '3',
      title: 'State Management in React Applications',
      excerpt:
        'An overview of different state management approaches in modern React applications.',
      slug: 'state-management-react',
      publishedAt: '2023-07-22',
      readingTime: '10 min read',
      image:
        'https://images.pexels.com/photos/7095/people-coffee-notes-tea.jpg',
      categories: ['React', 'State Management', 'JavaScript'],
    },
    {
      id: '4',
      title: 'Creating Animations with Framer Motion',
      excerpt:
        'Learn how to add beautiful animations to your React applications using Framer Motion.',
      slug: 'framer-motion-animations',
      publishedAt: '2023-08-05',
      readingTime: '8 min read',
      image:
        'https://images.pexels.com/photos/957002/berchtesgaden-alpine-watzmann-berchtesgaden-national-park-957002.jpeg',
      categories: ['React', 'Animation', 'Framer Motion'],
    },
    {
      id: '5',
      title: 'Serverless Functions with Next.js API Routes',
      excerpt:
        'Explore how to use Next.js API routes to create serverless functions for your applications.',
      slug: 'nextjs-api-routes',
      publishedAt: '2023-09-18',
      readingTime: '6 min read',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
      categories: ['Next.js', 'Serverless', 'API'],
    },
  ],
};

// UI text constants
const TEXT = {
  searchPlaceholder: 'Search articles...',
};

// Tailwind CSS class groups for styling
const styles = {
  inputWrapper: 'mb-8',
  inputField: 'max-w-md mx-auto',
  grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
  card: 'h-full overflow-hidden hover:shadow-md transition-shadow duration-300',
  image: 'object-cover transition-transform duration-300 hover:scale-105',
  categoriesWrapper: 'flex flex-wrap gap-2 mb-3',
  categoryBadge: 'text-xs',
  title: 'text-xl font-semibold mb-2 hover:text-primary transition-colors',
  excerpt: 'text-muted-foreground mb-4 line-clamp-2',
  metaWrapper: 'flex items-center text-sm text-muted-foreground',
  metaItem: 'flex items-center mr-4',
  icon: 'h-4 w-4 mr-1',
};

interface BlogListProps {
  posts?: Post[]; // Optional posts prop to override default static data
}

const BlogList = ({ posts }: BlogListProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Use provided posts or fallback to static data
  const postList = posts?.length ? posts : DATA.posts;

  // Helper to format published date to a human-readable string
  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  // Filter posts based on search query matching title, excerpt, or categories
  const filteredPosts = postList.filter((post) => {
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.categories.some((cat) => cat.toLowerCase().includes(query))
    );
  });

  return (
    <div>
      {/* Search input */}
      <div className={styles.inputWrapper}>
        <Input
          placeholder={TEXT.searchPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.inputField}
        />
      </div>

      {/* Blog post grid */}
      <div className={styles.grid}>
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className={styles.card}>
              <Link href={`/blog/${post.slug}`}>
                <a className="relative block h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    className={styles.image}
                    priority={index < 3} // Prioritize images of first few posts
                  />
                </a>
              </Link>
              <CardContent className="p-6">
                {/* Categories badges */}
                <div className={styles.categoriesWrapper}>
                  {post.categories.slice(0, 2).map((cat) => (
                    <Badge
                      key={cat}
                      variant="secondary"
                      className={styles.categoryBadge}
                    >
                      {cat}
                    </Badge>
                  ))}
                  {post.categories.length > 2 && (
                    <Badge variant="outline" className={styles.categoryBadge}>
                      +{post.categories.length - 2}
                    </Badge>
                  )}
                </div>

                {/* Title */}
                <Link href={`/blog/${post.slug}`}>
                  <a>
                    <h3 className={styles.title}>{post.title}</h3>
                  </a>
                </Link>

                {/* Excerpt */}
                <p className={styles.excerpt}>{post.excerpt}</p>

                {/* Meta info: date and reading time */}
                <div className={styles.metaWrapper}>
                  <div className={styles.metaItem}>
                    <Calendar className={styles.icon} />
                    {formatDate(post.publishedAt)}
                  </div>
                  <div className="flex items-center">
                    <Clock className={styles.icon} />
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
};

export default BlogList;
