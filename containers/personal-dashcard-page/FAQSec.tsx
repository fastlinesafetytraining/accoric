import React from "react";
import FAQ from "@/Components/UI/FAQ";

export default function FAQSec() {
	const faq = [
		{
			question: "What is the Personal DASHcard™?",
			answer:
				"<p>The Personal DASHcard™ is the first all-in-one certification tracker built for workers. It’s a physical NFC/QR card paired with a mobile app that puts your entire training record in your hands.</p><p><b>With DASHcard you can:</b></p><p><ul><li>Store every certification you’ve earned — from DOB SST and OSHA cards to forklift, boom lift, CPR/first aid, confined space, rigging, welding, and more.</li><li>Share instantly by scanning or tapping your card to pull up your digital profile anywhere, anytime.</li><li>Get reminders before your certifications expire so you’re never caught off guard.</li>Back up your record — if you lose or forget an official wallet card, you still have your records ready to send to an employer.<li>Take control of your career by owning your certification record, independent of any one school, union, or employer.</li></ul></p>",
		},
		{
			question:
				"Is DASHcard different from union-provided cards that track certifications?",
			answer:
				"<p><b>Yes — it’s different</b></p><p>Union cards sometimes track certifications within their own training systems, but those cards are limited to your union’s programs. They won’t include certifications you’ve earned outside the union, such as OSHA, DOB-required SST, forklift, aerial lift, CPR, confined space, or specialty trade training.</p><p>DASHcard is universal — and it puts you in control. It’s your personal record that brings together all certifications, from any provider or union, in one place. That means whether you earn a certification through your union, your employer, or an independent training provider, you can store, organize, and share them instantly with DASHcard.</p><p>With DASHcard, you’re not depending on one system or one organization — you own your certification record and carry it wherever your career takes you.</p>",
		},
		{
			question:
				"Is the Personal DASHcard™ different from the NYC-DOB Worker Wallet Card or the SST Card?",
			answer: `<p><b>Yes, DASHcard is completely different.</b></p><p><ul><li>The NYC DOB Worker Wallet Card and the SST Card are official DOB-issued credentials that you are legally required to carry on regulated job sites under RCNY § 3321 and Local Law 196.</li><li> DASHcard is not a DOB-issued card. It’s a personal certification tracker — a supplemental tool that lets you store, organize, and share all of your certifications in one place (DOB-required or otherwise).</li><li> Even with DASHcard, you must still carry your official wallet cards (SST, OSHA, DOB Worker Wallet) whenever they are required by law.</li></ul></p><p><b>Why use DASHcard if I still need to carry my Worker Wallet and SST cards?</b></p><p>Because those official cards only cover a few specific certifications. DASHcard helps you manage dozens of others — forklift, aerial lift, confined space, CPR/first aid, HAZWOPER, welding, and more. Plus, you get expiration reminders and an all-in-one digital backup in case you lose a card.</p>`,
		},
		{
			question: "Why does the Personal DASHcard™ Expire?",
			answer:
				"<p><b>The Personal DASHcard™ expires every 3 years</b></p><p>To maintain the integrity, security, and performance of the platform. As technology and compliance needs evolves, this renewal ensures your card stays compatible with the latest system updates and security standards. It also gives users an opportunity to refresh their information and continue using a card that reflects the most current version of our platform.</p>",
		},
		{
			question: "Is the Personal DASHcard™ required to be carried?",
			answer: `<p><b>No — DASHcard is not legally required.</b></p>
<p>Only official cards, like your NYC DOB SST card, OSHA card, or Worker Wallet Card, are legally required to be carried on regulated job sites. DASHcard is not a DOB-issued credential and does not replace those cards.</p>
<p><b>So why carry it?</b></p>
<p>Because DASHcard gives you advantages that official cards don't:</p>
<p>
<ul>
  <li><b>All-in-one:</b> Keep every certification — DOB-required or not — together in one card and app.</li>
  <li><b>Beyond DOB:</b> Track and manage certifications that aren’t stored anywhere else, like forklift operator, boom lift operator, CPR/First Aid, confined space, welding, and many more.</li>
  <li><b>Backup:</b> If you lose or forget an official card, you still have digital proof to share instantly while waiting for a replacement.</li>
  <li><b>Expiration reminders:</b> Never get caught off guard with expired training.</li>
  <li><b>Professional edge:</b> Showing up with everything organized makes you stand out to employers and foremen.</li>
</ul>
</p>
<p>DASHcard isn't about replacing the required cards — it's about making sure your're always covered, always organized, and always ready to work.</p>`,
		},
	];
	return (
		<section>
			<FAQ items={faq} />
		</section>
	);
}
