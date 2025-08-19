import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Managing Your Certifications | Support | Personal DASHcard",
	description:
		"Learn how to manage your certifications in your Personal DASHcard.",
};

export default function page() {
	return (
		<>
			<h1>Managing Your Certifications</h1>
			{/* Adding a Certification */}
			<h2>Adding a Certification</h2>
			<ol>
				<li>
					Tap <strong>&quot;Certifications&quot;</strong> in the bottom
					navigation bar.
				</li>
				<li>
					Tap <strong>&quot;Add Certification&quot;</strong> in the top right
					corner of the screen.
				</li>
				<li>
					Complete the required fields: Certification Name, Issued Date,
					Expiration Date.
				</li>
				<li>
					Toggle <strong>&quot;Sensitive&quot;</strong> if you want to keep it
					private (hidden from your public scan page).
				</li>
				<li>
					Tap <strong>&quot;Save&quot;</strong> to store it in your DASHcard.
				</li>
			</ol>
			{/* Editing a Certification */}
			<h2>Editing a Certification</h2>
			<ol>
				<li>
					Go to <strong>&quot;Certifications&quot;</strong> in the bottom
					navigation bar.
				</li>
				<li>Tap &quot;View&quot; next to the cert, then &quot;Edit&quot;.</li>
				<li>Make Your changes and tap &quot;Save&quot;.</li>
			</ol>
			{/* Sharing a Certification */}
			<h2>Sharing a Certification</h2>
			<ol>
				<li>
					Go to <strong>&quot;Certifications&quot;</strong>.
				</li>
				<li>
					Tap <strong>&quot;View&quot;</strong> next to the cert you want to
					share.
				</li>
				<li>
					Tap <strong>&quot;Share&quot;</strong> to send it via text, email,
					WhatsApp, or another app.
				</li>
			</ol>
		</>
	);
}
