import React from "react";
import { PastClients } from "@/Components/UI";
import styles from "@styles/pages/home.module.scss";

export default function index() {
	return (
		<section className={styles.clientsSection}>
			<h2>Trusted by leading companies</h2>
			<p>
				We are proud to be trusted by leading companies in the construction
				industry.
			</p>
			<PastClients />
		</section>
	);
}
