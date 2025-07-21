import React from "react";
import Image from "next/image";
import styles from "@styles/pages/personalDashcard.module.scss";

export default function YourCertificationSec() {
	return (
		<section id='yourCertification' className={styles.yourCertificationSec}>
			<div className={styles.yourCertificationSec__content}>
				<div className={styles.yourCertificationSec__content__text}>
					<h2>Proof on Demand</h2>
					<p>
						A simple way to keep your certification in check. All stored digitally in the app, always ready when you need them. <br /> View, delete, and send them to anyone right from the app.
					</p>
				</div>
				<Image
					src='/images/personal-dashcard/certification-screen.png'
					width={600}
					height={600}
					alt='your certification'
					className={styles.yourCertificationSec__content__img}
				/>
			</div>
		</section>
	);
}
