import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Managing Your Training | Support | Accoric",
	description: "Learn how to manage your training.",
};

export default function page() {
	return (
		<>
			<h1>Managing Your Training</h1>
			{/* Setting New Expiration Reminders */}
			<h2>Setting New Expiration Reminders</h2>
			<p>
				(To Edit an existing reminder, use the Certifications tab or Reminders
				tab.)
			</p>
			<ol>
				<li>
					Go to <strong>&quot;Certifications&quot;</strong>, then select and tap
					&quot;Edit&quot; on the desired certification.
				</li>
				<li>
					In the <strong>Notification</strong> section, tap{" "}
					<strong>&quot;New&quot;</strong>
				</li>
				<li>In the pop-up:</li>
				<ol>
					<li>
						<strong>Days Before:</strong> Choose how many days in advance to
						begin reminders (e.g., 30 days).
					</li>
					<li>
						<strong>Send At:</strong> Pick the time of day to receive it.
					</li>
					<li>
						<strong>Repeat Notifications:</strong> Choose the frequency (daily,
						weekly, etc.).
					</li>
				</ol>
				<li>
					Reminders will continue at your selected interval until the cert is
					renewed, deleted, or the reminder is turned off.
				</li>
				<li>
					Tap <strong>&quot;Save&quot;</strong>
				</li>
			</ol>
			{/*Editing an Existing Reminder*/}
			<h2>Editing Existing ExpirationReminder</h2>
			<h3>Option 1:</h3>
			<ol>
				<li>
					Go to <strong>&quot;Certifications&quot;</strong>
				</li>
				<li>
					Tap <strong>&quot;Edit&quot;</strong> on the cert
				</li>
				<li>
					Then Tap <strong>&quot;Edit&quot;</strong> under notifications
				</li>
			</ol>
			<h3>Option 2:</h3>
			<ol>
				<li>
					Go to <strong>&quot;Reminders&quot;</strong> tab (only visible if
					you&apos;ve set reminders).
				</li>
				<li>
					Tap <strong>&quot;Edit&quot;</strong> next to the reminder
				</li>
			</ol>
			<p>In the Pop-up:</p>
			<ol>
				<li>
					<strong>Days before:</strong> Set how early you want reminders.
				</li>
				<li>
					<strong>Send At:</strong> Choose notification time.
				</li>
				<li>
					<strong>Repeat:</strong> Set how often it repeats.
				</li>
			</ol>
			<em>
				Reminders will continue until the cert is renewed, deleted, or the
				reminder is turned off.
			</em>
			<p>
				Tap <strong>&quot;Save&quot;</strong> when done.
			</p>
			{/*Deleting Expiration Reminders*/}
			<h2>Deleting Expiration Reminders</h2>
			<ol>
				<li>
					Go to <strong>&quot;Certifications&quot;</strong> tab or{" "}
					<strong>&quot;Reminders&quot;</strong> tab
				</li>
				<li>
					Tap <strong>&quot;Edit&quot;</strong> on the desired cert
				</li>
				<li>
					In the Notification section, tap <strong>&quot;Delete&quot;</strong>{" "}
					to remove the reminder.
				</li>
			</ol>
		</>
	);
}
