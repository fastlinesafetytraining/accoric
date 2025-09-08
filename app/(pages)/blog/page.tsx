import React from "react";
import type { Metadata } from "next";
import { AllPost } from "@/containers/blog-page";
import styles from "@/styles/pages/blog.module.scss";

export const metadata: Metadata = {
	title: "Blog | Accoric",
	description:
		"Accoric Blog Page filled with helpful tips and tricks for construction companies. Articles are written by our team of experts and are updated regularly.",
};

export default function BlogPage() {
	return (
		<div className={styles.blogMainPage}>
			<div className={styles.blogMainPage__header}>
				<h1>Latest Blog Posts</h1>
				<p>Stay up to date with the latest news and insights from our team.</p>
			</div>
			<AllPost />
		</div>
	);
}
