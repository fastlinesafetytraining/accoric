import React from "react";
import Spline from "@splinetool/react-spline/next";
import { Metadata } from "next";
import styles from "@styles/pages/accoricDashcard.module.scss";

export const metadata: Metadata = {
	title: "Accoric Dashcard | Accoric",
	description: "Accoric Dashcard",
};

export default function Page() {
	return (
		<main className={styles.accoricDashcard}>
      <div className={styles.accoricDashcard__splineContainer}>
        <Spline
          scene='https://prod.spline.design/KURjrdKU-bE194jq/scene.splinecode'
        />
      </div>
				<section className={styles.accoricDashcard__header}>
					<h1 className={styles.accoricDashcard__header__h1}>
						<span>Accoric Product</span>
						<span>Accoric Product</span>
						<span>Accoric Product</span>
						<span>Accoric Product</span>
						<span>Accoric Product</span>
						<span>Accoric Product</span>
						<span>Accoric Product</span>
						<span>Accoric Product</span>
					</h1>
					<h2 className={styles.accoricDashcard__header__h2}>
						<span>Coming Soon...</span>
						<span>Coming Soon...</span>
						<span>Coming Soon...</span>
						<span>Coming Soon...</span>
						<span>Coming Soon...</span>
						<span>Coming Soon...</span>
						<span>Coming Soon...</span>
						<span>Coming Soon...</span>
					</h2>
				</section>
		</main>
	);
}
