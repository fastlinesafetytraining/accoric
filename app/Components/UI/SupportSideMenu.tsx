"use client";
import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import supportMenu from "@/libs/utils/conts/routes";
import styles from "@styles/component.module.scss";

export default function SupportSideMenu() {
	const pathname = usePathname();

	useEffect(() => {
		if (pathname) {
			document.querySelectorAll(`.${styles.supportSidebar__nav} a`).forEach((link) => {
				if (link.getAttribute("href")?.includes(pathname)) {
					link.classList.add(styles.active);
				} else {
					link.classList.remove(styles.active);
				}
			});
		}
	}, [pathname])

	return (
		<aside className={styles.supportSidebar}>
			<nav className={styles.supportSidebar__nav}>
				{supportMenu.map((section, index) => (
					<div key={index}>
						<h3>{section.sectionTitle}</h3>
						<ul>
							{section.sectionItems.map((item, itemIndex) => (
								<li key={itemIndex}>
									<Link href={item.link}>{item.title}</Link>
								</li>
							))}
						</ul>
					</div>
				))}
			</nav>
		</aside>
	);
}
