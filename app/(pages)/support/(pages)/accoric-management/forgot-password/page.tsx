import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Resetting Your Password | Support | Accoric Management",
	description: "Learn how to reset your password in Accoric Management.",
};

export default function Page() {
	return (
		<>
			<h1>Resetting Your Password</h1>
			<h2>Objective</h2>
			<p>To reset your password.</p>
			<h2>Steps</h2>
			<p>
				<em>
					Note: Secondary users must sign in themselves to change their
					passwords.
				</em>
			</p>
			<ol>
				<li>
					Click <strong>Forgot Password</strong> on the login page.
				</li>
				<Image
					width={204}
					height={161}
					src='/images/support-page-screenshots/accoric-management-forgot-password.webp'
					alt='Forgot Password on Login'
				/>
				<li>
					Enter the email address registered with your Accoric Management
					Account.
				</li>
				<li>
					An email will be sent to this email address with a link to change your
					password. The link expires after you reset your password.
				</li>
				<li>
					You may also change your password from the <strong>My Account</strong>{" "}
					page. Enter and confirm your new password. Then, enter your current
					password and click <strong>Update.</strong> Your current password will
					also display. Reset any secondary user&apos;s password by simply
					clicking <strong>Reset Password.</strong>{" "}
				</li>
			</ol>

			<Image
				width={241}
				height={182}
				src='/images/support-page-screenshots/accoric-management-reset-password.webp'
				alt='Forgot Password on Login'
			/>
			<Image
				width={473}
				height={334}
				src='/images/support-page-screenshots/accoric-management-set-new-password.webp'
				alt='Forgot Password on Login'
			/>
		</>
	);
}
