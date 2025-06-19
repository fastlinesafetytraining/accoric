"use client";
import React, { useState, useEffect } from "react";
import hasWebGlSupport from "@/libs/utils/checkWebGl";
import styles from "@styles/pages/accoricDashcard.module.scss";
import Spline from "@splinetool/react-spline";

export default function SplineDashcard() {
	const [isWebGLSupported, setIsWebGLSupported] = useState(false);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		setIsWebGLSupported(hasWebGlSupport());
		setLoading(false);
	}, []);

	if (isLoading) {
		return (
			<div className={styles.accoricDashcard__splineContainer}>Loading...</div>
		);
	}

	return (
		<div className={styles.accoricDashcard__splineContainer}>
			{isWebGLSupported ? (
            	<Spline scene={process.env.NEXT_PUBLIC_SPLINE_DASHCARD_SCENE_ID as string} />
		) : (
				<video
					autoPlay
					loop
					muted
				>
					<source
						src='/videos/accoric-dashcard-fallback-video.mp4'
						type='video/mp4'
					/>
				</video>
			)}
		</div>
	);
}
