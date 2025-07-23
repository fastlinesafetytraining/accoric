"use client";
import React, { useMemo } from "react";
import styles from "@styles/pages/personalDashcard.module.scss";
import { motion, useScroll } from "motion/react";
import useParallax from "@/Components/hook/useParallax";

export default function PageBackground() {
	// Dot matrix settings
	const numRows = 80;
	const numCols = 10;
	const dotSize = 5;

	const parallaxSpeed = -20;

	// Parallax setup
	const { scrollYProgress } = useScroll();
	
	// Call useParallax a fixed number of times (20 rows)
	const y0 = useParallax(scrollYProgress, -10 * parallaxSpeed);
	const y1 = useParallax(scrollYProgress, -9 * parallaxSpeed);
	const y2 = useParallax(scrollYProgress, -8 * parallaxSpeed);
	const y3 = useParallax(scrollYProgress, -7 * parallaxSpeed);
	const y4 = useParallax(scrollYProgress, -6 * parallaxSpeed);
	const y5 = useParallax(scrollYProgress, -5 * parallaxSpeed);
	const y6 = useParallax(scrollYProgress, -4 * parallaxSpeed);
	const y7 = useParallax(scrollYProgress, -3 * parallaxSpeed);
	const y8 = useParallax(scrollYProgress, -2 * parallaxSpeed);
	const y9 = useParallax(scrollYProgress, -1 * parallaxSpeed);
	const y10 = useParallax(scrollYProgress, 0 * parallaxSpeed);
	const yValues = useMemo(() => [y0, y1, y2, y3, y4, y5, y6, y7, y8, y9, y10], [y0, y1, y2, y3, y4, y5, y6, y7, y8, y9, y10]);

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
