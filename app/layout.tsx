import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { getMetadataForPath } from "@/lib/metadata";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StructuredData from "@/components/StructuredData";
import {
  aboutMe,
  localBusinessSchema,
  organizationSchema,
  portfolioSchema,
  testimonialsSchema,
  websiteSchema,
} from "@/constants/structuredData";
const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = getMetadataForPath("/");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={"en"} suppressHydrationWarning>
      <head>
        <meta
          name="p:domain_verify"
          content="b94552a212fadbb6448eace9230bec35"
        />
        <meta
          name="google-adsense-account"
          content="ca-pub-7687484682420626"
        ></meta>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/689376b063300d1924bc567e/1j200f8tb';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
        <GoogleTagManager gtmId="GTM-NBKH9P8G" />
        <GoogleAnalytics gaId="G-5TPNEKJMLD" />
        <StructuredData
          data={[
            aboutMe,
            localBusinessSchema,
            organizationSchema,
            portfolioSchema,
            testimonialsSchema,
            websiteSchema,
          ]}
        />
      </head>
      <body
        className={`${interFont.variable} ${poppinsFont.variable} font-sans min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme={"system"}
          enableSystem
          disableTransitionOnChange
        >
          <div className={"flex min-h-screen flex-col"}>
            <Header />
            <main className={"flex-1"}>{children}</main>
            <SpeedInsights />
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
