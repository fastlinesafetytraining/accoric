"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll } from "motion/react";
import useParallax from "@/Components/hook/useParallax";
import styles from "@styles/pages/personalDashcard.module.scss";

export default function ExpirationReminderSec() {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: ref });

	return (
		<section ref={ref} id='reminders' className={styles.expirationReminderSec}>
			<div className={styles.expirationReminderSec__content}>
				<motion.div
					className={styles.expirationReminderSec__content__text}
					transition={{ duration: 2.0 }}
				>
					<h2>Never forget to renew your certificates</h2>
					<p>
						Customize how and when your notified - Weekly, Monthly or on your term.
					</p>
					<p>
						You can also set a reminder for a specific date, and we&apos;ll send you a notification when it&apos;s time to renew.
					</p>
				</motion.div>
				<motion.div transition={{ duration: 1.5 }}>
				<Image
					className={styles.expirationReminderSec__content__img}
					src='/images/personal-dashcard/reminder-screen.webp'
					alt='Construction expiration reminder using the accoric dashcard app'
					width={600}
					height={600}
					/>
				</motion.div>
			</div>
		</section>
	);
}
