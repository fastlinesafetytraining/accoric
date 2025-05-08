"use client";
import "@ant-design/v5-patch-for-react-19";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button, Drawer } from "antd";
import { navMenuItems } from "@/libs/utils/conts/routes";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "@styles/component.module.scss";
import PrimaryButton from "./PrimaryButton";

export default function NavBar(): React.ReactElement {
	const [menuActive, setMenuActive] = useState(false);
	const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

	const showMenu = () => {
		setMenuActive(true);
	};

	const hideMenu = () => {
		setMenuActive(false);
	};

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
		<>
			{isMobile ?  (
				// Mobile Navbar
				<nav className={styles.mobileNavBar}>
					<Button type='primary' ghost size="large" onClick={showMenu}>
						<FaBars />
					</Button>
					<Drawer
						title={
							<div className={styles.mobileNavBar__drawerTitle}>
								<FaTimes className={styles.mobileNavBar__drawerTitle__closeIcon} onClick={hideMenu} />
								<h2>Welcome to <span>Accoric</span>!</h2>
							</div>
						}
						onClose={hideMenu}
						closeIcon={false}
						open={menuActive}
						styles={{
							body: {
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-end",
							},
						}}
					>
						<ul className={styles.mobileNavBar__menu}>
							{navMenuItems.map((item) => (
								<li className={styles.mobileNavBar__menu__item} key={item.key}>
									<Link className={styles.mobileNavBar__menu__item__link} href={item.href}>{item.label}</Link>
								</li>
							))}
						</ul>
						<PrimaryButton href='https://accoricmgt.com/' title='Login'>
							Login
						</PrimaryButton>
					</Drawer>
				</nav>
			) : (
				// Desktop Navbar
				<nav className={styles.desktopNavBar}>
					<ul className={styles.desktopNavBar__menu}>
						{navMenuItems.map((item) => (
							<li className={styles.desktopNavBar__menu__Item} key={item.key}>
								<Link
									className={styles.desktopNavBar__menu__Item__Link}
									href={item.href}
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			)}
		</>
	);
}
