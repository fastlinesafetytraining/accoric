import { ReactLenis } from "lenis/react";
import Script from "next/script";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@styles/globals.css";
import { Header, Footer } from "@components/UI";
import NoScriptGoogleTag from "@components/NoScriptGoogleTag";
const openSans = Open_Sans({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: "Accoric",
  description: "Accoric is a software company that provides solutions for businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const lenisOptions = {  
    duration: 2,
    smooth: true,
    lerp: 0.1,
    smoothWheel: true,
    smoothTouch: true,
    predictive: true,
    wheelMultiplier: 0.75,
    touchMultiplier: 0.75,
    touchInertiaMultiplier: 0.75,
    touchInertiaThreshold: 0.75,
    touchInertiaThresholdMultiplier: 0.75,
  }
  return (
    <ReactLenis root options={lenisOptions}>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
          				{/* Google Tag Manager */}
          <Script
					async
          id="google-tag-manager"
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_PRODUCTION_GOOGLE_TAG_MANAGER_ID}`}
				></Script>
				<Script
					id="google-tag-manager-script"
					dangerouslySetInnerHTML={{
						__html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                    `,
					}}
				></Script>
				{/* End Google Tag Manager */}
        </head>
        <body className={openSans.className}>
        <Header />
        {children}
        <Footer />
        <NoScriptGoogleTag />
      </body>
    </html>
    </ReactLenis>
  );
}
