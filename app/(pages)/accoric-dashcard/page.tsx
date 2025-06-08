import React from "react";
import { SplineDashcard, SideBarAnchor, Hero, Features, WhoIsItFor, CallToAction, Blurb } from "@/containers/accoric-dashcard";
import type { Metadata } from "next";
import styles from "@styles/pages/accoricDashcard.module.scss";

export const metadata: Metadata = {
	title: "Accoric DashCard | Accoric",
	description: "Accoric DashCard",
	openGraph: {
		title: "Accoric DashCard",
		description:
			"Accoric DashCard is the one card for the pros to combine all their certifications into one place with smart alerts and expiration reminders.",
		type: "website",
		locale: "en_US",
		siteName: "Accoric",
	},
};



export default function Page() {
	return (
		<main className={styles.accoricDashcard}>
			<div className={styles.accoricDashcard__info}>
				<Hero />
				<Features />
				<WhoIsItFor />
				<CallToAction />
				<Blurb />			
			</div>
			<SplineDashcard />
			<SideBarAnchor />
		</main>
	);
}
