import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { styles } from '@/styles/archive';
import { archivePosts , socialPosts } from '@/constants/archive';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Development Archive | Syed Ali Naqi Hasni',
  description: 
  'Archive of my external development content and contributions',
};

const PAGE_TITLE = 'Development Archive';
const PAGE_SUBTITLE =
  'A collection of my articles, discussions, and contributions across various platforms.';
const MEDIUM = 'Medium';
const DEVTO = 'Dev.to';
const REDDIT = 'Reddit';

const TAB_TITLES = {
  twitter: 'Twitter',
  linkedin: 'LinkedIn',
  instagram: 'Instagram',
};
const SOCIALS_TITLE = 'Social Media';
const SOCIALS_DESCRIPTION =
  'Stay updated with my latest posts and activities across social media platforms.';

export default function ArchivePage() {
  return (
    <>
      <div className={styles?.container}>
        <div className={styles?.innerWrapper}>
          <div className={'text-center mb-16'}>
            <h1 className={styles?.sectionTitle}>{PAGE_TITLE}</h1>
            <p className={styles?.sectionSubtitle}>{PAGE_SUBTITLE}</p>
          </div>

          <Tabs defaultValue={'medium'}className={styles?.tabsWrapper}>
            <TabsList className={styles?.tabsList}>
              <TabsTrigger value={'medium'}>{MEDIUM}</TabsTrigger>
              <TabsTrigger value={'devto'}>{DEVTO}</TabsTrigger>
              <TabsTrigger value={'reddit'}>{REDDIT}</TabsTrigger>
            </TabsList>

            <TabsContent value={'medium'}className={styles?.tabsContent}>
              {archivePosts.medium.map((post) => (
                <Card key={post?.id}>
                  <CardContent className={styles?.cardContent}>
                    <div className={'flex justify-between items-start mb-4'}>
                      <h2 className={styles?.postTitle}>
                        <Link
                          href={post?.url}
                          target={'_blank'}
                          className={'flex items-center gap-2'}
                        >
                          {post?.title}
                          <ExternalLink className={'h-4 w-4'}/>
                        </Link>
                      </h2>
                      <div className={styles?.postMeta}>{post?.readTime}</div>
                    </div>
                    <p className={styles?.postExcerpt}>{post?.excerpt}</p>
                    <div className={styles?.postTags}>
                      {post?.tags.map((tag) => (
                        <Badge key={tag} variant={'secondary'}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className={styles?.postMeta}>{formatDate(post?.date)}</div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value={'devto'}className={styles?.tabsContent}>
              {archivePosts.devto.map((post) => (
                <Card key={post?.id}>
                  <CardContent className={styles?.cardContent}>
                    <div className={'flex justify-between items-start mb-4'}>
                      <h2 className={styles?.postTitle}>
                        <Link
                          href={post?.url}
                          target={'_blank'}
                          className={'flex items-center gap-2'}
                        >
                          {post?.title}
                          <ExternalLink className={'h-4 w-4'}/>
                        </Link>
                      </h2>
                      <div className={styles?.postMeta}>{post?.readTime}</div>
                    </div>
                    <p className={styles?.postExcerpt}>{post?.excerpt}</p>
                    <div className={styles?.postTags}>
                      {post?.tags.map((tag) => (
                        <Badge key={tag} variant={'secondary'}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className={styles?.postMeta}>{formatDate(post?.date)}</div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value={'reddit'}className={styles?.tabsContent}>
              {archivePosts.reddit.map((post) => (
                <Card key={post?.id}>
                  <CardContent className={styles?.cardContent}>
                    <div className={'flex justify-between items-start mb-4'}>
                      <h2 className={styles?.postTitle}>
                        <Link
                          href={post?.url}
                          target={'_blank'}
                          className={'flex items-center gap-2'}
                        >
                          {post?.title}
                          <ExternalLink className={'h-4 w-4'}/>
                        </Link>
                      </h2>
                      <div className={styles?.postMeta}>↑ {post?.upvotes}</div>
                    </div>
                    <p className={styles?.postExcerpt}>{post?.excerpt}</p>
                    <div className={styles?.postTags}>
                      {post?.tags.map((tag) => (
                        <Badge key={tag} variant={'secondary'}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className={styles?.postMeta}>{formatDate(post?.date)}</div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Social section */}
      <div className={'container mx-auto px-4 py-32 md:pt-5 md:pb-40'}>
        <div className={styles?.innerWrapper}>
          <div className={'text-center mb-16'}>
            <h1 className={styles?.sectionTitle}>{SOCIALS_TITLE}</h1>
            <p className={styles?.sectionSubtitle}>{SOCIALS_DESCRIPTION}</p>
          </div>

          <Tabs defaultValue={'twitter'}className={styles?.tabsWrapper}>
            <TabsList className={styles?.tabsList}>
              <TabsTrigger value={'twitter'}>{TAB_TITLES.twitter}</TabsTrigger>
              <TabsTrigger value={'linkedin'}>{TAB_TITLES.linkedin}</TabsTrigger>
              <TabsTrigger value={'instagram'}>{TAB_TITLES.instagram}</TabsTrigger>
            </TabsList>

            <TabsContent value={'twitter'}className={styles?.tabsContent}>
              {socialPosts.twitter.map((post) => (
                <Card key={post?.id}>
                  <CardContent className={styles?.cardContent}>
                    <p className={styles?.postText}>{post?.content}</p>
                    <div className={styles?.flexBetween}>
                      <div>{formatDate(post?.date)}</div>
                      <div className={'flex gap-4'}>
                        <span>❤️ {post?.likes}</span>
                        <span>🔄 {post?.retweets}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value={'linkedin'}className={styles?.tabsContent}>
              {socialPosts.linkedin.map((post) => (
                <Card key={post?.id}>
                  <CardContent className={styles?.cardContent}>
                    <h3 className={'text-xl font-semibold mb-2'}>{post?.title}</h3>
                    <p className={styles?.postExcerpt}>{post?.content}</p>
                    <div className={styles?.flexBetween}>
                      <div>{formatDate(post?.date)}</div>
                      <div className={'flex gap-4'}>
                        <span>👍 {post?.likes}</span>
                        <span>💬 {post?.comments}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value={'instagram'}className={styles?.tabsContentGrid}>
              {socialPosts.instagram.map((post) => (
                <Card key={post?.id} className={'overflow-hidden'}>
                  <div className={styles?.imageWrapper}>
                    <img
                      src={post?.image}
                      alt={post?.caption}
                      className={styles?.image}
                    />
                  </div>
                  <CardContent className={styles?.cardContent}>
                    <p className={styles?.postExcerpt}>{post?.caption}</p>
                    <div className={styles?.flexBetween}>
                      <div>{formatDate(post?.date)}</div>
                      <div>❤️ {post?.likes}</div>
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
