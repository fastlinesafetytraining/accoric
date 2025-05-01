import Image from "next/image";

interface EmailTemplateProps {
    fullName: string;
    email: string;
    companyName: string;
    phone: string;
    numberOfEmployees: number;
}

export default function EmailHtmlTemplate ({fullName, email, companyName, phone, numberOfEmployees}: EmailTemplateProps) {
    return (
        <div>
            <table style={{ border: "0",maxWidth: "600px", margin: "0 auto", backgroundColor: "#ffffff"}} cellPadding="0" cellSpacing="0">
            <tr>
                <td style={{padding: "20px", border: "0"}}>
                <table cellPadding="0" cellSpacing="0" width="100%">
                    <tr>
                    <td style={{textAlign: "center", padding: "20px 0"}}>
                        <Image
                        width={300}
                        height={100}
                        src="/svg/accoric-logo-svg.svg"
                        alt="Company Logo"
                        style={{maxWidth: "200px"}}
                        />
                    </td>
                    </tr>
                    <tr>
                    <td style={{padding: "20px 0"}}>
                        <h1 style={{color: "#333333", margin: "0", textAlign: "center"}}>
                        Welcome to Our Service
                        </h1>
                    </td>
                    </tr>
                    <tr>
                    <td style={{padding: "20px 0"}}>
                        <p style={{color: "#666666", lineHeight: "1.5", margin: "0"}}>
                        New Email from Accoric Website.
                        </p>
                    </td>
                    </tr>
                    <tr>
                    <table>
                        <tr>
                        <td style={{fontWeight: "700"}}>Name:</td>
                        <td>{fullName}</td>
                        </tr>
                        <tr>
                        <td style={{fontWeight: "700"}}>Email</td>
                        <td>{email}</td>
                        </tr>
                        <tr>
                        <td style={{fontWeight: "700"}}>Company:</td>
                        <td>{companyName}</td>
                        </tr>
                        <tr>
                        <td style={{fontWeight: "700"}}>Phone</td>
                        <td>{phone}</td>
                        </tr>
                        <tr>
                        <td style={{fontWeight: "700"}}>Employee&apos;s to be tracked:</td>
                        <td>{numberOfEmployees}</td>
                        </tr>
                    </table>
                    </tr>
                    <tr>
                    <td style={{padding: "20px 0"}}>
                        <a
                        href="#"
                        className="button"
                        style={{
                            color: "white",
                            textDecoration: "none",
                            float: "right",
                            marginRight: "20px",
                            backgroundColor: "#4caf50",
                            padding: "12px 20px",
                            borderRadius: "4px",
                            display: "inline-block",
                        }}
                        
                        >
                        Get Started
                        </a>
                    </td>
                    </tr>
                    <tr>
                    <td style={{padding: "20px 10px", borderTop: "1px solid #eeeeee"}}>
                        <p style={{color: "#999999", fontSize: "12px", margin: "0"}}>
                        © 2025 Accoric. All rights reserved.
                        </p>
                    </td>
                    </tr>
                </table>
                </td>
            </tr>
            </table>
        </div>
    )
}


