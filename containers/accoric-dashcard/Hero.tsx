"use client";
import React from "react";
import { Button } from "antd";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import styles from "@styles/pages/accoricDashcard.module.scss";

export default function Hero(props: {className?: string}) {
	gsap.registerPlugin(SplitText);

	useGSAP(() => {
		SplitText.create(".SplitText", {
			type: "lines",
			onSplit(self) {
				gsap.from(self.lines, {
					duration: 1,
					x: 200,
					opacity: 0,
					stagger: 0.05,
				});
			}
		})
	}, []);

	return (
		<section id="introduction" className={`${styles.accoricDashcard__hero} ${props.className}`}>
			<div className={styles.accoricDashcard__sticky}>
				<div className={styles.accoricDashcard__content}>
					<h1>Personal DashCard™</h1>
					<p className='SplitText'>
						Your company doesn&apos;t own your certifications. <br /> You
						do—take control.
					</p>
				</div>
				<div className={styles.accoricDashcard__content}>
					<p className='SplitText'>
						Because your career moves with you—your certifications should too.
					</p>
					<p className='SplitText'>The Personal DashCard™ for the Pros.</p>
					<Button
						size='large'
						href='#callToAction'
						type='primary'
						title='Get Early Access to the DashCard'
					>
						Get Early Access
					</Button>
				</div>
			</div>
		</section>
	);
}
