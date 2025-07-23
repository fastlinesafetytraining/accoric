"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import styles from "@styles/pages/personalDashcard.module.scss";

export default function ExpirationReminderSec() {
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
		<section ref={ref} id='reminders' className={styles.expirationReminderSec}>
			<div className={styles.expirationReminderSec__content}>
				<motion.div
					style={{ opacity }}
					className={styles.expirationReminderSec__content__text}
				>
					<h2>
						Remind Yourself <br /> Before Someone Else Does
					</h2>
					<p>
						Customize reminders your way{" "}
						<span className={styles.expirationReminderSec__content__text__days}>
							30
						</span>
						,{" "}
						<span className={styles.expirationReminderSec__content__text__days}>
							60
						</span>
						, or{" "}
						<span className={styles.expirationReminderSec__content__text__days}>
							90
						</span>{" "}
						days out - whatever your preference.
					</p>
					<p>
						You can also set a reminder for a specific date, and we&apos;ll send
						you a notification when it&apos;s time to renew.
					</p>
				</motion.div>
				<motion.div
					className={styles.expirationReminderSec__content__assetContainer}
				>
					<Image
						src='/images/personal-dashcard/reminder-screen.webp'
						alt='Construction expiration reminder using the accoric dashcard app'
						width={600}
						height={600}
						sizes='(max-width: 1200px) 500px, 500px, (max-width: 768px) 300px, 300px'
					/>
				</motion.div>
			</div>
		</section>
	);
}
