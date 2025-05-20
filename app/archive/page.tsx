import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Development Archive | Portfolio",
  description: "Archive of my external development content and contributions",
};

// Mock data - in a real app, this would come from an API or CMS
const content = {
  medium: [
    {
      id: "1",
      title: "Building Scalable React Applications",
      excerpt: "Learn how to structure and scale your React applications for better maintainability.",
      date: "2024-02-15",
      url: "https://medium.com",
      tags: ["React", "Architecture", "JavaScript"],
      readTime: "8 min read",
    },
    {
      id: "2",
      title: "Advanced TypeScript Patterns",
      excerpt: "Exploring advanced TypeScript patterns and best practices for large applications.",
      date: "2024-01-20",
      url: "https://medium.com",
      tags: ["TypeScript", "JavaScript", "Programming"],
      readTime: "12 min read",
    },
  ],
  devto: [
    {
      id: "1",
      title: "Getting Started with Next.js 14",
      excerpt: "A comprehensive guide to building applications with Next.js 14.",
      date: "2024-02-10",
      url: "https://dev.to",
      tags: ["Next.js", "React", "Web Development"],
      readTime: "10 min read",
    },
    {
      id: "2",
      title: "CSS Grid Mastery",
      excerpt: "Master CSS Grid layout with practical examples and tips.",
      date: "2024-01-15",
      url: "https://dev.to",
      tags: ["CSS", "Web Design", "Frontend"],
      readTime: "6 min read",
    },
  ],
  reddit: [
    {
      id: "1",
      title: "Optimizing React Performance",
      excerpt: "Tips and tricks for improving React application performance.",
      date: "2024-02-05",
      url: "https://reddit.com",
      tags: ["React", "Performance", "JavaScript"],
      upvotes: 245,
    },
    {
      id: "2",
      title: "Modern CSS Features",
      excerpt: "Discussion about the latest CSS features and their browser support.",
      date: "2024-01-10",
      url: "https://reddit.com",
      tags: ["CSS", "Web Development", "Frontend"],
      upvotes: 189,
    },
  ],
};

export default function ArchivePage() {
  return (
    <div className="container mx-auto px-4 py-32 md:py-40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Development Archive</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of my articles, discussions, and contributions across various platforms.
          </p>
        </div>

        <Tabs defaultValue="medium" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="medium">Medium</TabsTrigger>
            <TabsTrigger value="devto">Dev.to</TabsTrigger>
            <TabsTrigger value="reddit">Reddit</TabsTrigger>
          </TabsList>

          <TabsContent value="medium" className="space-y-6">
            {content.medium.map((post) => (
              <Card key={post.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-semibold hover:text-primary transition-colors">
                      <Link href={post.url} target="_blank" className="flex items-center gap-2">
                        {post.title}
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </h2>
                    <div className="text-sm text-muted-foreground">{post.readTime}</div>
                  </div>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="devto" className="space-y-6">
            {content.devto.map((post) => (
              <Card key={post.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-semibold hover:text-primary transition-colors">
                      <Link href={post.url} target="_blank" className="flex items-center gap-2">
                        {post.title}
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </h2>
                    <div className="text-sm text-muted-foreground">{post.readTime}</div>
                  </div>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="reddit" className="space-y-6">
            {content.reddit.map((post) => (
              <Card key={post.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-semibold hover:text-primary transition-colors">
                      <Link href={post.url} target="_blank" className="flex items-center gap-2">
                        {post.title}
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </h2>
                    <div className="text-sm text-muted-foreground">↑ {post.upvotes}</div>
                  </div>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}