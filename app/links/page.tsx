import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { CONSTANT, LINKS, PROFILE } from '@/constants/links';

export const metadata: Metadata = {
  title: 'Links | Syed Ali Naqi Hasni',
  description:
    'Find all my social media profiles and important links in one place',
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


// CSS Class Constants
const CONTAINER = 'container mx-auto px-4 py-32 md:py-40';
const MAX_WIDTH_WRAPPER = 'max-w-md mx-auto';

const ICONS_CONTAINER = 'flex flex-wrap justify-center gap-4 mb-8';
const ICON_WRAPPER_BASE =
  'w-[100px] h-[100px] flex items-center justify-center rounded-full shadow-lg hover:scale-105 transition-transform';

const PROFILE_CONTAINER = 'text-center mb-8';
const PROFILE_IMAGE_WRAPPER =
  'relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden';
const PROFILE_NAME = 'text-2xl font-bold';
const PROFILE_ROLE = 'text-muted-foreground';

const CARD_CONTENT = 'p-4';
const BUTTONS_GRID = 'grid grid-cols-2 gap-4';
const BUTTON_BASE = 'w-full justify-start text-white';

export default function LinksPage() {
  return (
    <div className={CONTAINER}>
      <div className={MAX_WIDTH_WRAPPER}>
        {/* Icons Row */}
        <div className={ICONS_CONTAINER}>
          {LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              target={'_blank'}
              rel={'noopener noreferrer'}
              className={`${ICON_WRAPPER_BASE} ${link.color}`}
              aria-label={link.title}
            >
              {React.cloneElement(link.icon, { size: 40, color: '#fff' })}
            </Link>
          ))}
        </div>

        {/* Profile Info */}
        <div className={PROFILE_CONTAINER}>
          <div className={PROFILE_IMAGE_WRAPPER}>
            <Image
              src={PROFILE.image}
              alt={CONSTANT?.profileAlt}
              fill
              className={'object-cover'}
            />
          </div>
          <h1 className={PROFILE_NAME}>{PROFILE.name}</h1>
          <p className={PROFILE_ROLE}>{PROFILE.role}</p>
        </div>

        {/* Buttons Grid */}
        <Card>
          <CardContent className={CARD_CONTENT}>
            <div className={BUTTONS_GRID}>
              {LINKS.map((link) => (
                <Button
                  key={link.id}
                  asChild
                  variant={'outline'}
                  className={`${BUTTON_BASE} ${link.color}`}
                >
                  <Link href={link.url} target={'_blank'} rel={'noopener noreferrer'}>
                    <span className={'mr-2'}>{link.icon}</span>
                    {link.title}
                  </Link>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
