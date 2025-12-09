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
		<>
		
		<section id='introduction' aria-label='Introduction' className={styles.introSec}>

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

					   <a href="https://apps.apple.com/us/app/personal-dashcard/id6747406123" target="_blank" className={styles.introSec__playStore}>
							<img src="images/personal-dashcard/apple_play_store.png"></img>
						</a>
						
						<a href="https://play.google.com/store/apps/details?id=com.accoric.dashcard" target="_blank" className={styles.introSec__playStore}>
							<img src="images/personal-dashcard/google_play_store.png"></img>
						</a>

					</div>

					{/* <div className={styles.introSec__content__buttonContainer}>

						<SiteButton
							type='primary'
							href='/sign-up/personal-dashcard'
							title='Sign Up'
						>
							Sign Up
						</SiteButton>
						<SiteButton
							type='secondary'
							href='#pricing'
							title='Pricing'
						>
							Pricing
						</SiteButton>
					</div> */}
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

			<div className={styles.introSec__background}>
				<img src="/images/personal-dashcard/personal_dashcard_logo_new.png"></img>
					
			</div>
		</section>
		
		</>
	);
}
