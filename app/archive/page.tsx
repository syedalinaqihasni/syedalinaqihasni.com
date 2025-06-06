
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { getMetadataForPath } from '@/lib/metadata';
import { formatDate } from '@/lib/utils';
import { archivePosts,
  MEDIUM,
  DEVTO,
  REDDIT,
  PAGE_TITLE,
  PAGE_SUBTITLE, } from '@/constants/archive';

export const metadata = getMetadataForPath('/archive');

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
              {archivePosts?.medium?.map((post) => (
                <Card key={post?.id}>
                  <CardContent className={'p-6'}>
                    <div className={'flex justify-between items-start mb-4'}>
                      <h2 className={'text-xl font-semibold hover:text-primary transition-colors'}>
                        <Link
                          href={post?.url}
                          target={'_blank'}
                          className={'flex items-center gap-2'}
                        >
                          {post?.title}
                          <ExternalLink className={'h-4 w-4'} />
                        </Link>
                      </h2>
                      <div className={'text-sm text-muted-foreground'}>
                        {post?.readTime}
                      </div>
                    </div>
                    <p className={'text-muted-foreground mb-4'}>{post?.excerpt}</p>
                    <div className={'flex flex-wrap gap-2 mb-4'}>
                      {post?.tags?.map((tag) => (
                        <Badge key={tag} variant={'secondary'}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className={'text-sm text-muted-foreground'}>
                      {formatDate(post?.date)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value={'devto'} className={'space-y-6'}>
              {archivePosts?.devto?.map((post) => (
                <Card key={post?.id}>
                  <CardContent className={'p-6'}>
                    <div className={'flex justify-between items-start mb-4'}>
                      <h2 className={'text-xl font-semibold hover:text-primary transition-colors'}>
                        <Link
                          href={post?.url}
                          target={'_blank'}
                          className={'flex items-center gap-2'}
                        >
                          {post?.title}
                          <ExternalLink className={'h-4 w-4'} />
                        </Link>
                      </h2>
                      <div className={'text-sm text-muted-foreground'}>
                        {post?.readTime}
                      </div>
                    </div>
                    <p className={'text-muted-foreground mb-4'}>{post?.excerpt}</p>
                    <div className={'flex flex-wrap gap-2 mb-4'}>
                      {post?.tags?.map((tag) => (
                        <Badge key={tag} variant={'secondary'}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className={'text-sm text-muted-foreground'}>
                      {formatDate(post?.date)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value={'reddit'} className={'space-y-6'}>
              {archivePosts?.reddit?.map((post) => (
                <Card key={post?.id}>
                  <CardContent className={'p-6'}>
                    <div className={'flex justify-between items-start mb-4'}>
                      <h2 className={'text-xl font-semibold hover:text-primary transition-colors'}>
                        <Link
                          href={post?.url}
                          target={'_blank'}
                          className={'flex items-center gap-2'}
                        >
                          {post?.title}
                          <ExternalLink className={'h-4 w-4'} />
                        </Link>
                      </h2>
                      <div className={'text-sm text-muted-foreground'}>
                        ↑ {post?.upvotes}
                      </div>
                    </div>
                    <p className={'text-muted-foreground mb-4'}>{post?.excerpt}</p>
                    <div className={'flex flex-wrap gap-2 mb-4'}>
                      {post?.tags?.map((tag) => (
                        <Badge key={tag} variant={'secondary'}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className={'text-sm text-muted-foreground'}>
                      {formatDate(post?.date)}
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
