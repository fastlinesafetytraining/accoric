import { NextRequest, NextResponse } from "next/server";
import type { pricingFormInputProps } from "@/types/pricingFormInputProps";
const RESEND_API_KEY = process.env.RESEND_API_KEY;

if (!RESEND_API_KEY) {
	throw new Error("Resend API key is not configured");
}

export async function POST(request: NextRequest) {
	const { fullName, email, companyName, phone, numberOfEmployees } =
		(await request.json()) as pricingFormInputProps;

	const res = await fetch("https://api.resend.com/emails", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${RESEND_API_KEY}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			from: `Accoric <${process.env.EMAIL_FROM as string}>`,
			to: process.env.EMAIL_TO as string,
			cc: process.env.EMAIL_CC as string,
			bcc: process.env.EMAIL_BCC as string,
			subject: `[${fullName}] from ${companyName}, New Email from Accoric Website`,
			html: `	<body style="width: 100%">
		<table border="0" max-width="600px" margin="0 auto" bgcolor="#ffffff" cellpadding="0" cellspacing="0">
			<tr>
				<td padding="20px" border="0">
				<table cellpadding="0" cellspacing="0" width="100%">
					<tr>
						<td align="center" padding="20px 0">
							<img
								width="300"
								height="100"
								src="https://accoric.com/Images/accoric-logo.png"
								alt="Company Logo"
								max-width="200px"
							/>
						</td>
					</tr>
					<tr>
						<td padding="20px 0">
							<h1 color="#333333" align="center" line-height="1.5" margin="0">
								New Email from Accoric Website.
							</h1>
						</td>
					</tr>
					<tr>
						<table>
							<tr>
								<td font-weight="700">Name:</td>
								<td>${fullName}</td>
							</tr>
							<tr>
								<td font-weight="700">Email</td>
								<td>${email}</td>
							</tr>
							<tr>
								<td font-weight="700">Company:</td>
								<td>${companyName}</td>
							</tr>
							<tr>
								<td font-weight="700">Phone</td>
								<td>${phone}</td>
							</tr>
							<tr>
								<td font-weight="700">
									Employee&apos;s to be tracked:
								</td>
								<td>${numberOfEmployees}</td>
							</tr>
						</table>
					</tr>
					<tr>
						<td padding="20px 10px" border-top="1px solid #eeeeee">
							<p color="#999999" font-size="12px" margin="0">
								© 2025 Accoric. All rights reserved.
							</p>
						</td>
					</tr>
				</table>
				</td>
			</tr>
		</table>
	</body>`,
		}),
	});

	if (!res.ok) {
		return NextResponse.json(
			{ error: "Email sending failed" },
			{ status: 500 }
		);
	} else if (res.ok) {
		return NextResponse.json(
			{ message: "Email sent successfully" },
			{ status: 200 }
		);
	} else {
		return NextResponse.json(
			{ error: "Email sending failed, please try again later" },
			{ status: 500 }
		);
	}
}
