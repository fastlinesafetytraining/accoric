import React from "react";
import Image from "next/image";
import styles from "@styles/pages/aboutUs.module.scss";

export default function index() {
	return (
		<section className={styles.section_highlight} aria-label='Accoric Promise'>
			<div className={styles.aboutUs__promise}>
				<div className={styles.aboutUs__promise__content}>
					<h2>
						Our <span className={styles.site_highlight_title}>Promise</span>
					</h2>
					<p>
						Our promise is to provide you with the{" "}
						<span>best possible service and support.</span> We will help you get
						started with your Accoric Management account in no time.
					</p>
					<p>
						We will also provide you with a dashboard to view your
						certifications and compliance requirements.
					</p>
				</div>
				<div
					className={styles.aboutUs__promise__imageContainer}
					aria-label='Accoric Promise Image Container'
				>
					<Image
						src='/Images/trustworthy-software-for-construction-companies.webp'
						width={1120}
						height={1120}
						alt='Accoric has a promise to its customers, to provide the best possible service and support.'
					/>
				</div>
			</div>
		</section>
	);
}
