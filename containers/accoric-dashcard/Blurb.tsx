import React from "react";
import styles from "@styles/pages/accoricDashcard.module.scss";

export default function Blurb() {
	return (
		<section id="conclusion" className={styles.accoricDashcard__info__blurb}>
			<div className={styles.accoricDashcard__sticky}>
				<div className={styles.accoricDashcard__content}>
					<h2>
						Built by the team behind Accoric Management 
					</h2>
					<p>
						Trusted by 400+ construction companies across the country
					</p>
				</div>
			</div>
		</section>
	);
}
