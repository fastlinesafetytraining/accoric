"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll } from "motion/react";
import useParallax from "@/Components/hook/useParallax";
import styles from "@styles/pages/personalDashcard.module.scss";
import SiteButton from "@/Components/UI/SiteButton";
import WelderSparks from "@/Components/UI/WelderSparks";

export default function IntroSec() {
	const { scrollYProgress } = useScroll();
	const y = useParallax(scrollYProgress, 50);

	return (
		<section id='introduction' className={styles.introSec}>
			<div className={styles.introSec__hero}>
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					className={styles.introSec__hero_text}
				>
					<h1>
						You <span>Provide.</span>
						<br /> We <span>Protect.</span>
					</h1>
					<p>
						With NYC&apos;s first personal certification tracker,<br /> we&apos;re protecting-what lets you work for.
					</p>
					<SiteButton type='secondary' href='/signup' title='Sign Up'>
						Sign Up
					</SiteButton>
				</motion.div>
			</div>
			<div className={styles.introSec__parallax}>
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.5 }}
					style={{ y }}
					className={styles.introSec__parallax__item_2}
				>
					<Image
						src='/Images/welder-image.webp'
						alt='welder-image'
						width={1200}
						height={500}
					/>
					<WelderSparks />
				</motion.div>
			</div>
		</section>
	);
}
