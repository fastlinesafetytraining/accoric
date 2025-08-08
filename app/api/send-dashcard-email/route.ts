import { NextRequest, NextResponse } from "next/server";

interface DashcardEmailInputProps {
    email: string;
    fullName: string;
    phone: string;
}


export async function POST(request: NextRequest) {
    const {email, fullName, phone} = (await request.json()) as DashcardEmailInputProps;

    const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            from: `Accoric <${process.env.EMAIL_FROM as string}>`,
            to: process.env.EMAIL_TO as string,
            cc: process.env.EMAIL_CC as string,
            bcc: process.env.EMAIL_BCC as string,
            subject: "New Accoric Dashcard Request from " + fullName,
            html: `
            <body style="width: 100%;font-family:Helvetica,Arial,sans-serif;">
            <table border="0" max-width="600px" margin="0 auto" bgcolor="#ffffff" cellpadding="0" cellspacing="0">
                <tr>
                    <td>
                        <img src="https://accoric.com/Images/accoric-logo.png" alt="Accoric Logo" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <h1>New Accoric Dashcard Request</h1>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p style="font-size: 16px; font-weight: 400; color: #333333;">
                            A new dashcard request has been made.
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p style="font-size: 16px; font-weight: 400; color: #333333;">
                            A new dashcard request has been made. using the email:
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p style="font-size: 16px; font-weight: 400; color: #333333;">
                            Full Name: ${fullName}
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p style="font-size: 16px; font-weight: 400; color: #333333; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
                            Email: ${email}
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p style="font-size: 16px; font-weight: 400; color: #333333;">
                            Phone: ${phone}
                        </p>
                    </td>
                </tr>
            </table>
            </body>
            `,
        }),
    })

    if (!res.ok) {
        return NextResponse.json({ error: "Email sending failed" }, { status: 500 });
    } else if (res.ok) {
        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } else {
        return NextResponse.json({ error: "Email sending failed, please try again later" }, { status: 500 });
    }
}