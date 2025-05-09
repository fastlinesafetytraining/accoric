import { ReactLenis } from "lenis/react";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Header, Footer } from "@components/UI";
import NoScriptGoogleTag from "@components/NoScriptGoogleTag";
import "@styles/globals.css";

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Accoric",
  description: "Accoric is a software company that provides solutions for businesses.",
  openGraph: {
    title: "Accoric",
    description: "Accoric is a software company that provides solutions for businesses.",
    type: "website",
    locale: "en_US",
  },
};

const lenisOptions = {
  duration: 1.2,
  smooth: true,
  lerp: 0.1,
  smoothWheel: true,
  smoothTouch: true,
  wheelMultiplier: 0.75,
  touchMultiplier: 0.75,
} as const;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis root options={lenisOptions}>
      <html lang="en">
        <head>
          {/* Google Tag Manager */}
          <Script
            async
            id="google-tag-manager"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_PRODUCTION_GOOGLE_TAG_MANAGER_ID}`}
            strategy="afterInteractive"
          />
          <Script
            id="google-tag-manager-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              `,
            }}
          />
          {/* End Google Tag Manager */}
        </head>
        <body className={openSans.className}>
          <Header />
          {children}
          <Footer />
          <NoScriptGoogleTag />
          <Analytics />
        </body>
      </html>
    </ReactLenis>
  );
}
