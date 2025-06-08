import React from "react";
import styles from "@styles/pages/accoricDashcard.module.scss";

const features: { title: string; description: string; }[] = [
	{
		title: "Smart Card Access",
		description:
			"Tap or scan your NFC & QR-enabled DashCard to instantly show your certifications.",
	},
	{
		title: "Expiration Reminders",
		description:
			"Never miss a renewal. Stay ahead of expiration with smart alerts.",
	},
	{
		title: "Works Anywhere",
		description:
			"Use it wherever you work—it's yours, not your company's.",
	},
	{
		title: "Always Up to Date",
		description:
			"Syncs with your personal Profile so your card always reflects your latest certifications.",
	},
];

export default function Features() {
	return (
		<section id="features" className={styles.accoricDashcard__info__features}>
			<div className={styles.accoricDashcard__sticky}>
				<div className={styles.accoricDashcard__content}>
					<h2>Featured Highlights</h2>
						{features.map((feature, index) => (
							<div key={index} className={styles.accoricDashcard__feature}>
								<h3>{feature.title}</h3>
								<p>{feature.description}</p>
							</div>
						))}
				</div>
			</div>
		</section>
	);
}
