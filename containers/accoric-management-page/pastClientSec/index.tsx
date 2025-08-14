import React from "react";
import { PastClients } from "@components/UI";
import styles from "@styles/pages/accoricManagement.module.scss";

export default function PastClientSec() {
	return (
		<section className={styles.accoricManagement__pastClients}>
			<h2>
				Join the many companies that have trusted us to manage their workforce.
			</h2>
			<PastClients />
		</section>
	);
}
