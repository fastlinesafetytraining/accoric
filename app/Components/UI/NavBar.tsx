'use client';
import React from 'react';
import Link from 'next/link';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import styles from '@Styles/component.module.scss';


const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Link className="text-lg px-4 py-1" href='/accoric-management'>Accoric Management</Link>
        )
    },
    {
        key: '2',
        label: (
            <Link className="text-lg px-4 py-1" href='/accoric-dashcard'>Accoric DashCard</Link>
        )
    },
    {
        key: '3',
        label: (
            <Link className='text-lg px-4 py-1' href='/safety-library'>Safety Library</Link>
        )
    }
];

export default function NavBar(): React.ReactElement {
    return (
			<nav className={styles.siteDesktopNavBar}>
				<ul className={styles.navListMenu}>
					<li>
						<Dropdown className={styles.navListSubmenu} menu={{ items }}>
							<a className='cursor-pointer' onClick={(e) => e.preventDefault()}>
								<Space>
									Products
									<DownOutlined style={{ fontSize: '0.75rem' }} />
								</Space>
							</a>
						</Dropdown>
					</li>
					<li>
						<Link href="/pricing">Pricing</Link>
					</li>
					<li>
						<Link href="/resources">Resources</Link>
					</li>
					<li>
						<Link href="/about-us">About Us</Link>
					</li>
				</ul>
			</nav>
		);
};
