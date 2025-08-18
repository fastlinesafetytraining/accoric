import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
	title:
		"Viewing, Requesting, and Deleting DashCard's | Support | Accoric Management",
	description:
		"Learn how to view, request, and delete DashCard's in Accoric Management.",
};

export default function Page() {
	return (
		<>
			<h1>Viewing, Requesting, and Deleting DashCard&apos;s</h1>
			<h2>Objective</h2>
			<p>To view, request, and delete DashCard&apos;s.</p>
			<ol>
				<li>
					From the Employee Dashboard, click <strong>View</strong>
				</li>
				<li>
					On the employee&apos;s profile page, a picture display of the
					employee&apos;s DashCard will appear. The employee&apos;s current
					DashCard information will be visible, such as their name, issue date,
					expiration date, and DashCard ID Number.
				</li>
				<li>
					Click <strong>Request New Card</strong> to send an order notification
					to Accoric.
				</li>
				<li>
					Click <strong>Cancel Card</strong> to send a cancel notification to
					Accoric.
				</li>
				<li>
					If the employee does not have a DashCard, it will be display as such.
				</li>
			</ol>
			<Image
				width={345}
				height={276}
				src='/Images/support-page-screenshots/accoric-management-request-new-card.webp'
				alt='Request New Card button on employee profile page'
			/>
		</>
	);
}
