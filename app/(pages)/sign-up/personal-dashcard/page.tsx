import React from "react";
import Image from "next/image";
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
			<div className={styles.signUpPage__content}>
				<h1>Sign Up for the Personal DASHcard</h1>
				<p>Be a part of the future of Construction Card Management</p>
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
