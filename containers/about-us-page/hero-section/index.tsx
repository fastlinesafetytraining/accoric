import React from "react";
import { CompanyStats } from "@components/UI";
import styles from "@styles/pages/aboutUs.module.scss";

export default function index() {
	return (
		<section
			aria-label='About Us Hero Section'
			className={styles.aboutUs__hero}
		>
			<div className={styles.aboutUs__hero__content}>
				<h1>About Us</h1>
				<p className={styles.aboutUs__hero__subtitle}>
					Simplifying certification tracking while ensuring
					<br /> maximum security and efficiency
				</p>
				<CompanyStats />
			</div>
			<div className={styles.aboutUs__hero__background} />
		</section>
	);
}
