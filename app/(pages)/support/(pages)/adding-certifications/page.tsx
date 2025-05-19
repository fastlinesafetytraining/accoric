import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Adding Certifications | Support | Accoric Management",
	description:
		"Learn how to add certifications to employees in Accoric Management.",
};

export default function Page() {
	return (
		<div>
			<h1>Adding a Certification to an Employee</h1>
			<h2>Objective</h2>
			<p>To add a certification to an employee.</p>
			<h2>Steps</h2>
			<h3>From the Employee Dashboard</h3>
			<ol>
				<li>
					Navigate to <strong>Employee Dashboard</strong>
				</li>
				<li>
					Hover over the arrow on the right, and click{" "}
					<strong>New Certification</strong>. Or, click <strong>View</strong>,
					scroll down to the <strong>Certifications</strong>
					table on the employee&apos;s profile page, and click{" "}
					<strong>New Certification</strong>.
				</li>
				<li>
					Add pertinent information, such as a name for the certification and an
					issue and expiration date.
				</li>
				<li>
					Upload a front and back picture of the certification. Acceptable
					formats are .jpg, .png, and .pdf.
				</li>
				<li>
					Click <strong>Upload.</strong>
				</li>
			</ol>
			<Image
				width={284}
				height={208}
				src='/Images/support-page-screenshots/accoric-management-add-certificate-one.webp'
				alt='Add a Certification from the Employee Dashboard screenshot one'
			/>
			<hr />
			<Image
				width={261}
				height={112}
				src='/Images/support-page-screenshots/accoric-management-add-certificate-two.webp'
				alt='Add a Certification from the Employee Dashboard screenshot two'
			/>
		</div>
	);
}
