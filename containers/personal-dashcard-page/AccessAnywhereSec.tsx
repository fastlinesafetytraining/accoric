"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import styles from "@styles/pages/personalDashcard.module.scss";

export default function AccessAnywhereSec() {
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
		<section ref={ref} id='accessFromAnywhere' className={styles.accessAnywhereSec}>
			<div className={styles.accessAnywhereSec__content}>
				<motion.div
					style={{ opacity }}
					className={styles.accessAnywhereSec__content__text}
				>
					<h2>
						When you need them,
						<br /> they&apos;ll be there.
					</h2>
					<p>
						You work too hard to be caught off guard. With instant access to
						every certification, the Personal DashCard helps you stay ready and
						respected, whenever you have to prove you&apos;re certified.
					</p>
					<p>
						With a simple tap of your card, you can access your certifications
						instantly, anywhere you go.
					</p>
					<p>Access your certifications instantly, anywhere you go.</p>
				</motion.div>
				<motion.div
					style={{ opacity: opacity2 }}
					className={styles.accessAnywhereSec__content__assetContainer}
				>
					<Image
						src='/images/checking-current-certifications.webp'
						width={600}
						height={600}
						alt='access anywhere'
						sizes='(max-width: 1200px) 500px, 500px, (max-width: 768px) 300px, 300px'
					/>
				</motion.div>
			</div>
		</section>
	);
}
