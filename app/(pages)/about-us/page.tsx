import {
	HeroSection,
	WhoSection,
	PromiseSection,
	WhySection,
} from "@containers/about-us-page";
import { ContactCTA, ContactCards } from "@components/UI";
import type { Metadata } from "next";
import styles from "@styles/pages/aboutUs.module.scss";

export const metadata: Metadata = {
	title: "About Us | Accoric",
	description:
		"Learn more about Accoric and our mission to simplify certification tracking while ensuring maximum security and efficiency.",
};

export default function AboutUs() {
	return (
		<main className={styles.aboutUs}>
			<HeroSection />
			<div className={styles.aboutUs__content}>
				<WhoSection />
				<PromiseSection />
				<WhySection />
				<section aria-label='Contact information'>
					<ContactCards />
				</section>
				<ContactCTA />
			</div>
		</main>
	);
}
