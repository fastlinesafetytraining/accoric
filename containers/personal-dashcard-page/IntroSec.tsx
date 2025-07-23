"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import styles from "@styles/pages/personalDashcard.module.scss";
import SiteButton from "@/Components/UI/SiteButton";
import WelderSparks from "@/Components/UI/WelderSparks";

export default function IntroSec() {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 0%", "end 80%"],
	});

	return (
		<section ref={ref} id='introduction' className={styles.introSec}>
			<div className={styles.introSec__content}>
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					className={styles.introSec__content__text}
				>
					<motion.h1
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, staggerChildren: 0.5 }}
						exit={{ opacity: 0, y: 100 }}
					>
						You
						<br /> <span>Provide.</span>
						<br /> We
						<br /> <span>Protect.</span>
					</motion.h1>
					<p>
						With NYC&apos;s first personal certification tracker,
						<br /> we&apos;re protecting what lets you work — and what you work
						for.
					</p>
					<div className={styles.introSec__content__buttonContainer}>
						<SiteButton type='secondary' href='/signup' title='Sign Up'>
							Sign Up
						</SiteButton>
					</div>
				</motion.div>
				<div className={styles.introSec__content__assetContainer}>
					<Image
						className={styles.introSec__content__assetContainer__img}
						src='/Images/personal-dashcard/welder-image.webp'
						alt='welder-image'
						width={700}
						height={700}
					/>
					<WelderSparks />
					<Image
						className={styles.introSec__content__assetContainer__imgBackground}
						src='/Images/personal-dashcard/welding-background.webp'
						alt='welder-image'
						width={700}
						height={700}
					/>
				</div>
			</div>
		</section>
	);
}
