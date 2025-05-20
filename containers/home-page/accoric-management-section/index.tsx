import React from "react";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";
import styles from "@styles/pages/home.module.scss";

export default function index() {
	return (
		<section className={styles.accoricManagementSection}>
			<div className={styles.accoricManagementContainer}>
				<div className={styles.accoricManagementContent}>
					<h2>
						<span className={styles.headingHighlight}>Accoric</span>
						<br />
						Management
					</h2>
					<p>
						Certification tracking software, but we set up and monitor your
						account for you.
					</p>
					<div className={styles.accoricManagementFeatures}>
						<h3>Key Capabilities</h3>
						<div className={styles.accoricManagementFeature}>
							<h4>We Do The Setup</h4>
							<p>
								We digitize and upload your documents, so all you have to do is
								sign in.
							</p>
						</div>
						<div className={styles.accoricManagementFeature}>
							<h4>Email Notifications</h4>
							<p>
								Stay on top of employees&apos; expired and soon-to-be expired
								certifications via email reminders.
							</p>
						</div>
						<div className={styles.accoricManagementFeature}>
							<h4>Employee ID Badging</h4>
							<p>
								Sync employees&apos; certification information to an ID card.
								Scan the card and digitally view certifications from anywhere.
							</p>
						</div>
						<div className={styles.accoricManagementFeature}>
							<h4>Spreadsheet Friendly</h4>
							<p>View certification issue and expiration dates at a glance.</p>
						</div>
						<a
							aria-label='Learn more about Accoric Management'
							href='/accoric-management'
						>
							Learn More <FaArrowUp rotate={45} />
						</a>
					</div>
				</div>
				<div className={styles.accoricManagementImage}>
					<Image
						width={600}
						height={600}
						src='/Images/accoric-management-sample.webp'
						alt='Accoric Management Software being used on Laptop mockup'
					/>
				</div>
			</div>
		</section>
	);
}
