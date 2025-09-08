"use client";
import { Tooltip } from "antd";
import { useState } from "react";
import {
	FaLinkedin,
	FaWhatsapp,
	FaEnvelope,
	FaCheck,
	FaLink,
} from "react-icons/fa";

const SharePage = () => {
	const [copied, setCopied] = useState(false);

	// Get current URL in a client component
	const currentUrl = typeof window !== "undefined" ? window.location.href : "";

	const handleCopy = () => {
		if (typeof window !== "undefined" && window.navigator) {
			navigator.clipboard.writeText(currentUrl);
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		}
	};

	const shareLinks = [
		{
			name: "LinkedIn",
			icon: <FaLinkedin />,
			url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
				currentUrl
			)}`,
		},
		{
			name: "WhatsApp",
			icon: <FaWhatsapp />,
			url: `https://wa.me/?text=${encodeURIComponent(currentUrl)}`,
		},
		{
			name: "Email",
			icon: <FaEnvelope />,
			url: `mailto:?subject=Check%20this%20out&body=${encodeURIComponent(
				currentUrl
			)}`,
		},
	];

	return (
		<div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
			{shareLinks.map((share) => (
				<Tooltip key={share.name} title={`Share on ${share.name}`}>
					<a
						href={share.url}
						target='_blank'
						rel='noopener noreferrer'
						title={`Share on ${share.name}`}
						style={{
							fontSize: "1.5rem",
							color: "var(--global-black-to-white-color)",
							display: "flex",
							alignItems: "center",
							textDecoration: "none",
						}}
					>
						{share.icon}
					</a>
				</Tooltip>
			))}
			<Tooltip title={`Copy link`}>
				<button
					onClick={handleCopy}
					style={{
						background: "none",
						border: "none",
						cursor: "pointer",
						fontSize: "1.5rem",
						color: copied ? "green" : "var(--global-black-to-white-color)",
					}}
					title='Copy link'
					aria-label='Copy link'
				>
					{copied ? <FaCheck /> : <FaLink />}
				</button>
			</Tooltip>
		</div>
	);
};

export default SharePage;
