"use client";
import React from "react";
import CountUp from "react-countup";
import styles from "@styles/component.module.scss";

export default function CompanyStats() {
	return (
		<div className={styles.companyStats}>
			<div className={styles.companyStats__stat}>
				<CountUp className={styles.companyStats__stat__number} end={500} suffix="+" />
				<span className={styles.companyStats__stat__label}>
					Companies Served
				</span>
			</div>
			<div className={styles.companyStats__stat}>
				<CountUp className={styles.companyStats__stat__number} end={10000} suffix="+" />
				<span className={styles.companyStats__stat__label}>
					Certifications Tracked
				</span>
			</div>
			<div className={styles.companyStats__stat}>
				<CountUp className={styles.companyStats__stat__number} end={99} suffix="%" />
				<span className={styles.companyStats__stat__label}>
					Client Satisfaction
				</span>
			</div>
		</div>
	);
}
