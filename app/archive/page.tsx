import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

const PAGE_TITLE = 'Development Archive';
const PAGE_TITLE_FULL = 'Development Archive | Syed Ali Naqi Hasni';
const PAGE_DESCRIPTION =
  'Archive of my external development content and contributions';
const PAGE_SUBTITLE =
  'A collection of my articles, discussions, and contributions across various platforms.';
const MEDIUM = 'Medium';
const DEVTO = 'Dev.to';
const REDDIT = 'Reddit';

export const metadata: Metadata = {
  title: PAGE_TITLE_FULL,
  description: PAGE_DESCRIPTION,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://syedalinaqihasni.com',
    title: 'Syed Ali Naqi Hasni | Frontend Web Developer',
    description:
      'Personal portfolio website showcasing my projects, skills, and experience',
    siteName: 'Syed Ali Naqi Hasni',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syed Ali Naqi Hasni | Frontend Web Developer',
    description:
      'Personal portfolio website showcasing my projects, skills, and experience',
  },
  metadataBase: new URL('https://syedalinaqihasni.com'),
};

const archivePosts = {
  medium: [
    {
      id: '1',
      title: 'Optimizing React Apps with useMemo',
      excerpt:
        'Understand when and how to use useMemo to avoid unnecessary re-renders.',
      tags: ['React', 'Performance'],
      url: 'https://medium.com/example',
      readTime: '4 min read',
      date: '2024-01-12T00:00:00Z',
    },
  ],
  devto: [
    {
      id: '2',
      title: 'Demystifying Server Components in Next.js',
      excerpt:
        'Server components are here. Let’s unpack what they really mean.',
      tags: ['Next.js', 'React'],
      url: 'https://dev.to/example',
      readTime: '6 min read',
      date: '2024-02-03T00:00:00Z',
    },
  ],
  reddit: [
    {
      id: '3',
      title: 'I built my portfolio using Next.js 14. Feedback appreciated!',
      excerpt: 'Check it out and let me know your thoughts.',
      tags: ['Next.js', 'Portfolio'],
      url: 'https://reddit.com/example',
      upvotes: 230,
      date: '2024-03-18T00:00:00Z',
    },
  ],
};

const socialPosts = {
  twitter: [
    {
      id: '1',
      content:
        'Just launched a new React component library! Check it out on GitHub 🚀',
      date: '2024-02-15T10:30:00Z',
      likes: 42,
      retweets: 12,
    },
  ],
  linkedin: [
    {
      id: '1',
      title: 'New Blog Post: Building Scalable Web Applications',
      content:
        'Excited to share my latest blog post about building scalable web applications using modern technologies...',
      date: '2024-02-13T09:15:00Z',
      likes: 156,
      comments: 23,
    },
  ],
  instagram: [
    {
      id: '1',
      image:
        'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
      caption: 'Another day at the office! #coding #developer #tech',
      date: '2024-02-11T11:30:00Z',
      likes: 89,
    },
  ],
};

const TAB_TITLES = {
  twitter: 'Twitter',
  linkedin: 'LinkedIn',
  instagram: 'Instagram',
};

