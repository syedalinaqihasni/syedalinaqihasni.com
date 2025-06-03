import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SocialPosts } from '@/types/social';
import { socialPosts,TAB_TITLES,CONSTANT } from '@/constants/social';
import { formatDate } from '@/lib/utils';
import { styles } from '@/styles/social';

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

function renderPostsByType(type: keyof SocialPosts) {
  switch (type) {
    case 'twitter':
      return socialPosts.twitter?.map((post) => (
        <Card key={post.id}>
          <CardContent className={styles.cardContent}>
            <p className={styles.postText}>{post.content}</p>
            <div className={styles.postMeta}>
              <div>{formatDate(post.date)}</div>
              <div className={styles.postStats}>
                <span>❤️ {post.likes}</span>
                <span>🔄 {post.retweets}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ));
    case 'linkedin':
      return socialPosts.linkedin?.map((post) => (
        <Card key={post.id}>
          <CardContent className={styles.cardContent}>
            <h3 className={styles.linkedinTitle}>{post.title}</h3>
            <p className={styles.linkedinContent}>{post.content}</p>
            <div className={styles.postMeta}>
              <div>{formatDate(post.date)}</div>
              <div className={styles.postStats}>
                <span>👍 {post.likes}</span>
                <span>💬 {post.comments}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ));
    case 'instagram':
      return (
        <div className={styles.instaGrid}>
          {socialPosts.instagram?.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className={styles.instaImageWrapper}>
                <img
                  src={post.image}
                  alt={post.caption}
                  className={styles.instaImage}
                />
              </div>
              <CardContent className={styles.cardContent}>
                <p className={styles.instaCaption}>{post.caption}</p>
                <div className={styles.postMeta}>
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

export default function SocialsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>{CONSTANT.title}</h1>
          <p className={styles.description}>{CONSTANT.description}</p>
        </div>

        <Tabs defaultValue="twitter" className={styles.tabs}>
          <TabsList className={styles.tabsList}>
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
