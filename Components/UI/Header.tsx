import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteButton, NavBar } from ".";
import { LuUser } from "react-icons/lu";
import "@styles/globals.css";

export default function Header() {
	return (
		<header className='flex justify-between items-center'>
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
			<SiteButton
				type='primary'
				className='login-button'
				href='https://accoricmgt.com/'
				title='Login'
				icon={<LuUser />}>
				Login
			</SiteButton>
		</header>
	);
}
