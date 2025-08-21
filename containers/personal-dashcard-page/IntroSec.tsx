"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import hasWebGlSupport from "@/libs/utils/checkWebGl";
import Spline from "@splinetool/react-spline";
import styles from "@styles/pages/personalDashcard.module.scss";
import SiteButton from "@/Components/UI/SiteButton";

export default function IntroSec() {
	const [isWebGLSupported, setIsWebGLSupported] = useState(false);

	useEffect(() => {
		setIsWebGLSupported(hasWebGlSupport());
	}, []);

	return (
		<section id='introduction' className={styles.introSec}>
			<div className={styles.introSec__background}>
				{isWebGLSupported === true ? (
					<Spline
						scene={process.env.NEXT_PUBLIC_DASHCARD_SCENE_HERO as string}
					/>
				) : null}
			</div>
			<div className={styles.introSec__content}>
				<div className={styles.introSec__content__text}>
					<h1>
						You
						<br /> <span>Provide.</span>
						<br /> We
						<br /> <span>Protect.</span>
					</h1>
					<p>
						With NYC&apos;s first personal certification tracker,
						<br /> we&apos;re protecting what lets you work — and what you work
						for.
					</p>
					<div className={styles.introSec__content__buttonContainer}>
						<SiteButton
							type='secondary'
							href='/sign-up/personal-dashcard'
							title='Sign Up'
						>
							Sign Up
						</SiteButton>
					</div>
				</div>

				{isWebGLSupported === false ? (
					<div className={styles.introSec__content__assetContainer}>
						<Image
							src='/images/personal-dashcard/hero-image.png'
							alt='Construction worker holding a child with arms looking at the construction site background'
							width={600}
							height={600}
							sizes='(max-width: 768px) 400px'
						/>
					</div>
				) : null}
			</div>
		</section>
	);
}
