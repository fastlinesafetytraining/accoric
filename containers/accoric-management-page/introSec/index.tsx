import React from "react";
import Image from "next/image";
import styles from "@styles/pages/accoricManagement.module.scss";

export default function IntroSec() {
	return (
		<section className={styles.accoricManagement__content__1}>
			<div className={styles.accoricManagement__content__1__text}>
				<h2>Involved in your company&apos;s compliance</h2>
				<p>
					From digitizing documents and creating your account for you, to
					reminding you of certification expirations, we have you covered. We
					also help ensure everyone has what they need while on the job.
				</p>
				<h2>Accoric Management</h2>
				<p>
					Centralizes your workforce&apos;s certifications, training, and more.
					Offers real-time certification verification with DashCards,
					streamlines renewal reminders with custom report generation, and
					provides valuable analytics via spreadsheet reports to identify
					potential gaps in training.
				</p>
			</div>
			<Image
				width={910}
				height={745}
				className={styles.accoricManagement__content__1__image}
				alt='A mockup example of accoric management on a desktop'
				src='/Images/accoric-desktop-mockup.webp'
			/>
		</section>
	);
}
