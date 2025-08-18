"use client";
import { useEffect, useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import { Drawer } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import supportMenu from "@/libs/utils/const/routes";
import styles from "@styles/component.module.scss";

export default function SupportSideMenu() {
	const pathname = usePathname();
	const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
	const [menuActive, setMenuActive] = useState(false);
	
	const MobileDropdownMenu = () => {
	
		return (
			<>
			<button className={styles.supportSidebar__mobileDropdownButton} onClick={() => setMenuActive(true)}>
				<span>Menu</span>
				<LuChevronDown />
			</button>
			<Drawer height={`70%`} placement="bottom" open={menuActive} onClose={() => setMenuActive(false)}>
				<DesktopMenu />
			</Drawer>
			</>
		)
	}
	
	
	const DesktopMenu = () => {
		const handleLinkClick = () => {
			setMenuActive(false);
			window.scrollTo(0, 0);
		}
		return (
			<>
				<nav className={styles.supportSidebar__nav}>
					{supportMenu.map((section, index) => (
						<div key={index}>
							<h3>{section.sectionTitle}</h3>
							<ul>
								{section.sectionItems.map((item, itemIndex) => (
									<li value={item.link} onClick={handleLinkClick} key={itemIndex}>
										<Link className={styles.supportSidebar__nav__link} href={item.link}>{item.title}</Link>
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
			document.querySelectorAll(`.${styles.supportSidebar__nav} li`).forEach((link) => {
				if (link.getAttribute("value") === pathname) {
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
			{isMobile ? <MobileDropdownMenu /> : <DesktopMenu />}
		</aside>
	);
}
