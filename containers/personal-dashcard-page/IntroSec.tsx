"use client";
import React from "react";
import { SplineScene } from "@/Components/UI";
import styles from "@styles/pages/personalDashcard.module.scss";
import SiteButton from "@/Components/UI/SiteButton";

export default function IntroSec() {
	return (
		<section id='introduction' className={styles.introSec}>
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
						<SiteButton type='secondary' href='/signup' title='Sign Up'>
							Sign Up
						</SiteButton>
					</div>
				</div>
				<div className={styles.introSec__content__assetContainer}>
					<SplineScene
						sceneId='https://prod.spline.design/9vosgMmaV6tS5Vqv/scene.splinecode'
						alt='Construction worker holding a child with arms looking at the construction site background'
						fallbackImage='/Images/personal-dashcard/hero-image.png'
						width={600}
						height={600}
					/>
				</div>
			</div>
		</section>
	);
}
