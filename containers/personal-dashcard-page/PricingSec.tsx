import React from "react";
import styles from "@/styles/pages/personalDashcard.module.scss";
import { SiteButton } from "@/Components/UI";

export default function PricingSec() {
	return (
		<section id='pricing' aria-label='Pricing' className={styles.pricingSec}>
			<div className={styles.pricingSec__content}>
				<h2>Pricing</h2>
				<div className={styles.pricingSec__content__cardContainer}>
					<div
						className={`${styles.pricingSec__content__cardContainer__card} ${styles.pricingSec__content__cardContainer__card}`}
					>
						<div
							className={
								styles.pricingSec__content__cardContainer__card__header
							}
						>
							<h3>Personal Dashcard <br/> Standard Subscription</h3>
							<h4>
								10<span>99 /Month</span>
								<br />
							</h4>
						</div>
						<div
							className={styles.pricingSec__content__cardContainer__card__body}
						>
							<ul>
								<li>Physical Card included in your subscription</li>
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
			</div>
		</section>
	);
}
