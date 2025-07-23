"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, motion, useTransform } from "motion/react";
import styles from "@styles/pages/personalDashcard.module.scss";

export default function YourCertificationSec() {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start 40%", "end 80%"] });
	const opacity = useTransform(
		scrollYProgress,
		[0, 0.08, 0.7, 0.85],
		[0, 1, 1, 0]
	);
	const opacity2 = useTransform(
		scrollYProgress,
		[0, 0.08, 0.7, 0.85],
		[0, 1, 1, 0]
	);

	return (
		<section ref={ref} id='yourCertification' className={styles.yourCertificationSec}>
			<div className={styles.yourCertificationSec__content}>
				<motion.div
					style={{ opacity }}
					className={styles.yourCertificationSec__content__text}
				>
					<h2>Proof on Demand</h2>
					<p>
						A simple way to keep your certification in check. All stored
						digitally in the app, always ready when you need them. <br /> View,
						delete, and send them to anyone right from the app.
					</p>
				</motion.div>
				<motion.div
					style={{ opacity: opacity2 }}
					className={styles.yourCertificationSec__content__assetContainer}
				>
					<Image
						src='/Images/personal-dashcard/certification-screen.webp'
						width={600}
						height={600}
						alt='your certification'
						sizes="(max-width: 1200px) 500px, 500px, (max-width: 768px) 300px, 300px"
					/>
				</motion.div>
			</div>
		</section>
	);
}
