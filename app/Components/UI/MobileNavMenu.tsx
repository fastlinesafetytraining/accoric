'use client';
import React, { useState } from "react"
import { Button, Drawer } from "antd"
import { FaBars } from "react-icons/fa";

export default function MobileNavMenu(): React.ReactElement {
	const [open, setOpen] = useState(false);

	const showDrawer = () => {
		setOpen(true);
	}

	const onClose = () => {
		setOpen(false);
	}

	return (
		<>
			<Button type="primary" onClick={showDrawer}><FaBars /></Button>
			<Drawer title="Mobile Menu" onClose={onClose} open={open}>
				<ul className="mobile-nav-menu">
					<li><a href="/accoric-management">Accoric Management</a></li>
					<li><a href="/accoric-dashcard">Accoric DashCard</a></li>
					<li><a href="/safety-library">Safety Library</a></li>
					<li><a href="/why-choose-us">Why Choose Us?</a></li>
					<li><a href="/resources">Resources</a></li>
					<li><a href="/pricing">Pricing</a></li>
					<li><a href="/about-us">About Us</a></li>
				</ul>
					
			</Drawer>
		</>
	)
}