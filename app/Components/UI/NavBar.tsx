'use client';
import "@ant-design/v5-patch-for-react-19";
import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Drawer } from "antd";
import { navMenuItems } from '@Utils/const/routes';
import { FaBars } from "react-icons/fa";
import styles from '@Styles/component.module.scss';
import PrimaryButton from "./PrimaryButton";

export default function NavBar(): React.ReactElement {
	const [menuActive, setMenuActive] = useState(false);
	
	const showMenu = () => {
		setMenuActive(true);
	}

	const hideMenu = () => {
		setMenuActive(false);
	}
	
    return (
		<>
			<nav className={styles.desktopNavBar}>
				<ul className={styles.desktopNavBar__menu}>
					{navMenuItems.map((item) => (
						<li className={styles.desktopNavBar__menu__Item} key={item.key}>
							<Link className={styles.desktopNavBar__menu__Item__Link} href={item.href}>{item.label}</Link>
						</li>
					))}
				</ul>
			</nav>
			<nav className={styles.mobileNavBar}>
				<Button type="primary" onClick={showMenu}><FaBars /></Button>
				<Drawer title="Welcome to Accoric!" closeIcon={false} onClose={hideMenu} open={menuActive}>

				<ul className={styles.mobileNavBar__menu}>
					{navMenuItems.map((item) => (
						<li className={styles.mobileNavBar__menu__Item} key={item.key}>{item.label}</li>
					))}
				</ul>
				<PrimaryButton href="https://accoricmgt.com/" title="Login">Login</PrimaryButton>
				</Drawer>
			</nav>
		</>
		);
};
