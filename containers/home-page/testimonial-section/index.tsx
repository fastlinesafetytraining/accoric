import React from "react";
import Image from "next/image";
import testimonials from "@/libs/constants/testimonials";
import styles from "@styles/pages/home.module.scss";

export default function index() {
	return (
		<section className={styles.testimonialsSection}>
			<div className={styles.testimonialsContainer}>
				{testimonials.map((testimonial, index) => (
					<div className={styles.testimonial} key={index}>
						<div className={styles.testimonial__author}>
							<Image
								src={testimonial.companyLogo}
								alt={testimonial.companyName}
								width={50}
								height={50}
								className={styles.testimonial__author__logo}
							/>
							<h3>{testimonial.author}</h3>
						</div>
						<em className={styles.testimonial__quote}>{testimonial.quote}</em>
					</div>
				))}
			</div>
			<div className={styles.testimonialContent}>
				<Image
					width={150}
					height={150}
					src='/images/rating-stars.webp'
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
