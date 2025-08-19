import React from "react";
import Link from "next/link";
import { supportMenu } from "@/libs/utils/const/routes";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Personal DASHcard™ Support | Support | Accoric",
	description: "Learn how to use your Personal DASHcard™ with Accoric.",
};

export default function page() {
	return (
		<>
			<h1>Personal DASHcard™ Support</h1>
			<ul>
				{supportMenu.find(section => section.sectionKey === "personal-dashcard")?.sectionItems.map((item, index) => (
					<li key={index}>
						<Link href={item.link}>{item.title}</Link>
					</li>
				))}
			</ul>
		</>
	);
}
