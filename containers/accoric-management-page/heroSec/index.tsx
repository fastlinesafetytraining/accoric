import React from "react";
import styles from "@styles/pages/accoricManagement.module.scss";
import { SiteButton } from "@/Components/UI";

export default function HeroSec() {
	return (
		<section className={styles.accoricManagement__header}>
			<h1>Accoric Management</h1>
			<p>
				A management system for your business.
				<br /> Track your employees certifications, training, and more.
			</p>
			<SiteButton href="#pricing" title="Get Started" type="primary">
				Get Started
			</SiteButton>
		</section>
	);
}
