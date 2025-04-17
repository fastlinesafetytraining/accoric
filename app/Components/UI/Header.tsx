import React from "react"
import Image from "next/image"
import Link from "next/link"
import NavBar from "./NavBar"
import '@Styles/globals.css'

export default function Header() {
	return (
		<header className="flex justify-between items-center">
			<Link href="/">
				<Image
					width={200}
					height={100}
					src="/accoric-logo.webp"
					alt="Accoric Logo"
					className="logo min-w-[100px] max-w-[200px] h-auto"
				/>
			</Link>
			<NavBar />
			<Link className="login-button" href="https://accoricmgt.com/">Login</Link>
		</header>
	);
}