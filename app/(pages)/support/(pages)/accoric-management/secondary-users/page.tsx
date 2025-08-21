import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Secondary Users | Support | Accoric Management",
	description:
		"Learn how to create secondary users and manage their permissions in Accoric Management.",
};

export default function Page() {
	return (
		<>
			<h1>Secondary Users</h1>
			<h2>Objective</h2>
			<p>To create secondary users and manage their permissions.</p>
			<h2>Steps</h2>
			<h3>Creating Secondary Users</h3>
			<p>
				<em>Note: Only Admins can create secondary users.</em>
			</p>
			<ol>
				<li>
					Navigate to <strong>My Account.</strong>
				</li>
				<li>
					Click <strong>New User.</strong>
				</li>
				<li>Set their access level.</li>
				<li>
					Enter the new user&apos;s email and their full name. Enter their
					password, enter your password, then click <strong>Create.</strong>
				</li>
			</ol>
			<Image
				width={426}
				height={699}
				src='/images/support-page-screenshots/accoric-management-create-secondary-user.webp'
				alt='Accoric Management - Creating Secondary Users'
			/>
			<hr />
			<h3>Setting Access Levels</h3>
			<ol>
				<li>
					Change a user&apos;s access level by clicking on the access level. Or,
					click <strong>Edit,</strong> and change their access level from the
					pop-up.
					<Image
						width={183}
						height={125}
						src='/images/support-page-screenshots/accoric-management-secondary-user-access-level.webp'
						alt='Accoric Management - Secondary User Access Level'
					/>
					<ol>
						<li>
							<strong>Admin Access:</strong> Enables access to all features on
							Accoric Management. Can create secondary users. This Access level
							is only given to <strong>One User</strong> at the time of account
							set up.
						</li>
						<li>
							<strong>Full Access:</strong> Enables access to all features on
							Accoric Management with he exception of creating secondary users.
						</li>
						<li>
							<strong>Restricted Access:</strong> Disables access to adding and
							deleting employees, but can create and delete certifications on
							employees&apos; profiles.
						</li>
						<li>
							<strong>View-Only Access:</strong> Unable to make any permanent
							changes to the account. Simply a viewing access level.
						</li>
					</ol>
				</li>
			</ol>
		</>
	);
}
