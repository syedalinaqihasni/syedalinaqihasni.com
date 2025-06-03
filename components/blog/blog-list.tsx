'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { CONSTANT, posts } from '@/constants/blogs';
import { formatDate } from '@/lib/utils';


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


const BlogList = () => {
  const [searchQuery, setSearchQuery] = useState('');

 

  // Filter posts based on search query matching title, excerpt, or categories
  const filteredPosts = posts.filter((post) => {
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
      <div className={styles?.inputWrapper}>
        <Input
          placeholder={CONSTANT?.searchPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles?.inputField}
        />
      </div>

      {/* Blog post grid */}
      <div className={styles?.grid}>
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className={styles?.card}>
              <Link href={`/blog/${post.slug}`} className={'relative block h-48 w-full'}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout={'fill'}
                    className={styles?.image}
                    priority={index < 3} // Prioritize images of first few posts
                  />
              </Link>
              <CardContent className={'p-6'}>
                {/* Categories badges */}
                <div className={styles?.categoriesWrapper}>
                  {post.categories.slice(0, 2).map((cat) => (
                    <Badge
                      key={cat}
                      variant={'secondary'}
                      className={styles?.categoryBadge}
                    >
                      {cat}
                    </Badge>
                  ))}
                  {post.categories.length > 2 && (
                    <Badge variant={'outline'} className={styles?.categoryBadge}>
                      +{post.categories.length - 2}
                    </Badge>
                  )}
                </div>

                {/* Title */}
                <Link href={`/blog/${post.slug}`}>
                    <h3 className={styles?.title}>{post.title}</h3>
                </Link>

                {/* Excerpt */}
                <p className={styles?.excerpt}>{post.excerpt}</p>

                {/* Meta info: date and reading time */}
                <div className={styles?.metaWrapper}>
                  <div className={styles?.metaItem}>
                    <Calendar className={styles?.icon} />
                    {formatDate(post.publishedAt)}
                  </div>
                  <div className={'flex items-center'}>
                    <Clock className={styles?.icon} />
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
