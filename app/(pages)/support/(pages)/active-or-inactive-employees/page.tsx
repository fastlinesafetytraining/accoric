import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Employee Active/Inactive Status | Support | Accoric Management",
	description:
		"Learn how to change the active/inactive status of employees in Accoric Management.",
};

export default function Page() {
	return (
		<>
			<h1>Employee Active/Inactive Status</h1>
			<h2>Objective</h2>
			<p>To use the active/inactive functionality properly.</p>
			<h2>Steps</h2>
			<h3>From the Employee Dashboard</h3>
			<ol>
				<li>
					Navigate to <strong>Employee Dashboard</strong>
				</li>
				<li>
					A green or grey outline will surround each employee&#39;s profile
					picture.
					<br />
					<strong>Green</strong> indicates active status.
					<br />
					<strong>Grey</strong> indicates inactive status.
					<br />
					Click on the profile picture to change the status.
					<Image
						width={162}
						height={199}
						src='/Images/support-page-screenshots/accoric-management-employee-active-status.webp'
						alt='Change Active Status From Dashboard'
					/>
				</li>
			</ol>
			<hr />
			<h3>From the Employee Profile</h3>
			<ol>
				<li>
					Navigate to <strong>Employee Profile</strong> Page.
				</li>
				<li>
					Locate the <strong>Status</strong> box. Tick either the active or
					inactive radio button.
					<Image
						width={362}
						height={231}
						src='/Images/support-page-screenshots/accoric-management-update-employee-active-status.webp'
						alt='Change active status from employee profile'
					/>
				</li>
				<li>
					Click <strong>Update</strong> at the bottom of the screen.
				</li>
			</ol>
		</>
	);
}
