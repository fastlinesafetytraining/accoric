import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Your DASHcard and Account | Support | Accoric",
	description: "Learn how to manage your DASHcard and account.",
};

export default function page() {
	return (
		<>
			<h1>Your DASHcard and Account</h1>
			{/*Requesting a New DASHcard*/}
			<h2>Requesting a New DASHcard</h2>
			<ol>
				<li>From the <strong>Home tab</strong>, tap <strong>&quot;Request New DASHcard&quot;.</strong></li>
				<li>Select your request type (New Renew, Cancel)</li>
				<li>Add an optional message</li>
				<li>Tap <strong>&quot;Save&quot;</strong></li>
				<li>Track your card status on the Home tab</li>
			</ol>
			{/*Understanding Your Public Page*/}
			<h2>Understanding Your Public Page</h2>
			<ol>
				<li>Your public page auto-updates with any certifications you upload.</li>
				<li>Certifications marked <strong>&quot;Sensitive&quot;</strong> remain hidden.</li>
				<li>To access: Tap your DASHcard or scan the QR code using any smartphone camera.</li>
			</ol>
			{/*Editing Your Profile*/}
			<h2>Editing Your Profile</h2>
			<ol>
				<li>
					Tap the <strong>Menu (☰)</strong> icon in the top left corner of the
					screen.
				</li>
				<li>
					Tap <strong>&quot;Profile&quot;</strong>, then{" "}
					<strong>&quot;Edit&quot;</strong>.
				</li>
				<li>
					After updating your info, tap <strong>&quot;Save&quot;</strong>.
				</li>
			</ol>
			{/*Viewing Billing Information*/}
			<h2>Viewing Billing Information</h2>
			<ol>
				<li>
					Tap the menu (☰) icon and select{" "}
					<strong>&quot;Billing History&quot;</strong>.
				</li>
				<li>For Full details, view your Apple ID or Google Play account.</li>
			</ol>
			{/*Cancelling Your Subscription*/}
			<h2>Cancelling Your Subscription</h2>
			<ol>
				<li>
					To Cancel, manage your subscription through your Apple ID or Google
					Play account.
				</li>
			</ol>
		</>
	);
}
