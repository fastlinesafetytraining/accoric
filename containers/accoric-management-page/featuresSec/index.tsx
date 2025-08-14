"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import styles from "@styles/pages/accoricManagement.module.scss";
import { LottieComponent } from "@components/UI";
import {
	automationLottie,
	notificationsLottie,
	snapshotLottie,
} from "@/public/lottie";

export default function FeaturesSec() {
	const boxRef = useRef(null);

	const features = [
		{
			LottieIcon: snapshotLottie,
			title: "Snapshot of your workforce",
			description:
				"Easily monitor your employees' certifications with a user-friendly dashboard.",
		},
		{
			LottieIcon: automationLottie,
			title: "Automated reminders",
			description:
				"Never miss a certification deadline again with our automated reminder system.",
		},
		{
			LottieIcon: notificationsLottie,
			title: "Customizable notifications",
			description:
				"Tailor your notifications to your specific needs and preferences.",
		},
	];

	gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".managementFeatureItem", {
      x: "40%",
      opacity: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 30%",
        end: "175px",
        scrub: true,
      },
    });
  });

	return (
		<section
			ref={boxRef}
			id='accoricManagement__features'
			className={styles.accoricManagement__features}
		>
			<div className={styles.accoricManagement__features__sticky}>
				<h2>Features</h2>
				<h3>We give you the tools you need to manage your workforce!</h3>
				<div className={styles.accoricManagement__features__content}>
					<Image
						width={645}
						height={400}
						className={styles.accoricManagement__features__content__image}
						src='/Images/accoric-management-tablet-view.webp'
						alt='A mockup example of accoric management on a tablet device'
					/>
					<div
						id='accoricManagement__features__content__list'
						className={styles.accoricManagement__features__content__list}
					>
						{features.map((feature, index) => (
							<div
								key={index}
								className={`${styles.accoricManagement__features__content__list__item} managementFeatureItem`}
							>
								<LottieComponent
									animationData={feature.LottieIcon}
									className={
										styles.accoricManagement__features__content__list__item__icon
									}
									loop={true}
								/>
								<div
									className={
										styles.accoricManagement__features__content__list__item__text
									}
								>
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
