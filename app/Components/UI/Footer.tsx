import Image from 'next/image';
import Link from 'next/link';
import '../../styles/globals.css';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className="pt-10 p-4">
			<div className="footer-main-content-container">
				<div className="footer-logo-container m-10">
					<Image
						unoptimized
						width={192}
						height={192}
						src="/svg/accoric-logo-icon.svg"
						alt="Accoric Logo"
						className="w-30"
					/>
					<h2>Accoric</h2>
					<p className="text-sm text-gray-500 mt-2">
						Accoric is a leading provider of innovative solutions for safety and
						compliance.
					</p>
					<div className="social-links mt-4 flex space-x-4">
						<Link
							href="https://www.linkedin.com/company/accoric"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin className="text-3xl" />
						</Link>
					</div>
				</div>
				<div
					aria-label="vertical-divider"
					className="vertical-divider inline-block h-100 min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"
				></div>
				<div className="link-list-container m-10">
					<ul className="link-list">
						<li>Products</li>
						<li>
							<Link href="/accoric-management">Accoric Management</Link>
						</li>
						<li>
							<Link href="/accoric-dashcard">Accoric DashCard</Link>
						</li>
					</ul>
					<ul className="link-list">
						<li>Support</li>
						<li>
							<Link href="/support">Product Support</Link>
						</li>
					</ul>
					<ul className="link-list">
						<li>Company</li>
						<li>
							<Link href="/about-us">About Us</Link>
						</li>
						<li>
							<a href="https://www.fastlinesafetytraining.com" target="_blank" rel="noopener noreferrer">
								Certificate Trainings
							</a>
						</li>
					</ul>
				</div>

				<div className="flex flex-col items-center m-10">
					<Image
						unoptimized
						className="mb-8 rounded-full"
						width={100}
						height={100}
						src="/svg/usa-flag.svg"
						alt="USA Flag"
					/>
					<p>
						<b>100% MADE IN THE USA</b>
					</p>
				</div>
			</div>
			<div className="bottom-footer">
				<p>&copy; {new Date().getFullYear()} Accoric. All rights reserved.</p>
				<div className="flex space-x-4">
					<Link href="/privacy-policy">Privacy Policy</Link>
					<Link href="/terms-of-service">Terms of Service</Link>
				</div>
			</div>
		</footer>
	);
}
