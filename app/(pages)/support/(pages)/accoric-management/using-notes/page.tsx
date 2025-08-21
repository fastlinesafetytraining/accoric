import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Using Notes | Support | Accoric Management",
	description:
		"Learn how to use the notes section on the Employee Profile page in your Accoric Management account.",
};

export default function Page() {
	return (
		<>
			<h1>Using Notes</h1>
			<h2>Objective</h2>
			<p>To use the notes section on the Employee Profile page.</p>
			<h2>Steps</h2>
			<ol>
				<li>
					Navigate to any <strong>Employee Profile Page.</strong>
				</li>
				<li>
					Type your notes into the box. You may bold, italicize, underline, and
					make numbered lists.
				</li>
				<li>
					Click <strong>Update.</strong>
				</li>
			</ol>

			<Image
				width={1155}
				height={473}
				src='/images/support-page-screenshots/accoric-management-notes.webp'
				alt="Notes section of an Employee's Profile"
			/>
		</>
	);
}
