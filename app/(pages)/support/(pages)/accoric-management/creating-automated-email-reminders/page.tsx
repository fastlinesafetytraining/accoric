import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Creating Automated Email Reminders | Support | Accoric Management",
	description:
		"Learn how to create automated email reminders in Accoric Management.",
};

export default function Page() {
	return (
		<>
			<h1>Creating Automated Email Reminders</h1>
			<h2>Objective</h2>
			<p>To create automated email reminders.</p>
			<h2>Steps</h2>
			<h3>Creating and Automated Email Reminder</h3>
			<ol>
				<li>
					Click <strong>New Email</strong> in the Email&apos;s page.
				</li>
				<li>Enter the name of the automated email you wish to create.</li>
				<li>
					Click on as many categories as you wish that you would like the
					information for the email to be pulled from.
				</li>
				<li>
					Click on the secondary users that you wish to receive the automated
					email.
				</li>
				<li>
					Enter the date and time in which you would like the automated email to
					start on.
				</li>
				<li>
					Repeat indicates the frequency in which the automated email is to be
					sent out. Click either <strong>Daily</strong>, <strong>Weekly</strong>
					, <strong>Monthly</strong>, or <strong>Yearly</strong> to select the
					frequency.
				</li>
				<li>
					<strong>Expiring</strong> indicated how far out the automated email
					should capture certifications. For example, set it to 60 days to
					capture all certifications that are going to expire in 60 days.
				</li>
				<li>
					Fill out the message that the automated email will contain. This will
					be the body of the email. The subject of the email is prefilled.
				</li>
				<li>
					Click <strong>Create</strong>
				</li>
				<li>
					After creating the automated email, it will store in a list. From
					here, at a glance you will be able to see the details of the email.
				</li>
			</ol>
			<Image
				width={569}
				height={721}
				src='/images/support-page-screenshots/accoric-management-new-automated-email-reminder.webp'
				alt='Email Reminders to send to workers based on their construction certification status'
			/>
			<hr />
			<h3>Editing an Automated Email Reminder</h3>
			<ol>
				<li>
					Click <strong>Edit.</strong>
				</li>
				<li>Adjust any information in the pop-up window.</li>
				<li>
					Click <strong>Update.</strong>
				</li>
			</ol>
		</>
	);
}
