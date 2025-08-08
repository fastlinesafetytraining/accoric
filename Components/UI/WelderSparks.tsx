"use client";
import React, { useEffect } from "react";
import styles from "@styles/pages/personalDashcard.module.scss";
import { useAnimation, motion } from "motion/react";

export default function WelderSparks() {
	const SPARKS = 100;

	function random(min: number, max: number) {
		return Math.random() * (max - min) + min;
	}

	const sparkControls = useAnimation();

	useEffect(() => {
		const animateSparks = async () => {
			while (true) {
				await sparkControls.start(() => {
					const angle = random(180, 270);
					const distance = random(60, 1000);
					const duration = random(0.4, 1.5);
					const delay = random(0, 0.5);
					const radians = (angle * Math.PI) / 180;
					const x = Math.cos(radians) * distance;
					const y = Math.sin(radians) * distance;
					return {
						opacity: [1, 0],
						x: [0, x],
						y: [0, y],
						scale: [1, 0.5],
						rotate: [0, -45, 0],
						transition: { duration, delay, ease: "easeOut" },
					};
				});
				await new Promise((res) => setTimeout(res, 600));
			}
		};
		animateSparks();
	}, [sparkControls]);

	return (
		<div className={styles.welderSparks}>
			{Array.from({ length: SPARKS }).map((_, index) => (
				<motion.div
					key={index}
					className={styles.welderSparks__sparks}
					custom={index}
					initial={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
					animate={sparkControls}
				/>
			))}
		</div>
	);
}
