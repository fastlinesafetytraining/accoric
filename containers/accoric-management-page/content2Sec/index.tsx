import React from "react";
import Image from "next/image";
import styles from "@styles/pages/accoricManagement.module.scss";

export default function Content2Sec() {
	return (
		<section className={styles.accoricManagement__content__2}>
			<Image
				width={766}
				height={534}
				src='/Images/accoric-management-mockup.webp'
				alt='A mockup example of accoric management on a tablet device'
			/>
			<div className={styles.accoricManagement__content__2__text}>
				<h2>A Snapshot of your workforce</h2>
				<p>
					Easily monitor your employees&apos; certifications with a
					user-friendly dashboard. Access, edit, and issue certifications
					directly from the dashboard.
				</p>
				<h3>
					Wondering if your employees possess the required certifications for
					their roles?
				</h3>
				<p>
					Utilize the dashboard&apos;s search feature to quickly identify
					employees with the necessary certifications for their work.
				</p>
			</div>
		</section>
	);
}
