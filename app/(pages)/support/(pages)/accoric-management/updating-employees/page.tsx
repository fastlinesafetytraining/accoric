import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Updating Employees | Support | Accoric Management",
	description:
		"Learn how to update employee information in your Accoric Management account.",
};

export default function Page() {
	return (
		<>
			<h1>Updating an Employee</h1>
			<h2>Objective</h2>
			<p>To update employee information in your Accoric Management account.</p>
			<h2>Steps</h2>
			<ol>
				<li>
					Navigate to <strong>Employee Dashboard.</strong>
				</li>
				<li>
					In the far-right column of the Employee table, click{" "}
					<strong>View Employee.</strong>
				</li>
				<li>
					Edit any employee data, then click <strong>Update</strong> at the
					bottom of the Employee profile page.
				</li>
			</ol>
			<Image
				width={1206}
				height={631}
				src='/Images/support-page-screenshots/accoric-management-add-employee-form.webp'
				alt='Update an Employee from the Employee Dashboard'
			/>
		</>
	);
}
