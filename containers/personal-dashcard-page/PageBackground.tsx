"use client";
import React, { useMemo } from "react";
import styles from "@styles/pages/personalDashcard.module.scss";
import { motion, useScroll } from "motion/react";
import useParallax from "@/Components/hook/useParallax";

export default function PageBackground() {
	// Dot matrix settings
	const numRows = 80;
	const numCols = 10;
	const dotSize = 7; // px

	// Parallax setup
	const { scrollYProgress } = useScroll();
	// Call useParallax a fixed number of times (20 rows)
	const y0 = useParallax(scrollYProgress, -10 * 18);
	const y1 = useParallax(scrollYProgress, -9 * 18);
	const y2 = useParallax(scrollYProgress, -8 * 18);
	const y3 = useParallax(scrollYProgress, -7 * 18);
	const y4 = useParallax(scrollYProgress, -6 * 18);
	const y5 = useParallax(scrollYProgress, -5 * 18);
	const y6 = useParallax(scrollYProgress, -4 * 18);
	const y7 = useParallax(scrollYProgress, -3 * 18);
	const y8 = useParallax(scrollYProgress, -2 * 18);
	const y9 = useParallax(scrollYProgress, -1 * 18);
	const y10 = useParallax(scrollYProgress, 0 * 18);
	const y11 = useParallax(scrollYProgress, 1 * 18);
	const y12 = useParallax(scrollYProgress, 2 * 18);
	const y13 = useParallax(scrollYProgress, 3 * 18);
	const y14 = useParallax(scrollYProgress, 4 * 18);
	const y15 = useParallax(scrollYProgress, 5 * 18);
	const y16 = useParallax(scrollYProgress, 6 * 18);
	const y17 = useParallax(scrollYProgress, 7 * 18);
	const y18 = useParallax(scrollYProgress, 8 * 18);
	const y19 = useParallax(scrollYProgress, 9 * 18);
	const yValues = [
		y0,
		y1,
		y2,
		y3,
		y4,
		y5,
		y6,
		y7,
		y8,
		y9,
		y10,
		y11,
		y12,
		y13,
		y14,
		y15,
		y16,
		y17,
		y18,
		y19,
	];

	// Generate the dot matrix as a memoized array
	const dots = useMemo(() => {
		return Array.from({ length: numRows }).flatMap((_, row) => {
			const y = yValues[row];
			return Array.from({ length: numCols }).map((_, col) => (
				<motion.div
					key={`dot-${row}-${col}`}
					className={styles.dotMatrixDot}
					style={{
						gridRow: row + 1,
						gridColumn: col + 1,
						width: dotSize,
						height: dotSize,
						y,
					}}
				/>
			));
		});
	}, [numRows, numCols, yValues]);

	return (
		<div className={styles.dotMatrixBackground}>
			<div className={styles.dotMatrixGrid}>
        {dots}
      </div>
		</div>
	);
}
