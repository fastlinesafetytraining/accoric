import React from "react";
import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "@components/UI";
import styles from "@styles/pages/home.module.scss";

export default function index() {
	return (
		<section className={styles.heroSection}>
			<div className={styles.heroContainer}>
				<div className={styles.heroContent}>
					<h1>
						<span className={styles.heroTitle__first}>All Your </span>
						<br />
						<span className={styles.heroTitle__highlight}>CERTIFICATES </span>
						<br />
						<span className={styles.heroTitle__last}>
							Stored Into One Location
						</span>
					</h1>
					<div className={styles.heroButtons}>
						<PrimaryButton
							title='See Pricing for Accoric Management'
							href='/pricing'
						>
							See Pricing
						</PrimaryButton>
						<SecondaryButton
							title='Learn more about Accoric Management and their benefits'
							href='/accoric-management'
						>
							Learn More About Accoric Management
						</SecondaryButton>
					</div>
				</div>
				<div className={styles.heroImage}>
					<Image
						width={449}
						height={500}
						src='/Images/accoric-dashcard-mockup.webp'
						alt='Accoric Dashcard Link Showing all certifications on a Phone Mockup'
					/>
				</div>
			</div>
		</section>
	);
}
