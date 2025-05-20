import React from "react";
import {
	HeroSection,
	AccoricManagementSection,
	AccoricDashcardSection,
	ClientSection,
	TestimonialSection,
	AboutSection,
} from "@containers/home-page";
import { ContactCTA, ContactCards } from "@components/UI";
import styles from "@styles/pages/home.module.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Accoric | Construction Certificate Management Software",
	description: "All Your CERTIFICATES Stored Into One Location",
};

export default function Home() {
	return (
		<main className={styles.homePage}>
			<HeroSection />
			<AccoricManagementSection />
			<AccoricDashcardSection />
			<ClientSection />
			<TestimonialSection />
			<AboutSection />
			<ContactCards />
			<ContactCTA />
		</main>
	);
}
