import React from "react";
import Link from "next/link";
import { supportMenu } from "@/libs/utils/const/routes";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Accoric Management Support | Support | Accoric",
	description: "Learn how to use Accoric Management with Accoric.",
};

export default function page() {
	return (
		<>
			<h1>Accoric Management Support</h1>
			<ul>
				{supportMenu.find(section => section.sectionTitle === "Explore Topics for Accoric Management Support")?.sectionItems.map((item, index) => (
					<li key={index}>
						<Link href={item.link}>{item.title}</Link>
					</li>
				))}
			</ul>
		</>
	);
}
