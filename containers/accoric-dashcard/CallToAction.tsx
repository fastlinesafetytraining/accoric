import React from "react";
import { Button, Form, Input } from "antd";
import styles from "@styles/pages/accoricDashcard.module.scss";

export default function CallToAction() {
	return (
		<section id="register" className={styles.accoricDashcard__callToAction}>
			<div className={styles.accoricDashcard__sticky}>
				<div className={styles.accoricDashcard__content}>
					<h2>Limited Beta Launch begins Summer 2025</h2>
					<p>Get early access - be one of the first to secure your Personal DashCard™.</p>
				</div>
				<div className={styles.accoricDashcard__content}>
                    <h2>Sign up for the beta launch</h2>
					<Form className={styles.accoricDashcard__callToAction__form} action='/send-email'>
						<Input
							variant='filled'
							type='email'
							placeholder='Enter your email'
						/>
						<Button size='large'>Get Early Access</Button>
					</Form>
				</div>
			</div>
		</section>
	);
}
