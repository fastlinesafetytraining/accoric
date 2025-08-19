import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Creating and Using Categories | Support | Accoric Management",
	description:
		"Learn how to create and use categories in your Accoric Management account.",
};

export default function Page() {
	return (
		<>
			<h1>Creating and Using Categories</h1>
			<h2>Objective</h2>
			<p>
				To create and use categories. Categories are an efficient way to segment
				your workforce and properly staff jobs.
			</p>
			<h2>Steps</h2>
			<h3>Create a Category:</h3>
			<p>
				<em>
					Note: Creating a category is not required, but to do so organizes the
					employees in your Accoric Management account.
				</em>
			</p>
			<ol>
				<li>
					Click <strong>Categories</strong> from the right-side toolbar.
				</li>
				<li>
					A Secondary toolbar will appear on the right side. Click{" "}
					<strong>New</strong> to create a new category. Type in the new
					category&apos;s name, and click <strong>Create</strong>
				</li>
				<li>
					Clicking on the name of the category will pull up that category&apos;s
					employee information in a table
				</li>
			</ol>
			<Image
				width={256}
				height={517}
				src='/Images/support-page-screenshots/accoric-management-create-category.webp'
				alt='Creating Categories'
			/>
			<hr />
			<h3>Deleting a Category:</h3>
			<ol>
				<li>
					Navigate to the <strong>Current Categories</strong> table.
				</li>
				<li>
					On the far-right Column, Click <strong>Delete Category</strong>.
				</li>
			</ol>
			<Image
				width={337}
				height={156}
				src='/Images/support-page-screenshots/accoric-management-delete-category.webp'
				alt='Creating Categories'
			/>

			<hr />
			<h3>Viewing and Editing Information in a Category:</h3>
			<ol>
				<li>
					Clicking on the name of the category will pull up that category&apos;s
					employee information in a table
				</li>
				<li>
					Tick the radio button for the employees you would like to move to
					another category. On the top-right, click{" "}
					<strong>Batch Actions.</strong> Use the dropdown to select which
					category you would like to move the selected employees to. Click{" "}
					<strong>Update.</strong>
				</li>
			</ol>
			<Image
				width={2590}
				height={1869}
				src='/Images/support-page-screenshots/accoric-management-update-category-name.webp'
				alt='Creating Categories'
			/>
		</>
	);
}
