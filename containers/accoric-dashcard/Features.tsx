"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
	LuAlarmClock,
	LuCircleFadingPlus,
	LuGoal,
	LuNfc,
} from "react-icons/lu";
import styles from "@styles/pages/accoricDashcard.module.scss";

const features: {
	icon: React.ReactNode;
	title: string;
	description: string;
}[] = [
	{
		icon: <LuNfc />,
		title: "Smart Card Access",
		description:
			"Tap or scan your NFC & QR-enabled DashCard to instantly show your certifications.",
	},
	{
		icon: <LuAlarmClock />,
		title: "Expiration Reminders",
		description:
			"Never miss a renewal. Stay ahead of expiration with smart alerts.",
	},
	{
		icon: <LuGoal />,
		title: "Works Anywhere",
		description: "Use it wherever you work—it's yours, not your company's.",
	},
	{
		icon: <LuCircleFadingPlus />,
		title: "Always Up to Date",
		description:
			"Syncs with your personal Profile so your card always reflects your latest certifications.",
	},
];

export default function Features() {
	gsap.registerPlugin(ScrollTrigger);
	const boxRef = useRef(null);
	useGSAP(() => {
		gsap.from(".featureItem", {
			opacity: 0,
			y: 100,
			duration: 0.5,
			stagger: 0.5,
			ease: "power2.inOut",
			scrollTrigger: {
				trigger: boxRef.current,
				start: "top 75%",
				end: "+=500px",
				scrub: true,
			},
		});
	});
	return (
		<section ref={boxRef} id='features' className={styles.accoricDashcard__info__features}>
			<div className={styles.accoricDashcard__sticky}>
				<div className={styles.accoricDashcard__content}>
					<h2>Featured Highlights</h2>
					<div className={styles.accoricDashcard__info__features}>
						{features.map((feature, index) => (
							<div
								key={index}
								className={`${styles.accoricDashcard__info__features__feature} featureItem`}
							>
								<i>{feature.icon}</i>
								<div className={styles.accoricDashcard__info__features__feature__content}>
									<h3>{feature.title}</h3>
									<p>{feature.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
