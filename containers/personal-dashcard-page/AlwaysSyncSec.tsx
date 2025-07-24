"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { TbAlertHexagonOff } from "react-icons/tb";
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
					<h2>Reliable and Reassuring</h2>
					<h3>
						<TbAlertHexagonOff />
						No more second guessing.
					</h3>
					<p>
						Your Personal DashCard stays updated in real time as soon as you upload a new certification to the app, its instantly reflected on your physical card.
					</p>
					<p>
						You&apos;ll always have the most accurate, verified version of your credentials. We&apos;re protecting what keeps you working — and you work for.
					</p>
				</motion.div>
				<motion.div
					style={{ opacity: opacity2 }}
					className={styles.alwaysSyncSec__content__assetContainer}
				>
					<Image
						src='/images/personal-dashcard/your-personal-dashcard.webp'
						width={600}
						height={600}
						alt='always sync'
						sizes='(max-width: 1200px) 500px, 500px, (max-width: 768px) 300px, 300px'
					/>
				</motion.div>
			</div>
		</section>
	);
}
