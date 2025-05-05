import Image from "next/image";

export default function AddingCertifications() {
	return (
		<div>
			<h1 id='employee-active-inactive-status'>
				Employee Active/Inactive Status
			</h1>
			<h2 id='objective'>Objective</h2>
			<p>To use the active/inactive functionality properly.</p>
			<h2 id='steps'>Steps</h2>
			<h3>
				From the Employee Dashboard
			</h3>
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
						width={1000}
						height={1000}
						src='/Images/support-page-screenshots/accoric-management-employee-active-status.webp'
						alt='Change Active Status From Dashboard'
					/>
				</li>
			</ol>
			<hr />
			<h3>
				From the Employee Profile
			</h3>
			<ol>
				<li>
					Navigate to <strong>Employee Profile</strong> Page.
				</li>
				<li>
					Locate the <strong>Status</strong> box. Tick either the active or
					inactive radio button.
					<Image
						width={1000}
						height={1000}
						src='/Images/support-page-screenshots/accoric-management-update-employee-active-status.webp'
						alt='Change active status from employee profile'
					/>
				</li>
				<li>
					Click <strong>Update</strong> at the bottom of the screen.
				</li>
			</ol>
			<hr />
			<h3>From Categories</h3>
			<ol>
				<li>
					Navigate to <strong>Categories.</strong>
				</li>
				<li>
					Locate the category in which the employee you would like to edit are
					located.
				</li>
				<li>
					From here, you may tick multiple employees at once. Scroll to the
					bottom of the list and change their status. Learn more about
					categories{" "}
					<a href='https://www.accoric.com/support/using-categories'>
						in this page
					</a>{" "}
					to learn more about Categories.
					<Image
						width={1000}
						height={1000}
						src='/Images/support-page-screenshots/accoric-management-update-category-status.webp'
						alt='Change Active Status from Categories'
					/>
				</li>
			</ol>
		</div>
	);
}
