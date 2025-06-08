import React from "react";
import styles from "@styles/pages/accoricDashcard.module.scss";

export default function WhoIsItFor() {
	return (
		<section id="whoIsItFor" className={styles.accoricDashcard___info__whoIsItFor}>
			<div className={styles.accoricDashcard__sticky}>
                <div className={styles.accoricDashcard__content}>
                    <h2>Who is it For?</h2>
                    <p>
                        Whether you&apos;re a union tradesperson, foreman, or apprentice,
                        Personal DashCard™ is your personal safeguard against missed renewals and
                        costly job delays.
                    </p>
                </div>
			</div>
		</section>
	);
}
