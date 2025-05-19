import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Searching for Employees | Support | Accoric Management",
	description:
		"Learn how to search for employees in your Accoric Management account.",
};

export default function Page() {
	return (
		<>
			<h1>Search Employee Table</h1>
			<h2>Objective</h2>
			<p>To manage the Employee Table on the Employee Dashboard.</p>
			<h2>Steps</h2>
			<ol>
				<li>
					Locate the <strong>search bar</strong> above the Employee table.
				</li>
				<li>You may search by name, in any order, or by certification.</li>
			</ol>
			<Image
				width={666}
				height={158}
				src='/Images/support-page-screenshots/accoric-management-search-employee-table.webp'
				alt='accoric management screenshot'
			/>
		</>
	);
}
