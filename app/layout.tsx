import { ReactLenis } from "lenis/react";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@Styles/globals.css";
import { Header, Footer } from "@Components/UI";
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
  return (
    <ReactLenis root>
      <html lang="en">
        <body className={openSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
    </ReactLenis>
  );
}
