import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { LINKS2 } from '@/constants/links';
import { styles } from '@/styles/links';

export const metadata: Metadata = {
  title: 'Links | Syed Ali Naqi Hasni',
  description:
    'Find all my social media profiles and important links in one place',
};

const TEXT = {
  profileAlt: 'Syed Ali Naqi Hasni Profile Picture',
};

const PROFILE = {
  name: 'Syed Ali Naqi Hasni',
  role: 'Front End Developer & UI/UX Designer',
  image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
};

// CSS Class Constants'


export default function LinksPage() {
  return (
    <div className={styles?.container}>
      <div className={styles?.maxWidthWrapper}>
        {/* Icons Row */}
        <div className={styles?.iconsContainer}>
          {LINKS2.map((link) => (
            <a
              key={link?.id}
              href={link?.url}
              target={'_blank'}
              rel={'noopener noreferrer'}
              className={`${styles?.iconWrapperBase} ${link?.color}`}
              aria-label={link?.title}
            >
              {React.cloneElement(link?.icon, { size: 40, color: '#fff' })}
            </a>
          ))}
        </div>

        {/* Profile Info */}
        <div className={styles?.profileContainer}>
          <div className={styles?.profileImageWrapper}>
            <Image
              src={PROFILE.image}
              alt={TEXT.profileAlt}
              fill
              className={'object-cover'}
            />
          </div>
          <h1 className={styles?.profileName}>{PROFILE.name}</h1>
          <p className={styles?.profileRole}>{PROFILE.role}</p>
        </div>

        {/* Buttons Grid */}
        <Card>
          <CardContent className={styles?.cardContent}>
            <div className={styles?.buttonsGrid}>
              {LINKS2.map((link) => (
                <Button
                  key={link?.id}
                  asChild
                  variant={'outline'}
                  className={`${styles?.buttonBase} ${link?.color}`}
                >
                  <a href={link?.url} target={'_blank'}rel={'noopener noreferrer'}>
                    <span className={'mr-2'}>{link?.icon}</span>
                    {link?.title}
                  </a>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
