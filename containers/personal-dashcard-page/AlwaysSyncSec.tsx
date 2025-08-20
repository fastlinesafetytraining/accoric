"use client";
import React, { useRef } from "react";
import { TbAlertHexagonOff } from "react-icons/tb";
import { motion, useScroll, useTransform } from "motion/react";
import styles from "@styles/pages/personalDashcard.module.scss";

export default function AlwaysSyncSec() {
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
		<section ref={ref} id='alwaysSync' className={styles.alwaysSyncSec}>
			<div className={styles.alwaysSyncSec__content}>
				<motion.div
					style={{ opacity }}
					className={styles.alwaysSyncSec__content__text}
				>
					<h2 className={styles.alwaysSyncSec__content__text__heading}>Reliable and Reassuring</h2>
					<h3 className={styles.alwaysSyncSec__content__text__subHeading}>
						<TbAlertHexagonOff />
						No more second guessing.
					</h3>
					<p>
						Your Personal DASHcard™ updates in real time as soon as you upload a new certification to the app, it&apos;s instantly reflected on your physical card.
					</p>
					<p>
						Upload a certification on the app, and it&apos;s instantly reflected when you scan your card.
					</p>
				</motion.div>
				<motion.div
					style={{ opacity: opacity2 }}
					className={styles.alwaysSyncSec__content__assetContainer}
				>
					<video src="/Videos/personal-dashcard/pd-5.mp4" autoPlay loop muted playsInline />
				</motion.div>
			</div>
		</section>
	);
}
