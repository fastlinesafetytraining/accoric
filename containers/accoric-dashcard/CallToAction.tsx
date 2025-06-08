import React from "react";
import { DashcardForm } from "@components/UI";
import styles from "@styles/pages/accoricDashcard.module.scss";

export default function CallToAction() {

	return (
		<section id="register" className={styles.accoricDashcard__info__callToAction}>
			<div className={styles.accoricDashcard__sticky}>
				<div className={styles.accoricDashcard__content}>
                    <h2>Sign up for the beta launch!</h2>
					<h3>Limited Beta Launch begins Summer 2025!</h3>
					<p>Get early access - be one of the first to secure your Personal DashCard™.</p>
					<DashcardForm />
				</div>
			</div>
		</section>
	);
}
