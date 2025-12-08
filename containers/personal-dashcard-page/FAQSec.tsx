import React from "react";
import FAQ from "@/Components/UI/FAQ";

export default function FAQSec() {
	const faq = [
		{
			question: "What is the Personal DASHcard™?",
			answer:
				"<p>The Personal DASHcard™ is the first all-in-one certification tracker built for workers.</p><p><b>With DASHcard you can:</b></p><p><ul><li>Store every certification you’ve earned — from DOB SST and OSHA cards to forklift, boom lift, CPR/first aid, confined space, rigging, welding, and more.</li><li>Share instantly by scanning or tapping your card to pull up your digital profile anywhere, anytime.</li><li>Get reminders before your certifications expire so you’re never caught off guard.</li>Back up your record — if you lose or forget an official wallet card, you still have your records ready to send to an employer.<li>Take control of your career by owning your certification record, independent of any one school, union, or employer.</li></ul></p>",
		},
		{
			question:
				"Is DASHcard different from union-provided cards that track certifications?",
			answer:
				"<p><b>Yes — it’s different</b></p><p>Union cards sometimes track certifications within their own training systems, but those cards are limited to your union’s programs. They won’t include certifications you’ve earned outside the union, such as OSHA, DOB-required SST, forklift, aerial lift, CPR, confined space, or specialty trade training.</p><p>DASHcard is universal — and it puts you in control. It’s your personal record that brings together all certifications, from any provider or union, in one place. That means whether you earn a certification through your union, your employer, or an independent training provider, you can store, organize, and share them instantly with DASHcard.</p><p>With DASHcard, you’re not depending on one system or one organization — you own your certification record and carry it wherever your career takes you.</p>",
		}
	];
	return (
		<section>
			<FAQ items={faq} />
		</section>
	);
}
