import React from "react";
import { SideBarAnchor, PageBackground, FAQSec, CallToAction, IntroSec, YourCardSec, YourCertificationSec, AccessAnywhereSec, AlwaysSyncSec, ExpirationReminderSec, SplineDashcardSec } from "@/containers/personal-dashcard-page";
import type { Metadata } from "next";
import styles from "@styles/pages/personalDashcard.module.scss";

export const metadata: Metadata = {
	title: "Accoric Personal Dashcard | Accoric",
	description: "The Accoric Personal Dashcard is a personal ID card for the pros to combine all their certifications into one place with smart alerts and expiration reminders.",
	openGraph: {
		title: "Accoric Personal Dashcard",
		description:
			"Accoric DashCard is the one card for the pros to combine all their certifications into one place with smart alerts and expiration reminders.",
		type: "website",
		locale: "en_US",
		siteName: "Accoric",
	},
};


export default function Page() {
	return (
		<main className={styles.personalDashcard}>
			<div className={styles.personalDashcard__info}>
				<IntroSec />
				<YourCardSec />
				<YourCertificationSec />
				<AccessAnywhereSec />
				<ExpirationReminderSec />
				<AlwaysSyncSec />
				<CallToAction />
				<FAQSec />
			</div>
			<PageBackground />
			<SplineDashcardSec />
			<SideBarAnchor />
		</main>
	);
}
