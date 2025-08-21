import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Adding Employees | Support | Accoric Management",
	description: "Learn how to add employees to your Accoric Management account.",
};

export default function Page() {
	return (
		<>
			<h1>Adding Employees</h1>
			<h2>Objective</h2>
			<p>To add an employee to your Accoric Management account</p>
			<h2>Steps</h2>
			<ol>
				<li>
					Navigate to <strong>Employee Dashboard</strong>
				</li>
				<li>
					Click <strong>Add Employee.</strong>
				</li>
				<Image
					width={1206}
					height={631}
					src='/images/support-page-screenshots/accoric-management-add-employee-form.webp'
					alt='accoric screenshot'
				/>
				<li>
					Add pertinent employee information, such as name, address, phone
					number, email address, job title, and emergency contact information.
				</li>
				<li>
					Add a profile picture.
					<br /> (<em>Preferred picture formats are .jpg or .png</em>). When
					added, employees by default are active; profile pictures will have a
					green outline, indicating they are active. <br />
					Check out this support page to learn more about{" "}
					<Link href='/support/active-or-inactive-employees' title='Active/Inactive Status of Employees Page'>
						{" "}
						Active/Inactive Status of Employees.
					</Link>
				</li>
			</ol>
		</>
	);
}
