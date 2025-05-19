import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Generating Spreadsheets | Support | Accoric Management",
	description:
		"Learn how to generate spreadsheets from information uploaded to your Accoric Management account.",
};

export default function Page() {
	return (
		<>
			<h1>Generating Spreadsheets</h1>
			<h2>Objective</h2>
			<p>
				To create a variety of spreadsheets from information uploaded to you
				Accoric Management Account.
			</p>
			<h2>Steps</h2>
			<ol>
				<li>
					Navigate to <strong>Employee Dashboard.</strong>
				</li>
				<li>
					Click <strong>Create Spreadsheet</strong> at the top-right of the
					Employee Table.
				</li>
				<li>
					Specify the category from which you would like to pull information
					from by using the dropdown menu.
				</li>
				<li>
					Specify if you would like to generate a spreadsheet for employees that
					are active, inactive, or all, but using the corresponding option
					button.
				</li>
				<li>
					<strong>Personal Information:</strong> Tick the option button for the
					personal information you would like to include in your spreadsheet
				</li>
				<li>
					<strong>Certification Information:</strong> Specify the type of
					certification you would like the certification to filter for. Or,
					Click <strong>All Certifications</strong> to include all
					certifications.
				</li>
				<li>
					In the <strong>Expiring In</strong> to filter the spreadsheet to
					certifications only expiring in that preset timeframe. Spreadsheets
					will always show certifications that are currently expired.
				</li>
				<li>
					Name the spreadsheet, then click <strong>Create.</strong>
				</li>
			</ol>
			<Image
				width={662}
				height={811}
				src='/Images/support-page-screenshots/accoric-management-generate-spreadsheet.webp'
				alt='generate Spreadsheet'
			/>
		</>
	);
}
