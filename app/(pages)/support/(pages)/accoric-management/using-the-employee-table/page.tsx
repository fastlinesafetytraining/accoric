import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Using the Employee Table | Support | Accoric Management",
	description:
		"Learn how to manage the Employee table on the Employee Dashboard.",
};

export default function Page() {
	return (
		<>
			<h1>Using the Employee Table</h1>
			<h2>Objective</h2>
			<p>To manage the Employee table on the Employee Dashboard.</p>
			<h2>Steps</h2>
			<ol>
				<li>
					Navigate to the <strong>Employee Dashboard</strong> page. By default,
					all employees will appear here.
				</li>
				<li>
					To the right, hover over the arrow to either create a new
					certification, or to delete the employee
				</li>
				<li>
					Click <strong>View</strong> to see the employee&apos;s profile page.
				</li>
			</ol>
			<p>
				<Image
					width={406}
					height={150}
					src='/images/support-page-screenshots/accoric-management-employee-dashboard-options.webp'
					alt='Employee Dashboard Options'
					title='Employee Dashboard Options'
				/>
			</p>
		</>
	);
}
