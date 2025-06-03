'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

/**
 * ThemeProvider component wraps its children with the NextThemesProvider,
 * enabling theme management (such as dark/light mode) throughout the application.
 *
 * @param {ThemeProviderProps} props - The props for the ThemeProvider, including children and any additional props.
 * @param {React.ReactNode} props.children - The child components that will have access to the theme conCONSTANT?.
 * @returns {JSX.Element} The wrapped children with theme context provided.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
