import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import {   TAB_TITLES,
  SOCIALS_TITLE,
  SOCIALS_DESCRIPTION,
  PAGE_TITLE,
  PAGE_TITLE_FULL,
  PAGE_DESCRIPTION,
  PAGE_SUBTITLE,
  MEDIUM,
  DEVTO,
  REDDIT,
  archivePosts,
  socialPosts,} from '@/constants/archive';
import { formatDate } from '@/lib/utils';


// Force static generation
export const dynamic = 'force-static';

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
              {archivePosts.medium?.map((post) => (
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
                      {post.tags?.map((tag) => (
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
              {archivePosts.devto?.map((post) => (
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
                      {post.tags?.map((tag) => (
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
              {archivePosts.reddit?.map((post) => (
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
                      {post.tags?.map((tag) => (
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
              {socialPosts.twitter?.map((post) => (
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
              {socialPosts.linkedin?.map((post) => (
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
              {socialPosts.instagram?.map((post) => (
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
