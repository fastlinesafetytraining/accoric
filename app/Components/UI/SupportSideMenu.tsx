"use client";
import { useEffect, useState } from "react";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { Drawer, Button } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import supportMenu from "@/libs/utils/conts/routes";
import styles from "@styles/component.module.scss";



export default function SupportSideMenu() {
	const pathname = usePathname();
	const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
	const [menuActive, setMenuActive] = useState(false);
	
	const DropdownMenu = () => {
	
		return (
			<>
			<Button icon={<FaBars />} onClick={() => setMenuActive(true)}>
				Menu
			</Button>
			<Drawer height={`70%`} placement="bottom" open={menuActive} onClose={() => setMenuActive(false)}>
				<DesktopMenu />
			</Drawer>
			</>
		)
	}
	
	
	const DesktopMenu = () => {
		return (
			<>
				<nav className={styles.supportSidebar__nav}>
					{supportMenu.map((section, index) => (
						<div key={index}>
							<h3>{section.sectionTitle}</h3>
							<ul>
								{section.sectionItems.map((item, itemIndex) => (
									<li onClick={() => setMenuActive(false)} key={itemIndex}>
										<Link href={item.link}>{item.title}</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</nav>
			</>
		)
	}

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

	useEffect(() => {
		const handleWindowResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		handleWindowResize();

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	return (
		<aside className={styles.supportSidebar}>
			{isMobile ? <DropdownMenu /> : <DesktopMenu />}
		</aside>
	);
}
