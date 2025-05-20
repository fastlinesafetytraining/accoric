import React from "react";
import Image from "next/image";
import { Avatar } from "antd";
import styles from "@styles/pages/home.module.scss";

export default function index() {
	return (
		<section className={styles.testimonialsSection}>
			<div className={styles.testimonialsContainer}>
				<div className={styles.testimonial}>
					<div className={styles.testimonial__author}>
						<h3>Justin A.</h3>
					</div>
					<em className={styles.testimonial__quote}>
						Accoric Management has empowered Related Services LLC to{" "}
						<b>proactively manage employee credentials</b> and{" "}
						<b>certification status</b>, a significant improvement. We highly
						recommend it.
					</em>
				</div>
				<div className={styles.testimonial}>
					<div className={styles.testimonial__author}>
						<Avatar
							alt='Champions Specialty'
							size={"large"}
							src='Images/client-logos/champion-scc-logo.webp'
						/>
						<h3>Amel H.</h3>
					</div>
					<em className={styles.testimonial__quote}>
						Accoric Management&apos;s capabilities have enabled Champion
						Painting&apos;s management team to bid and{" "}
						<b>pre-plan projects more efficiently</b> with{" "}
						<b>easy access to all employee training credentials</b>.
					</em>
				</div>
				<div className={styles.testimonial}>
					<div className={styles.testimonial__author}>
						<Avatar
							alt='Millbrook Fire'
							size={"large"}
							src='/Images/client-logos/millbrook-logo.webp'
						/>
						<h3>Nick D.</h3>
					</div>
					<em className={styles.testimonial__quote}>
						With Accoric Management&apos;s unparalleled safety management and
						proactive approach to certifications, we&apos;ve experienced
						significantly downtime prevention. It&apos;s an investment that{" "}
						<b>pays for itself in the first month!</b>
					</em>
				</div>
			</div>
			<div className={styles.testimonialContent}>
				<Image
					width={150}
					height={150}
					src='/Images/rating-stars.webp'
					alt='Rating Stars'
					className={styles.testimonial_stars}
				/>
				<h2>Testimonials</h2>
				<p>
					Discover why organizations across various industries trust Accoric to
					manage their employees certification and deliver tangible results.
				</p>
				<Image
					width={300}
					height={100}
					src='/svg/our-collaboration-solution.svg'
					alt='Collaboration'
				/>
			</div>
		</section>
	);
}
