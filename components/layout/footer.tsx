'use client';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const TEXT = {
    quickLinksHeading: 'Quick Links',
    connectHeading: 'Connect',
  };
  const CONTACT_INFO = {
    email1: 'email@example.com',
    phone1: '+92 (555) 123-4567',
    email2: 'email@example.com',
    phone2: '+1 (555) 123-4567',
    address1: '1234 Main St, Hometown, Country',
  };

  // Navigation link groups
  const LINKS_GROUP_1 = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  const LINKS_GROUP_2 = [
    { name: 'Links', path: '/links' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Archive', path: '/archive' },
    { name: 'Events', path: '/events' },
  ];

  // Styles
  const styles = {
    container: 'w-full',
    heading: 'text-lg font-semibold mb-4',
    grid: 'grid grid-cols-2 gap-4',
    list: 'space-y-2',
    link: 'text-muted-foreground hover:text-foreground transition-colors',
    contactBlock: 'mt-6',
    contactList: 'space-y-1 text-sm text-muted-foreground',
  };
  return (
    <footer className="bg-muted py-12 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="font-bold text-2xl mb-4">
              <h3 className=" mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-purple-400">
                {'Syed Ali Naqi Hasni'}
              </h3>
            </Link>
            <p className="text-muted-foreground">
              {`Showcasing my work, skills, and journey as a developer.<br>
              Feel free
              to reach out for collaboration or opportunities. I build
              exceptional digital experiences that are fast, accessible, and
              visually appealing. Let's create something amazing together.`}
            </p>
          </div>

          <div className={styles.container}>
            <h3 className={styles.heading}>{TEXT.quickLinksHeading}</h3>
            <div className={styles.grid}>
              <ul className={styles.list}>
                {LINKS_GROUP_1.map((link) => (
                  <li key={link.path}>
                    <Link href={link.path} className={styles.link}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className={styles.list}>
                {LINKS_GROUP_2.map((link) => (
                  <li key={link.path}>
                    <Link href={link.path} className={styles.link}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className={styles.contactBlock}>
              <h3 className={styles.heading}>{TEXT.connectHeading}</h3>
              <ul className={styles.contactList}>
                <li>Email: {CONTACT_INFO.email1}</li>
                <li>Email: {CONTACT_INFO.email2}</li>
                <li>Phone: {CONTACT_INFO.phone1}</li>
                <li>Phone: {CONTACT_INFO.phone2}</li>
                <li>Address: {CONTACT_INFO.address1}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Syed Hasni | All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="mailto:syedhasni151214@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            </div>
          </p>
        </div>
      </div>
    </footer>
  );
}
