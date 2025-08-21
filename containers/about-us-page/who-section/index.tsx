import React from "react";
import Image from "next/image";
import styles from "@styles/pages/aboutUs.module.scss";

export default function index() {
	return (
		<section className={styles.section_highlight} aria-label='About Accoric'>
			<div className={styles.aboutUs__bio}>
				<div
					className={styles.aboutUs__bio__imageContainer}
					aria-label='Accoric Bio Image Container'
				>
					<Image
						src='/images/accoric-about-us-bio.webp'
						width={1120}
						height={1120}
						alt='Accoric showing its innovative Accoric Management software to construction company'
					/>
				</div>
				<div className={styles.aboutUs__bio__content}>
					<h2>
						<span className={styles.site_highlight_title}>Who</span> we are?
					</h2>
					<p>
						At <span>Accoric</span>, we have developed a solution specifically
						for companies with a large workforce. Our goal is to provide a
						straightforward way to keep track of your fleet&apos;
						certifications, helping you avoid unexpected expirations.
					</p>
					<p>
						We are <span>committed</span> to revolutionizing how companies
						manage their certifications and compliance requirements. Our focus
						is on simplifying certification tracking while ensuring maximum
						security and efficiency.
					</p>
					<p>
						Our team of <span>experienced professionals</span> is ready to
						assist you in managing your certifications and compliance
						effectively.
					</p>
				</div>
			</div>
		</section>
	);
}
