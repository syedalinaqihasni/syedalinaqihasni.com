import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { getMetadataForPath } from '@/lib/metadata';
import Script from 'next/script';

/**
 * Google Fonts configuration extracted for reuse and clarity.
 */
const interFont = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = getMetadataForPath('/');

/**
 * RootLayout component wraps all pages with global providers,
 * theme, fonts, header, footer, and Toaster notifications.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - The page content
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={'en'} suppressHydrationWarning>
      <head>
        {/* Google Tag Manager script (injected early in body) */}
        <Script id="gtm-head" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NBKH9P8G');
          `}
        </Script>
      </head>
      <body
        className={`${interFont.variable} ${poppinsFont.variable} font-sans min-h-screen bg-background text-foreground`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NBKH9P8G"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <ThemeProvider
          attribute={'class'}
          defaultTheme={'system'}
          enableSystem
          disableTransitionOnChange
        >
          <div className={'flex min-h-screen flex-col'}>
            <Header />
            <main className={'flex-1'}>{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
