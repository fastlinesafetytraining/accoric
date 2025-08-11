import React from "react";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
import CardSignUpForm from "@/Components/UI/CardSignUpForm";
import styles from "@/styles/pages/signUp.module.scss";

export const metadata = {
	title: "Personal Dashcard Sign Up",
	description:
		"Sign up for an Accoric Dashcard account to track your spending, manage your budget, and earn rewards on every purchase. Get started in minutes!",
};

export default function PersonalDashcardSignUp() {
	return (
		<main className={styles.signUpPage}>
			<Toaster containerStyle={{ top: "100px" }} />
			<div className={styles.signUpPage__content}>
				<h1>Sign Up for the Personal DASHcard</h1>
				<h2>Nobody protects your certifications like you do.</h2>
				<p>
					For too long, certifications have been managed everywhere but with the
					people who actually use them. We’re changing that.
				</p>
				<p style={{ fontWeight: "bold" }}>
					Fill out the form to be the first to know when the Personal DASHcard™
					launches — and take control of your certifications from day one.
				</p>
				<CardSignUpForm />
			</div>
			<div className={styles.signUpPage__divider}></div>

			<Image
				src='/Images/personal-dashcard/construction-sign-up-for-accoric.webp'
				alt='Construction worker holding a child with arms looking at the construction site background'
				width={600}
				height={600}
				sizes='(max-width: 768px) 400px'
			/>
		</main>
	);
}
