import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Generating Spreadsheets | Support | Accoric Management",
    description: "Learn how to generate spreadsheets from information uploaded to your Accoric Management account.",
}

export default function Page() {
    return (
        <>
            <h1 id="generating-spreadsheets">Generating Spreadsheets</h1>
            <h2 id="objective">Objective</h2>
            <p>To create a variety of spreadsheets from information uploaded to you Accoric Management Account.</p>
            <h2 id="steps">Steps</h2>
            <ol>
                <li>Navigate to <strong>Employee Dashboard.</strong></li>
                <li>Click Spreadsheet at the top-right of the Employee Table.</li>
                <li>Specify the category you would like to create the spreadsheet for, and any personal information you would like included.</li>
            </ol>
            <Image
                width={907}
                height={865}
                src="/Images/support-page-screenshots/accoric-management-generate-spreadsheet.webp" 
                alt="generate Spreadsheet" 
            />
            <ol>
                <li><strong>Certification Name:</strong> You may create a spreadsheet by a specific certification name, filtering all employees in the specified category to those that hold the certification you indicated in the text filed.</li>
                <li><strong>All Certifications:</strong> You may create a spreadsheet for all certifications that all employees hold in the specified category.</li>
                <li><strong>No Certification:</strong> You may create a spreadsheet showing just the employees&#39; personal information.</li>
                <li>After specifying the type of filtering, you may indicate the expiration status. Ticking <strong>Previously Expired</strong> and specifying how many days in the future you would like to view certifications in the <strong>Expiring In</strong> number field, will display already-expired certifications, and those that are expiring in the amount of days you specified.</li>
                <li>Name the spreadsheet, then click <strong>Create.</strong></li>
            </ol>
        </>
    );
}