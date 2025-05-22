
"use client"
import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

// export const metadata: Metadata = {
//   title: "Social Media | Portfolio",
//   description: "My social media posts and updates from various platforms",
// };

// Mock data - in a real app, this would come from social media APIs
const socialPosts = {
  twitter: [
    {
      id: "1",
      content: "Just launched a new React component library! Check it out on GitHub 🚀",
      date: "2024-02-15T10:30:00Z",
      likes: 42,
      retweets: 12,
    },
    {
      id: "2",
      content: "Working on an exciting new project with Next.js 14 and Tailwind CSS. Stay tuned! 👨‍💻",
      date: "2024-02-14T15:45:00Z",
      likes: 38,
      retweets: 8,
    },
  ],
  linkedin: [
    {
      id: "1",
      title: "New Blog Post: Building Scalable Web Applications",
      content: "Excited to share my latest blog post about building scalable web applications using modern technologies...",
      date: "2024-02-13T09:15:00Z",
      likes: 156,
      comments: 23,
    },
    {
      id: "2",
      title: "Speaking at TechConf 2024",
      content: "Looking forward to speaking about frontend architecture at TechConf 2024 next month...",
      date: "2024-02-12T14:20:00Z",
      likes: 234,
      comments: 45,
    },
  ],
  instagram: [
    {
      id: "1",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
      caption: "Another day at the office! #coding #developer #tech",
      date: "2024-02-11T11:30:00Z",
      likes: 89,
    },
    {
      id: "2",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
      caption: "Team lunch after shipping a major feature! 🎉 #teamwork #success",
      date: "2024-02-10T13:45:00Z",
      likes: 124,
    },
  ],
};

export default function SocialsPage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="container mx-auto px-4 py-32 md:py-40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Social Media</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with my latest posts and activities across social media platforms.
          </p>
        </div>

        <Tabs defaultValue="twitter" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="twitter">Twitter</TabsTrigger>
            <TabsTrigger value="linkedin">LinkedIn</TabsTrigger>
            <TabsTrigger value="instagram">Instagram</TabsTrigger>
          </TabsList>

          <TabsContent value="twitter" className="space-y-6">
            {socialPosts.twitter.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <p className="text-lg mb-4">{post.content}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div>{formatDate(post.date)}</div>
                      <div className="flex gap-4">
                        <span>❤️ {post.likes}</span>
                        <span>🔄 {post.retweets}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="linkedin" className="space-y-6">
            {socialPosts.linkedin.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4">{post.content}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div>{formatDate(post.date)}</div>
                      <div className="flex gap-4">
                        <span>👍 {post.likes}</span>
                        <span>💬 {post.comments}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="instagram" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialPosts.instagram.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className="relative h-64 w-full">
                    <img
                      src={post.image}
                      alt={post.caption}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">{post.caption}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div>{formatDate(post.date)}</div>
                      <div>❤️ {post.likes}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}