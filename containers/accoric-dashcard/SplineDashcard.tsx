import React from "react";
import Spline from "@splinetool/react-spline";
import styles from "@styles/pages/accoricDashcard.module.scss";

export default function SplineDashcard() {
	return (
		<div className={styles.accoricDashcard__splineContainer}>
			<Spline scene={process.env.SPLINE_DASHCARD_SCENE_ID as string} />
		</div>
	);
}
