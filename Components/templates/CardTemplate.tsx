"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ClickSparks } from "@/Components/UI";
import { PostMetaDataProps } from "@/types/PostMetaDataProps";
import styles from "@/styles/pages/blog.module.scss";

export default function BlogCardTemplate({
	post,
}: {
	post: PostMetaDataProps;
}) {
	const characterLimit = 150;

	const postDescription =
		post.excerpt?.length > characterLimit
			? post.excerpt.slice(0, characterLimit) + "..."
			: post.excerpt;

	return (
		<motion.div
			className='blogCard'
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
		>
			<ClickSparks
				sparkColor='#fff'
				sparkSize={10}
				sparkRadius={60}
				sparkCount={8}
				duration={400}
				easing='ease-out'
				extraScale={1.0}
			>
				<div className={styles.blogCard}>
					<Image
						className={styles.blogCard__image}
						src={post.image}
						alt={post.imageAlt}
						width={363}
						height={272}
					/>
					<Link
						href={`/blog/${post.slug}`}
						aria-label={`Read more about ${post.title}`}
						className={styles.blogCard__content}
					>
						<h3 className={styles.blogCard__content__title}>{post.title}</h3>

						<p className={styles.blogCard__content__description}>
							{postDescription}
						</p>
					</Link>
				</div>
			</ClickSparks>
		</motion.div>
	);
}
