import EmailHtmlTemplate from "@components/templates/EmailTemplate";
import { Resend } from "resend";
import { renderToStaticMarkup } from 'react-dom/server';

const resend = new Resend(process.env.NEXT_PUBLIC_FORM_RESEND_API_KEY);

interface EmailFormSubmissionValues {
    fullName: string;
    email: string;
    companyName: string;
    phone: string;
    numberOfEmployees: number;
}

export async function emailFormSubmission(values: EmailFormSubmissionValues) {
    const {fullName, email, companyName, phone, numberOfEmployees} = values;
    try {
       await resend.emails.send({
        from: process.env.NEXT_PUBLIC_EMAIL_TEST_SENDER || "",
        to: process.env.NEXT_PUBLIC_EMAIL_TEST_RECEIVER || "",
        subject: "New Email from Accoric",
        text: "New Email from Accoric",
        html: renderToStaticMarkup(EmailHtmlTemplate({fullName, email, companyName, phone, numberOfEmployees})),
    })
    return {status: 200, message: "Email sent successfully"};
    } 
    catch (error) {
        console.error("Email sent failed", error);
        return {status: 500, message: "Email sent failed"};
    }
}


