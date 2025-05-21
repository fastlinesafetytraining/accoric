import React from "react";
import Image from "next/image";
import { SiteButton } from "@components/UI";
import { LuDollarSign, LuInfo } from "react-icons/lu";
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
						<SiteButton
							title='See Pricing for Accoric Management'
							href='/pricing'
							type='primary'
							icon={<LuDollarSign />}
						>
							See Pricing
						</SiteButton>
						<SiteButton
							title='Learn more about Accoric Management and their benefits'
							href='/accoric-management'
							type='secondary'
							icon={<LuInfo />}
						>
							See Accoric Management
						</SiteButton>
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
