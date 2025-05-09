import { NextRequest, NextResponse } from "next/server";
import { EmailHtmlTemplate } from "@components/templates/EmailTemplate";
import { Resend } from "resend";
import type { pricingFormInputProps } from "@/types/pricingFormInputProps";

const RESEND_API_KEY = process.env.NEXT_PUBLIC_FORM_RESEND_API_KEY || process.env.RESEND_API_KEY;

if (!RESEND_API_KEY) {
    throw new Error('Resend API key is not configured');
}

export async function POST(request: NextRequest) {
    const resend = new Resend(RESEND_API_KEY);
    const { fullName, email, companyName, phone, numberOfEmployees } = await request.json() as pricingFormInputProps;

    const emailData = {
        from: process.env.FROM_EMAIL || "Accoric <webmaster@accoric.com>",
        to: process.env.TO_EMAIL || "no-reply@accoric.com",
        subject: `[${fullName}] from ${companyName}, New Email from Accoric Website`,
        react: EmailHtmlTemplate({ fullName, email, companyName, phone, numberOfEmployees })
    };

    try {
        const { data, error } = await resend.emails.send(emailData);

        if (error) {
            return NextResponse.json({ error: "Email sending failed before sending" }, { status: 400 });
        }

        return NextResponse.json({ message: "Email sent successfully", data }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: "Email sending failed!", details: error }, { status: 500 });
    }
}