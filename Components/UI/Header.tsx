"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteButton, NavBar, ThemeToggle } from ".";
import { LuUser } from "react-icons/lu";
import "@styles/globals.css";

export default function Header() {
	const [bgTransparent, setBgTransparent] = useState<boolean>(false);

	// ** Header Background Color Change on Scroll **
	useEffect(() => {
		const handleScroll = () => {
			setBgTransparent(window.scrollY > 100);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			style={{
				backgroundColor: bgTransparent
					? "var(--header-footer-background-color)"
					: "transparent",
			}}
			className='flex justify-between items-center sticky top-0 z-50'
		>
			<Link href='/'>
				<Image
					unoptimized
					width={200}
					height={100}
					src='/svg/accoric-logo-svg.svg'
					alt='Accoric Logo'
					className='logo min-w-[100px] max-w-[200px] h-auto'
				/>
			</Link>
			<NavBar />
			<div className='flex items-center gap-4 header-buttons'>
				<ThemeToggle />
				<SiteButton
					type='primary'
					className='login-button'
					href='https://accoricmgt.com/'
					title='Login'
					icon={<LuUser />}
					iconPosition='left'
				>
					Login
				</SiteButton>
			</div>
		</header>
	);
}
