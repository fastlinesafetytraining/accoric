import Image from 'next/image';
import Link from 'next/link';
import '../../styles/globals.css';

export default function Footer() {
	return (
		<footer className="pt-10 p-4">
			<div className="footer-main-content-container">
				<div className="footer-logo-container m-10">
					<Image
						width={192}
						height={192}
						src="/accoric-logo-icon.webp"
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
							<Image
								width={100}
								height={100}
								src="/svg/linkedin-svg-icon.svg"
								alt="LinkedIn"
								className="w-6 h-6"
							/>
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
						<li>
							<Link href="/safety-library">Safety Library</Link>
						</li>
					</ul>
					<ul className="link-list">
						<li>Support</li>
						<li>
							<Link href="/product-support">Product Support</Link>
						</li>
						<li>
							<Link href="/faq">FAQs</Link>
						</li>
						<li>
							<Link href="www.fastlinesafetytraining.com">
								Certificate Trainings
							</Link>
						</li>
					</ul>
					<ul className="link-list">
						<li>Company</li>
						<li>
							<Link href="/about-us">About Us</Link>
						</li>
						<li>
							<Link href="data-security-policy">Data Security Policy</Link>
						</li>
					</ul>
				</div>

				<div className="flex flex-col items-center m-10">
					<Image
						className="mb-8"
						width={100}
						height={100}
						src="/usa-flag-icon.png"
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
