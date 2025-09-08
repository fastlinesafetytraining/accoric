import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { Divider } from "antd";
import { ReadTime, SharePage } from "@/Components/UI";
import { FaAngleLeft } from "react-icons/fa";
import getPostMetaData from "@/libs/utils/getPostMetaData";
import Markdown from "markdown-to-jsx";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import styles from "@/styles/pages/blog.module.scss";
import { PostMetaDataProps } from "@/types/PostMetaDataProps";

export const generateStaticParams = async () => {
	const posts = getPostMetaData();
	return posts.map((post) => ({
		slug: post.slug,
	}));
};

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}) {
	const { slug } = await params;
	const paramPost = await getPostMetaData().find((post) => post.slug === slug);

	if (!paramPost) {
		return notFound();
	}

	const metadata: Metadata = {
		title: `${paramPost.title} | Blog | Accoric`,
		description: paramPost.excerpt,
		openGraph: {
			title: `${paramPost.title} | Blog | Accoric`,
			description: paramPost.excerpt,
			images: [paramPost.image],
		},
		twitter: {
			title: `${paramPost.title} | Blog | Accoric`,
			description: paramPost.excerpt,
			images: [paramPost.image],
		},
	};

	return metadata;
}

function generateJsonLd({ paramPost }: { paramPost: PostMetaDataProps }) {
	return {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: paramPost.title,
		datePublished: paramPost.date,
		dateModified: paramPost.date,
		author: paramPost.author,
		image: paramPost.image,
		genre: paramPost.tag,
		url: `https://accoric.com/blog/${paramPost.slug}`,
		description: paramPost.excerpt,
		articleBody: paramPost.content,
		publisher: {
			"@type": "Organization",
			name: "Accoric",
			logo: {
				"@type": "ImageObject",
				url: "https://accoric.com/logo.png",
			},
		},
	};
}

export default async function PostPage({
	params,
}: {
	params: { slug: string };
}) {
	const { slug } = await params;
	const paramPost = await getPostMetaData().find((post) => post.slug === slug);

	if (!paramPost) {
		return notFound();
	}

	return (
		<div className={styles.blogPostPage}>
			<article className={styles.blogPostPage__article}>
				<Script
					id='blog-post-schema'
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(generateJsonLd({ paramPost })),
					}}
				/>
				<Link
					href='/blog'
					aria-label='Back to Blog Posts Page'
					className={styles.blogPostPage__backButton}
				>
					<FaAngleLeft /> Back to Blog Posts
				</Link>
				{paramPost.tag && (
					<span className={styles.blogPostPage__tag}>{paramPost.tag}</span>
				)}
				<h1 className={styles.blogPostPage__title}>{paramPost.title}</h1>
				<h2 className={styles.blogPostPage__subtitle}>{paramPost.subtitle}</h2>
				<Divider style={{ margin: "0" }} />
				<p className={styles.blogPostPage__meta}>
					<span>Published On: <b>{paramPost.date}</b></span>
					<span>Created By: <b>{paramPost.author}</b></span>
					<span>Read Time: <ReadTime>{paramPost.content}</ReadTime></span>
				</p>
				<Divider style={{ margin: "0" }} />
				<Image
					src={paramPost.image}
					alt={paramPost.imageAlt}
					width={1000}
					height={1000}
				/>
				<Markdown className={styles.blogPostPage__content}>
					{paramPost.content}
				</Markdown>
				<Divider />
				<div className={styles.blogPostPage__shareButtons}>
					Share: <SharePage />
				</div>
				<Divider />
			</article>
		</div>
	);
}
