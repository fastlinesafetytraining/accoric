"use client";
import React, { useRef } from "react";
import { SplineScene } from "@/Components/UI";
import { IoIdCard } from "react-icons/io5";
import { useScroll, motion, useTransform } from "motion/react";
import styles from "@styles/pages/personalDashcard.module.scss";

export default function YourCardSec() {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 60%", "end 80%"],
	});
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
		<section ref={ref} id='yourCard' className={styles.yourCardSec}>
			<div className={styles.yourCardSec__content}>
				<motion.div
					className={styles.yourCardSec__content__text}
					style={{ opacity }}
				>
					<h2 className={styles.yourCardSec__content__text__heading}>Your Personal DASHcard™</h2>
					<h3 className={styles.yourCardSec__content__text__subHeading}>
						<IoIdCard />
						Your universal tool in total certification management.
					</h3>
					<p>
						For the first time, you have a tool that&apos;s <span className={styles.yourCardSec__content__text__highlight}>built</span> for you, <span className={styles.yourCardSec__content__text__highlight}>owned</span> by you, and <span className={styles.yourCardSec__content__text__highlight}>controlled</span> by you.
					</p>
					<p>
						Built with technology that lets you scan, view, and share your training certifications with anyone, anywhere, anytime.
					</p>
				</motion.div>
				<motion.div
					style={{ opacity: opacity2 }}
					className={styles.yourCardSec__content__assetContainer}
				>
					<SplineScene sceneId={process.env.NEXT_PUBLIC_DASHCARD_SCENE_1 as string} fallbackImage="/Images/personal-dashcard/your-personal-dashcard.webp" alt="Your Personal DASHcard with your Information ready to go anytime" width={600} height={600} />
				</motion.div>
			</div>
		</section>
	);
}
