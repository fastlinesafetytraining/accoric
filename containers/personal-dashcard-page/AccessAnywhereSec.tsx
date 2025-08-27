"use client";
import React, { useRef } from "react";
import { FlipText } from "@/Components/UI";
import { motion, useScroll, useTransform } from "motion/react";
import { LuShieldCheck } from "react-icons/lu";
import styles from "@styles/pages/personalDashcard.module.scss";

export default function AccessAnywhereSec() {
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
		<section ref={ref} id='accessFromAnywhere' aria-label='Access Anywhere' className={styles.accessAnywhereSec}>
			<div className={styles.accessAnywhereSec__content}>
				<motion.div
					style={{ opacity }}
					className={styles.accessAnywhereSec__content__text}
				>
					<h2 className={styles.accessAnywhereSec__content__text__heading}>
						When you need them,
						<br /> they&apos;ll be there.
					</h2>
					<h3 className={styles.accessAnywhereSec__content__text__subHeading}>
						<LuShieldCheck />
						Your commitment demands <FlipText texts={['protection', 'management', 'verification', 'communication']} />
					</h3>
					<p>
						With instant access to
						every certification, the Personal DASHcard™ helps you stay ready and
						respected.
					</p>
					<p>
						With a simple tap of your card, you can access your certifications
						instantly, anywhere you go.
					</p>
				</motion.div>
				<motion.div
					style={{ opacity: opacity2 }}
					className={styles.accessAnywhereSec__content__assetContainer}
				>
					<video src="/videos/personal-dashcard/pd-4.mp4" autoPlay loop muted playsInline />
				</motion.div>
			</div>
		</section>
	);
}
