import React from "react";
import { VideoPlayer } from "@components/UI";
import styles from "@styles/pages/accoricManagement.module.scss";

export default function VideoSec() {
	return (
		<section className={styles.accoricManagement__video}>
			<h2>Never miss a certification deadline again</h2>
			<p>
				Save time and money by automating your certification reminders.
				<br />A solution to make sure that your fleet is always compliant and
				reduce project fallbacks
			</p>
			<VideoPlayer
				ariaLabel='A video showing expired certification liability'
				src='/Videos/expired-certification-liability.mp4'
			/>
		</section>
	);
}
