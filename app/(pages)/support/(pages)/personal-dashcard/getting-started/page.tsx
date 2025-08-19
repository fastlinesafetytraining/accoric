import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: "Get Started | Support | Accoric",
	description: "Learn how to get started with Personal DASHcard™.",
};

export default function page() {
	return (
		<>
			<h1>Get Started</h1>
            <h2>Introduction</h2>
			<p>
				Welcome to the Personal DASHcard™ app &mdash; your all-in-one tool for managing your certifications. This guide walks you through key features so you can stay organized, avoid expired certs, and maintain full control of your credentials.
			</p>
			<h2>What&apos;s the Groundswell Program?</h2>
			<ol>
				<li>Refer <strong>3+ coworkers</strong> to the app.</li>
				<li>Receive <strong>2 free DASHcard replacements</strong> &mdash; whether lost or for future renewal (a $50 value).</li>
				<li>Once your three friends are signed up, you will automatically be registered in the Groundswell Program; you&apos;ll be able to see how many free replacements you have left underneath the &quot;Request New FASHcard&apos; button on you home page.</li>
			</ol>
		</>
	);
}
