'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

// Static content
const TEXT = {
  brandName: 'Syed Ali Naqi Hasni',
  description:
    "Showcasing my work, skills, and journey as a developer. Feel free to reach out for collaboration or opportunities. I build exceptional digital experiences that are fast, accessible, and visually appealing. Let's create something amazing together.",
  quickLinksHeading: 'Quick Links',
  connectHeading: 'Connect',
  copyright: `© ${new Date().getFullYear()} Syed Hasni | All rights reserved.`,
};

const CONTACT_INFO = [
  { label: 'Email', value: 'email@example.com' },
  { label: 'Email', value: 'email@example.com' },
  { label: 'Phone', value: '+92 (555) 123-4567' },
  { label: 'Phone', value: '+1 (555) 123-4567' },
  { label: 'Address', value: '1234 Main St, Hometown, Country' },
];

const LINKS_GROUPS = [
  [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ],
  [
    { name: 'Links', path: '/links' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Archive', path: '/archive' },
    { name: 'Events', path: '/events' },
  ],
];

const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    url: 'https://linkedin.com',
    label: 'LinkedIn',
  },
  {
    icon: Twitter,
    url: 'https://twitter.com',
    label: 'Twitter',
  },
  {
    icon: Instagram,
    url: 'https://instagram.com',
    label: 'Instagram',
  },
  {
    icon: Mail,
    url: 'mailto:syedhasni151214@gmail.com',
    label: 'Email',
  },
];

// Tailwind classes
const styles = {
  container: 'w-full',
  heading: 'text-lg font-semibold mb-4',
  grid: 'grid grid-cols-2 gap-4',
  list: 'space-y-2',
  link: 'text-muted-foreground hover:text-foreground transition-colors',
  contactBlock: 'mt-6',
  contactList: 'space-y-1 text-sm text-muted-foreground',
  footerBase:
    'border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center',
  socialIcons: 'flex space-x-4',
  socialIcon:
    'h-5 w-5 text-muted-foreground hover:text-foreground transition-colors',
};

export default function Footer() {
  return (
    <footer className={'bg-muted py-12 mt-20'}>
      <div className={'container mx-auto px-4 md:px-6'}>
        <div className={'grid grid-cols-1 md:grid-cols-3 gap-8'}>
          {/* Brand and Description */}
          <div>
            <Link href={'/'}className={'font-bold text-2xl mb-4'}>
              <h3 className={'mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-purple-400'}>
                {TEXT.brandName}
              </h3>
            </Link>
            <p className={'text-muted-foreground'}>{TEXT.description}</p>
          </div>

          {/* Navigation Links */}
          <div className={styles?.container}>
            <h3 className={styles?.heading}>{TEXT.quickLinksHeading}</h3>
            <div className={styles?.grid}>
              {LINKS_GROUPS.map((group, i) => (
                <ul className={styles?.list} key={i}>
                  {group.map((link) => (
                    <li key={link?.path}>
                      <Link href={link?.path} className={styles?.link}>
                        {link?.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div className={styles?.contactBlock}>
              <h3 className={styles?.heading}>{TEXT.connectHeading}</h3>
              <ul className={styles?.contactList}>
                {CONTACT_INFO.map((item, idx) => (
                  <li key={idx}>
                    {item.label}: {item.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles?.footerBase}>
          <p className={'text-sm text-muted-foreground'}>{TEXT.copyright}</p>
          <div className={'mt-2 md:mt-0'}>
            <div className={styles?.socialIcons}>
              {SOCIAL_LINKS.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                  aria-label={label}
                >
                  <Icon className={styles?.socialIcon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
