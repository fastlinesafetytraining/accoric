"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import styles from "@styles/pages/personalDashcard.module.scss";

export default function AlwaysSyncSec() {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 40%", "end 80%"],
	});
	const opacity = useTransform(
		scrollYProgress,
		[0, 0.08, 0.7, 0.85],
		[0, 1, 1, 0]
	);

	return (
		<section ref={ref} id='alwaysSync' className={styles.alwaysSyncSec}>
			<div className={styles.alwaysSyncSec__content}>
				<motion.div
					style={{ opacity }}
					className={styles.alwaysSyncSec__content__text}
				>
					<h2>Always know that your card will be updated in realtime</h2>
					<p>
						With the Accoric App you can always know that once you have a new
						certificate, it will be linked to your card in realtime.
					</p>
				</motion.div>
				<div
					className={styles.alwaysSyncSec__content__assetContainer}
				>
					<Image
						src='/images/personal-dashcard/your-personal-dashcard.webp'
						width={600}
						height={600}
						alt='always sync'
						sizes='(max-width: 1200px) 500px, 500px, (max-width: 768px) 300px, 300px'
					/>
				</div>
			</div>
		</section>
	);
}
