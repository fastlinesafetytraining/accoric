import React from "react";
import Image from "next/image";
import { LuArrowUp } from "react-icons/lu";
import styles from "@styles/pages/home.module.scss";

export default function index() {
	return (
		<section className={styles.dashcardSection}>
			<div className={styles.dashcardContainer}>
				<div className={styles.dashcardImage}>
					<Image
						width={600}
						height={600}
						src='/images/accoric-dashcard-sample.webp'
						alt='Accoric Management Software being used on Laptop mockup'
					/>
				</div>
				<div className={styles.dashcardContent}>
					<h2>
						<span className={styles.headingHighlight}>Dash</span>Card
					</h2>
					<p>All Your Certifications. One Card.</p>
					<div className={styles.dashcardFeatures}>
						<h3>Key Capabilities</h3>
						<div className={styles.dashcardFeature}>
							<h4>Certifications Digitized</h4>
							<p>
								We are proud to be trusted by leading companies around the
								world.
							</p>
						</div>
						<div className={styles.dashcardFeature}>
							<h4>Expiration Date Monitoring</h4>
							<p>
								Know what certifications are expiring, so you can plan
								accordingly.
							</p>
						</div>
						<div className={styles.dashcardFeature}>
							<h4>Share Certifications</h4>
							<p>
								Share your certifications with employers and stakeholders, right
								from your phone.
							</p>
						</div>
						<div className={styles.dashcardFeature}>
							<h4>NFC Scanning</h4>
							<p>
								Scan a worker&apos;s ID card to view their certifications using
								the back of your smartphone.
							</p>
						</div>
						<a
							aria-label='Learn more about Accoric Dashcard'
							href='/accoric-dashcard'
						>
							Learn More <LuArrowUp rotate={45} />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
