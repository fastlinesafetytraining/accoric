"use client"
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useGetSectionAttributes } from "@/Components/hook/useGetSectionAttributes";
import { useInterSectionObserver } from "@/Components/hook/useInterSectionObserver";
import styles from "@styles/pages/personalDashcard.module.scss";

export default function SideBarAnchor() {
	const items = useGetSectionAttributes();
	const activeSection = useInterSectionObserver(items);
	const [shouldAnimate, setShouldAnimate] = useState(false);

	useEffect(() => {
		if (items.length > 0) {
			setShouldAnimate(true);
		}
	}, [items]);

	return (
		<div className={styles.personalDashcard__sidebar}>
			<div className={styles.personalDashcard__sidebar__sticky}>
				<motion.div
					initial="hidden"
					animate={shouldAnimate ? "visible" : "hidden"}
					variants={{
						hidden: {},
						visible: {
							transition: {
								staggerChildren: 0.25
							}
						}
					}}
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
								<span>{item.name}</span>
							</motion.a>
						);
					})}
				</motion.div>
			</div>
		</div>
	);
}
