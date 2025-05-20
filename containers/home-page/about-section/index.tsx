import React from "react";
import Image from "next/image";
import styles from "@styles/pages/home.module.scss";

export default function index() {
	return (
		<section className={styles.aboutAccoricSection}>
			<h2>
				About <span className={styles.headingHighlight}>Accoric</span>
			</h2>
			<div className={styles.aboutAccoricContainer}>
				<div className={styles.aboutAccoricContent}>
					<p>
						<span>Accoric</span> is dedicated to revolutionizing construction
						certification tracking and personnel management. Founded on the
						principles of efficiency, accuracy, and security, we understand the
						unique challenges faced by the construction industry in maintaining
						compliance and managing a skilled workforce.
					</p>
					<p>
						<span>Our platform</span> is designed to streamline these critical
						processes, providing a centralized solution for tracking
						certifications, managing employee information, and ensuring project
						readiness. We empower construction companies to reduce
						administrative burdens, minimize risks associated with expired
						credentials, and ultimately focus on building success.
					</p>
				</div>
				<div className={styles.aboutAccoricImageContainer}>
					<Image
						width={600}
						height={600}
						src='/Images/commercial-supervisor-using-accoric.webp'
						alt='Commercial supervisor using accoric management software on his phone'
						className={styles.aboutAccoricImage_large}
					/>
					<div className={styles.feature__one}>
						<p>Advance Scheduling</p>
					</div>
					<div className={styles.feature__two}>
						<p>Certificate Tracking</p>
					</div>
					<div className={styles.feature__three}>
						<p>Improved Efficiency</p>
					</div>
					<Image
						width={768}
						height={432}
						src='/Images/checking-current-certifications.webp'
						alt='Checking current certifications using accoric NFC Dashcard'
						className={styles.aboutAccoricImage_small}
					/>
				</div>
			</div>
		</section>
	);
}
