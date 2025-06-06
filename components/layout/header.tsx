'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/theme-toggle';

const CONSTANT = {
  brandName: 'Syed Ali Naqi Hasni',
  menuToggleAriaLabel: 'Toggle Menu',
};

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blogs' },
  { name: 'Resume', path: '/resume' },
  { name: 'Links', path: '/links' },
  { name: 'Contact', path: '/contact' },
];

const styles = {
  header: 'fixed top-0 w-full z-50 transition-all duration-300',
  container: 'container mx-auto px-4 md:px-6',
  brand: 'font-bold text-2xl',
  brandGradient:
    'bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-purple-400',
  desktopNav: 'hidden md:flex items-center space-x-1',
  mobileControls: 'flex items-center md:hidden gap-2',
  mobileNav: 'md:hidden mt-4 pb-4',
  mobileNavItem: 'w-full justify-start',
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderNavItems = (isMobile = false) =>
    NAV_ITEMS?.map((item) => (
      <Link
        key={item.path}
        href={item.path}
        onClick={() => isMobile && setMobileMenuOpen(false)}
      >
        <Button
          variant={pathname === item.path ? 'default' : 'ghost'}
          size={'sm'}
          className={
            isMobile
              ? styles?.mobileNavItem
              : pathname !== item.path
                ? 'hover:bg-muted'
                : ''
          }
        >
          {item.name}
        </Button>
      </Link>
    ));

  return (
    <header
      className={`${styles?.header} ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className={styles?.container}>
        <div className={'flex items-center justify-between'}>
          <Link href={'/'} className={styles?.brand}>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={styles?.brandGradient}
            >
              {CONSTANT?.brandName}
            </motion.span>
          </Link>
          <nav className={styles?.desktopNav}>
            {renderNavItems()}
            <ThemeToggle />
          </nav>
          <div className={styles?.mobileControls}>
            <ThemeToggle />
            <Button
              variant={'ghost'}
              size={'icon'}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={CONSTANT?.menuToggleAriaLabel}
            >
              {mobileMenuOpen ? (
                <X className={'h-6 w-6'} />
              ) : (
                <Menu className={'h-6 w-6'} />
              )}
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={styles?.mobileNav}
          >
            <div className={'flex flex-col space-y-2'}>
              {renderNavItems(true)}
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
