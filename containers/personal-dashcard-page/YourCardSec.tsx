"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, motion, useTransform } from "motion/react";
import styles from "@styles/pages/personalDashcard.module.scss";

export default function YourCardSec() {
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
		<section ref={ref} id='yourCard' className={styles.yourCardSec}>
			<div className={styles.yourCardSec__content}>
				<motion.div
					className={styles.yourCardSec__content__text}
					style={{ opacity }}
				>
					<h2>Your Personal Dashcard™</h2>
					<p>
						The Personal Dashcard™ is the household tool in total in
						certification management.
					</p>
					<p>
						<b>
							For the first time, this is a tool that&apos;s built for you and
							owned by you.{" "}
						</b>
					</p>
					<p>
						With NFC and QR technology, you can easily scan and share your
						training certifications with anyone, anywhere.
					</p>
				</motion.div>
				<div
					className={styles.yourCardSec__content__assetContainer}
				>
					<Image
						src='/Images/personal-dashcard/your-personal-dashcard.webp'
						width={600}
						height={600}
						alt='your card'
						sizes='(max-width: 1200px) 500px, 500px, (max-width: 768px) 300px, 300px'
					/>
				</div>
			</div>
		</section>
	);
}
