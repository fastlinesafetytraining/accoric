"use client";
import React, { useRef } from "react";
import { PiCertificateDuotone } from "react-icons/pi";
import { useScroll, motion, useTransform } from "motion/react";
import styles from "@styles/pages/personalDashcard.module.scss";
import { SplineScene } from "@/Components/UI";

export default function YourCertificationSec() {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start 60%", "end 80%"] });
	const opacity = useTransform(
		scrollYProgress,
		[0, 0.08, 0.7, 0.85],
		[0, 1, 1, 0]
	);
	const opacity2 = useTransform(
		scrollYProgress,
		[0, 0.02, 0.6, 0.85],
		[0, 1, 1, 0.5]
	);
	return (
		<section ref={ref} id='yourCertification' className={styles.yourCertificationSec}>
			<div className={styles.yourCertificationSec__content}>
				<motion.div
					style={{ opacity }}
					className={styles.yourCertificationSec__content__text}
				>
					<h2 className={styles.yourCertificationSec__content__text__heading}>Proof on Demand</h2>
					<h3 className={styles.yourCertificationSec__content__text__subHeading}>
						<PiCertificateDuotone />
						Your certifications in check.
					</h3>
					<p>
						All stored
						digitally, always ready when you need them. <br /> View, delete, and send them to anyone right from the app.
					</p>
					<p>
						Whether you&apos;re on the job site or switching companies, your certifications are ready to go. The Personal DASHcard™ makes it effortless to stay covered and stay working.
					</p>
				</motion.div>
				<motion.div
					style={{ opacity: opacity2 }}
					className={styles.yourCertificationSec__content__assetContainer}
				>
					<SplineScene sceneId={process.env.NEXT_PUBLIC_DASHCARD_SCENE_2 as string} alt='your certifications stored digitally always ready when you need them' fallbackImage='/Images/personal-dashcard/certification-screen.webp' width={600} height={600} />
				</motion.div>
			</div>
		</section>
	);
}
