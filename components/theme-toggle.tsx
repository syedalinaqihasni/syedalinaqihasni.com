'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false); 
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant={'ghost'}
        size={'icon'}
        disabled
        aria-label={'Toggle theme (loading)'}
      >
        <Sun className={'h-5 w-5'} />
      </Button>
    );
  }

  const handleToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button
      variant={'ghost'}
      size={'icon'}
      onClick={handleToggle}
      aria-label={'Toggle theme'}
    >
      {theme === 'dark' ? (
        <Sun className={'h-5 w-5 transition-all'} />
      ) : (
        <Moon className={'h-5 w-5 transition-all'} />
      )}
    </Button>
  );
}
