import React from "react";
import { SideBarAnchor, PageBackground, FAQSec, IntroSec, YourCardSec, YourCertificationSec, AccessAnywhereSec, AlwaysSyncSec, ExpirationReminderSec, PricingSec } from "@/containers/personal-dashcard-page";
import type { Metadata } from "next";
import styles from "@styles/pages/personalDashcard.module.scss";

export const metadata: Metadata = {
	title: "Accoric Personal DASHcard | Accoric",
	description: "The Accoric Personal DASHcard is a personal ID card for the pros to combine all their certifications into one place with smart alerts and expiration reminders.",
	openGraph: {
		title: "Accoric Personal DASHcard",
		description:
			"Accoric DASHcard is the one card for the pros to combine all their certifications into one place with smart alerts and expiration reminders.",
		type: "website",
		locale: "en_US",
		siteName: "Accoric",
	},
};


export default function Page() {
	return (
		<main className={styles.personalDashcard}>
			<div className={styles.personalDashcard__sections}>
				<IntroSec />
				<YourCardSec />
				<YourCertificationSec />
				<ExpirationReminderSec />
				<AccessAnywhereSec />
				<AlwaysSyncSec />
				<PricingSec />
				<FAQSec />
			</div>
			<PageBackground />
			<SideBarAnchor />
		</main>
	);
}
