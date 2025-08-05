"use client";
import React, { useRef } from "react";
import { SplineScene } from "@/Components/UI";
import { LuBell } from "react-icons/lu";
import { motion, useScroll, useTransform } from "motion/react";
import styles from "@styles/pages/personalDashcard.module.scss";

export default function ExpirationReminderSec() {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start 60%", "end 80%"] });
	const opacity = useTransform(
		scrollYProgress,
		[0, 0.08, 0.7, 0.85],
		[0, 1, 1, 0]
	);
	const opacity2 = useTransform(
		scrollYProgress,
		[0, 0.08, 0.7, 0.85],
		[0, 1, 1, 0.5]
	);
	return (
		<section ref={ref} id='reminders' className={styles.expirationReminderSec}>
			<div className={styles.expirationReminderSec__content}>
				<motion.div
					style={{ opacity }}
					className={styles.expirationReminderSec__content__text}
				>
					<h2 className={styles.expirationReminderSec__content__text__heading}>
						Remind Yourself <br /> Before Someone Else Does
					</h2>
					<h3 className={styles.expirationReminderSec__content__text__subHeading}>
						<LuBell />
						Customize reminders your way.
					</h3>
					<p>
						Whether it&apos;s{" "}
						<span className={styles.expirationReminderSec__content__text__highlight}>
							30
						</span>
						,{" "}
						<span className={styles.expirationReminderSec__content__text__highlight}>
							60
						</span>
						, or{" "}
						<span className={styles.expirationReminderSec__content__text__highlight}>
							90
						</span>{" "}
						days out, or whatever your preference.
					</p>
					<p>
						In a fast-paced industry, you can&apos;t afford to be pulled off a job and lose income. Customized reminders let you know when it&apos;s time to renew.
					</p>
				</motion.div>
				<motion.div
					style={{ opacity: opacity2 }}
					className={styles.expirationReminderSec__content__assetContainer}
				>
					<SplineScene className={styles.expirationReminderSec__content__assetContainer__spline} sceneId={process.env.NEXT_PUBLIC_DASHCARD_SCENE_3 as string} alt='Construction expiration reminder using the accoric dashcard app' fallbackImage='/Images/personal-dashcard/reminder-screen.webp' width={600} height={600} />
				</motion.div>
			</div>
		</section>
	);
}
