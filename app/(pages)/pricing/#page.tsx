import React from "react";
import { Toaster } from "react-hot-toast";
import { FAQ, PastClients, CompanyStats } from "@components/UI";
// import { TbSquareRoundedCheckFilled } from "react-icons/tb";
import { faqItems } from "./page-data";
import type { Metadata } from "next";
import styles from "@styles/pages/pricing.module.scss";

export const metadata: Metadata = {
	title: "Pricing | Accoric",
	description:
		"Accoric offers a range of pricing options to suit your needs. Please contact us to discuss your requirements.",
};

export default function Page() {
	return (
		<main className={styles.pricing}>
			<Toaster />
			<section className={styles.pricing__header}>
				<h1>Pricing</h1>
				<p>
					We offer a <span>range of pricing</span> options to suit your needs.
				</p>
				<p>Please contact us to discuss your requirements.</p>
				<CompanyStats />
			</section>
			<div className={styles.pricing__content}>

				<section className={styles.pricing__clients}>
					<h2>
						Start tracking your workers&apos; <span>certifications</span>
					</h2>
					<p>
						Plus, we upload all of your data and create your account for you!
						All you do is sign in.
					</p>
					<PastClients />
				</section>
				<section className={styles.pricing__faq}>
					<FAQ items={faqItems} />
				</section>
			</div>
		</main>
	);
}
