import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SocialPosts } from '@/types/social';
import { socialPosts,TAB_TITLES,CONSTANT } from '@/constants/social';
import { formatDate } from '@/lib/utils';

/**
 * Metadata for SEO and sharing
 */
export const metadata: Metadata = {
  title: 'Social Media | Portfolio',
  description: 'My social media posts and updates from various platforms',
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

/**
 * Renders posts for a given social media type
 * @param type - 'twitter' | 'linkedin' | 'instagram'
 * @returns JSX element with mapped posts
 */
function renderPostsByType(type: keyof SocialPosts) {
  switch (type) {
    case 'twitter':
      return socialPosts.twitter.map((post) => (
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
      ));
    case 'linkedin':
      return socialPosts.linkedin.map((post) => (
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
      ));
    case 'instagram':
      return (
        <div className={'grid grid-cols-1 md:grid-cols-2 gap-6'}>
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
        </div>
      );
  }
}

/**
 * Main social media page component displaying tabs with posts
 */
export default function SocialsPage() {
  return (
    <div className={'container mx-auto px-4 py-32 md:py-40'}>
      <div className={'max-w-6xl mx-auto'}>
        <div className={'text-center mb-16'}>
          <h1 className={'text-4xl md:text-5xl font-bold mb-6'}>
            {CONSTANT.title}
          </h1>
          <p className={'text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto'}>
            {CONSTANT.description}
          </p>
        </div>

        <Tabs defaultValue={'twitter'} className={'space-y-8'}>
          <TabsList className={'grid w-full grid-cols-3 max-w-md mx-auto'}>
            {(Object.keys(TAB_TITLES) as (keyof typeof TAB_TITLES)[]).map(
              (key) => (
                <TabsTrigger key={key} value={key}>
                  {TAB_TITLES[key]}
                </TabsTrigger>
              )
            )}
          </TabsList>

          {(Object.keys(socialPosts) as (keyof SocialPosts)[]).map((key) => (
            <TabsContent key={key} value={key}>
              {renderPostsByType(key)}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
