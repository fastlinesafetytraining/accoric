import React from "react";
import styles from "@/styles/pages/personalDashcard.module.scss";
import { SiteButton } from "@/Components/UI";

export default function PricingSec() {

	return (
		<section id='pricing' className={styles.pricingSec}>
			<div className={styles.pricingSec__content}>
				<h2>Pricing</h2>
				<div className={styles.pricingSec__content__cardContainer}>
					<div
						className={`${styles.pricingSec__content__cardContainer__card} ${styles.pricingSec__content__cardContainer__card__monthly}`}
					>
						<div

						>
							<h3>Monthly Subscription</h3>
							<h4
							>
								$10.99/month<br />
								<span>
									+ $25.00 One Time Card Issuance Fee
								</span>
							</h4>
						</div>

					<ul>
							<li>Access your certifications anytime, anywhere</li>
							<li>Text and email notifications</li>
							<li>Automatic expiration reminders</li>
							<li>Secure cloud storage for your credentials</li>
							<li>Easy sharing with employers and clients</li>
							<li>Simple, user-friendly dashboard</li>
							<li>Priority customer support</li>
							<li>Cancel Subscription Anytime</li>
						</ul>
						<SiteButton
							href='/sign-up/personal-dashcard'
							title='Sign Up'
							type='primary'
						>
							Sign Up
						</SiteButton>
					</div>
				</div>
			</div>
		</section>
	);
}
