"use client"
import React, { useEffect, useState, useMemo } from "react";
import { motion } from "motion/react";
import styles from "@styles/pages/personalDashcard.module.scss";

export default function SideBarAnchor() {
	const items = useMemo(() => [
		{
			key: "1",
			href: "#introduction",
			title: "Introduction",
		},
		{
			key: "2",
			href: "#yourCard",
			title: "Your Card",
		},
		{
			key: "3",
			href: "#yourCertification",
			title: "Your Certification",
		},
		{
			key: "4",
			href: "#accessFromAnywhere",
			title: "Access Anywhere",
		},
		{
			key: "5",
			href: "#reminders",
			title: "Reminders",
		},
		{
			key: "6",
			href: "#alwaysSync",
			title: "Always Sync",
		},
		{
			key: "7",
			href: "#register",
			title: "Register",
		},
	], []);

	const [activeSection, setActiveSection] = useState<string>("");

	useEffect(() => {
		const sectionIds = items.map((item) => item.href.replace("#", ""));
		const sections = sectionIds
			.map((id) => document.getElementById(id))
			.filter(Boolean) as HTMLElement[];

		if (sections.length === 0) return;

		const observer = new window.IntersectionObserver(
			(entries) => {
				// Find the entry that is most in view
				const visible = entries.filter((entry) => entry.isIntersecting);
				if (visible.length > 0) {
					// Pick the one closest to the top
					const topMost = visible.reduce((prev, curr) =>
						prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr
					);
					setActiveSection(topMost.target.id);
				}
			},
			{
				root: null,
				rootMargin: "0px 0px -60% 0px", // Trigger when section is 40% from top
				threshold: 0.2,
			}
		);

		sections.forEach((section) => observer.observe(section));

		return () => {
			sections.forEach((section) => observer.unobserve(section));
		};
	}, [items]);

	return (
		<div className={styles.personalDashcard__sidebar}>
			<div className={styles.personalDashcard__sidebar__sticky}>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{}}
					transition={{ staggerChildren: 0.1 }}
				>
					{items.map((item) => {
						const sectionId = item.href.replace("#", "");
						const isActive = activeSection === sectionId;
						return (
							<motion.a
								variants={{
									hidden: { opacity: 0, y: 300 },
									visible: { opacity: 1, y: 0 },
								}}
								transition={{ duration: 0.5 }}
								className={
									styles.personalDashcard__sidebar__sticky__item +
									(isActive ? " " + styles.personalDashcard__sidebar__sticky__item__active : "")
								}
								href={item.href}
								key={item.key}
							>
								<span>{item.title}</span>
							</motion.a>
						);
					})}
				</motion.div>
			</div>
		</div>
	);
}
