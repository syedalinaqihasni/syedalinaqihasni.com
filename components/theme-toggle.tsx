'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * ThemeToggle Component
 *
 * A button that toggles between light and dark themes using `next-themes`.
 * Handles client-side rendering mismatch with a `mounted` flag.
 */
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme(); // Current theme state from next-themes
  const [mounted, setMounted] = useState(false); // Tracks if component is mounted (to avoid hydration mismatch)

  /**
   * Ensure this component only renders after it has mounted on the client.
   * This prevents mismatch between server-rendered and client-rendered theme.
   */
  useEffect(() => {
    setMounted(true);
  }, []);

  // Show disabled fallback button during SSR or before hydration
  if (!mounted) {
    return (
      <Button
        variant={'ghost'}
        size={'icon'}
        disabled
        aria-label={'Toggle theme (loading)'}
      >
        <Sun className={'h-5 w-5'}/>
      </Button>
    );
  }

  /**
   * Handle theme toggle between light and dark.
   */
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
        <Sun className={'h-5 w-5 transition-all'}/>
      ) : (
        <Moon className={'h-5 w-5 transition-all'}/>
      )}
    </Button>
  );
}
