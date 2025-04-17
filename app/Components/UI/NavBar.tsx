import React from 'react';
import Link from 'next/link';
import { navMenuItems } from '@Utils/const/routes';
import styles from '@Styles/component.module.scss';

export default function NavBar(): React.ReactElement {
    return (
			<nav className={styles.desktopNavBar}>
				<ul className={styles.desktopNavBar__menu}>
					{navMenuItems.map((item) => (
						<li className={styles.desktopNavBar__menu__Item} key={item.key}>
							<Link className={styles.desktopNavBar__menu__Item__Link} href={item.href}>{item.label}</Link>
						</li>
					))}
				</ul>
			</nav>
		);
};
