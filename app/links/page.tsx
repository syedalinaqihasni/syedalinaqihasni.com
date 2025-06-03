import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { CONSTANT, LINKS, PROFILE } from '@/constants/links';
import { styles } from '@/styles/links';

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


export default function LinksPage() {
  return (
    <div className={styles?.CONTAINER}>
      <div className={styles?.MAX_WIDTH_WRAPPER}>
        {/* Icons Row */}
        <div className={styles?.ICONS_CONTAINER}>
          {LINKS?.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              target={'_blank'}
              rel={'noopener noreferrer'}
              className={`${styles?.ICON_WRAPPER_BASE} ${link.color}`}
              aria-label={link.title}
            >
              {React.cloneElement(link.icon, { size: 40, color: '#fff' })}
            </Link>
          ))}
        </div>

        {/* Profile Info */}
        <div className={styles?.PROFILE_CONTAINER}>
          <div className={styles?.PROFILE_IMAGE_WRAPPER}>
            <Image
              src={PROFILE.image}
              alt={CONSTANT?.profileAlt}
              fill
              className={'object-cover'}
            />
          </div>
          <h1 className={styles?.PROFILE_NAME}>{PROFILE.name}</h1>
          <p className={styles?.PROFILE_ROLE}>{PROFILE.role}</p>
        </div>

        {/* Buttons Grid */}
        <Card>
          <CardContent className={styles?.CARD_CONTENT}>
            <div className={styles?.BUTTONS_GRID}>
              {LINKS?.map((link) => (
                <Button
                  key={link.id}
                  asChild
                  variant={'outline'}
                  className={`${styles?.BUTTON_BASE} ${link.color}`}
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
