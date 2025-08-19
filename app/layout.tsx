import "@ant-design/v5-patch-for-react-19";
import React, { Suspense } from "react";
import { ReactLenis } from "lenis/react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Open_Sans, Anton } from "next/font/google";
import { Header, Footer } from "@components/UI";
import type { Metadata, Viewport } from "next";
import Provider from "./provider";
import "@styles/globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });
const anton = Anton({ 
	weight: "400",
	subsets: ["latin"],
	variable: "--font-anton"
});

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: "#000000",
	colorScheme: "light dark",
};

export const metadata: Metadata = {
	title: "Accoric",
	description:
		"Accoric is a software company that provides solutions for businesses.",
	openGraph: {
		title: "Accoric",
		description:
			"Accoric is a software company that provides solutions for businesses.",
		type: "website",
		locale: "en_US",
		siteName: "Accoric",
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
	const googleAnalyticsId: string = process.env
		.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID as string;
	return (
		<ReactLenis root options={lenisOptions}>
			<html lang='en'>
				<body className={`${openSans.className} ${anton.variable}`}>
					<Provider>
						<Suspense fallback={null}>
							<Header />
							{children}
							<Footer />
						</Suspense>
						<Analytics />
						<GoogleAnalytics gaId={googleAnalyticsId} />
						<SpeedInsights />
					</Provider>
				</body>
			</html>
		</ReactLenis>
	);
}