const SOCIALS_TITLE = 'Social Media';
const SOCIALS_DESCRIPTION =
  'Stay updated with my latest posts and activities across social media platforms.';

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export default function ArchivePage() {
  return (
    <>
      <div className={'container mx-auto px-4 py-32 md:pt-40 md:pb-10'}>
        <div className={'max-w-6xl mx-auto'}>
          <div className={'text-center mb-16'}>
            <h1 className={'text-4xl md:text-5xl font-bold mb-6'}>
              {PAGE_TITLE}
            </h1>
            <p className={'text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto'}>
              {PAGE_SUBTITLE}
            </p>
          </div>

          <Tabs defaultValue={'medium'} className={'space-y-8'}>
            <TabsList className={'grid w-full grid-cols-3 max-w-md mx-auto'}>
              <TabsTrigger value={'medium'}>{MEDIUM}</TabsTrigger>
              <TabsTrigger value={'devto'}>{DEVTO}</TabsTrigger>
              <TabsTrigger value={'reddit'}>{REDDIT}</TabsTrigger>
            </TabsList>

            <TabsContent value={'medium'} className={'space-y-6'}>
              {archivePosts.medium.map((post) => (
                <Card key={post.id}>
                  <CardContent className={'p-6'}>
                    <div className={'flex justify-between items-start mb-4'}>
                      <h2 className={'text-xl font-semibold hover:text-primary transition-colors'}>
                        <Link
                          href={post.url}
                          target={'_blank'}
                          className={'flex items-center gap-2'}
                        >
                          {post.title}
                          <ExternalLink className={'h-4 w-4'} />
                        </Link>
                      </h2>
                      <div className={'text-sm text-muted-foreground'}>
                        {post.readTime}
                      </div>
                    </div>
                    <p className={'text-muted-foreground mb-4'}>{post.excerpt}</p>
                    <div className={'flex flex-wrap gap-2 mb-4'}>
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant={'secondary'}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className={'text-sm text-muted-foreground'}>
                      {formatDate(post.date)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value={'devto'} className={'space-y-6'}>
              {archivePosts.devto.map((post) => (
                <Card key={post.id}>
                  <CardContent className={'p-6'}>
                    <div className={'flex justify-between items-start mb-4'}>
                      <h2 className={'text-xl font-semibold hover:text-primary transition-colors'}>
                        <Link
                          href={post.url}
                          target={'_blank'}
                          className={'flex items-center gap-2'}
                        >
                          {post.title}
                          <ExternalLink className={'h-4 w-4'} />
                        </Link>
                      </h2>
                      <div className={'text-sm text-muted-foreground'}>
                        {post.readTime}
                      </div>
                    </div>
                    <p className={'text-muted-foreground mb-4'}>{post.excerpt}</p>
                    <div className={'flex flex-wrap gap-2 mb-4'}>
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant={'secondary'}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className={'text-sm text-muted-foreground'}>
                      {formatDate(post.date)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value={'reddit'} className={'space-y-6'}>
              {archivePosts.reddit.map((post) => (
                <Card key={post.id}>
                  <CardContent className={'p-6'}>
                    <div className={'flex justify-between items-start mb-4'}>
                      <h2 className={'text-xl font-semibold hover:text-primary transition-colors'}>
                        <Link
                          href={post.url}
                          target={'_blank'}
                          className={'flex items-center gap-2'}
                        >
                          {post.title}
                          <ExternalLink className={'h-4 w-4'} />
                        </Link>
                      </h2>
                      <div className={'text-sm text-muted-foreground'}>
                        ↑ {post.upvotes}
                      </div>
                    </div>
                    <p className={'text-muted-foreground mb-4'}>{post.excerpt}</p>
                    <div className={'flex flex-wrap gap-2 mb-4'}>
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant={'secondary'}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className={'text-sm text-muted-foreground'}>
                      {formatDate(post.date)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Social section */}
      <div className={'container mx-auto px-4 py-32 md:pt-5 md:pb-40'}>
        <div className={'max-w-6xl mx-auto'}>
          <div className={'text-center mb-16'}>
            <h1 className={'text-4xl md:text-5xl font-bold mb-6'}>
              {SOCIALS_TITLE}
            </h1>
            <p className={'text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto'}>
              {SOCIALS_DESCRIPTION}
            </p>
          </div>

          <Tabs defaultValue={'twitter'} className={'space-y-8'}>
            <TabsList className={'grid w-full grid-cols-3 max-w-md mx-auto'}>
              <TabsTrigger value={'twitter'}>{TAB_TITLES.twitter}</TabsTrigger>
              <TabsTrigger value={'linkedin'}>{TAB_TITLES.linkedin}</TabsTrigger>
              <TabsTrigger value={'instagram'}>
                {TAB_TITLES.instagram}
              </TabsTrigger>
            </TabsList>

            <TabsContent value={'twitter'} className={'space-y-6'}>
              {socialPosts.twitter.map((post) => (
                <Card key={post.id}>
                  <CardContent className={'p-6'}>
                    <p className={'text-lg mb-4'}>{post.content}</p>
                    <div className={'flex items-center justify-between text-sm text-muted-foreground'}>
                      <div>{formatDate(post.date)}</div>
                      <div className={'flex gap-4'}>
                        <span>❤️ {post.likes}</span>
                        <span>🔄 {post.retweets}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value={'linkedin'} className={'space-y-6'}>
              {socialPosts.linkedin.map((post) => (
                <Card key={post.id}>
                  <CardContent className={'p-6'}>
                    <h3 className={'text-xl font-semibold mb-2'}>{post.title}</h3>
                    <p className={'text-muted-foreground mb-4'}>{post.content}</p>
                    <div className={'flex items-center justify-between text-sm text-muted-foreground'}>
                      <div>{formatDate(post.date)}</div>
                      <div className={'flex gap-4'}>
                        <span>👍 {post.likes}</span>
                        <span>💬 {post.comments}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent
              value={'instagram'}
              className={'grid grid-cols-1 md:grid-cols-2 gap-6'}
            >
              {socialPosts.instagram.map((post) => (
                <Card key={post.id} className={'overflow-hidden'}>
                  <div className={'relative h-64 w-full'}>
                    <img
                      src={post.image}
                      alt={post.caption}
                      className={'absolute inset-0 w-full h-full object-cover'}
                    />
                  </div>
                  <CardContent className={'p-6'}>
                    <p className={'text-muted-foreground mb-4'}>{post.caption}</p>
                    <div className={'flex items-center justify-between text-sm text-muted-foreground'}>
                      <div>{formatDate(post.date)}</div>
                      <div>❤️ {post.likes}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
