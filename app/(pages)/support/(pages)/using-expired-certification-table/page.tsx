import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Using the Expiring Certifications Table | Support | Accoric Management",
    description: "Learn how to use the expiring certification table effectively in your Accoric Management account.",
}

export default function Page() {
    return (
        <>
            <h1 id="using-the-expiring-certifications-table">Using the Expiring Certifications Table</h1>
            <h2 id="objective">Objective</h2>
            <p>To use the expiring certification table effectively.</p>
            <h2 id="steps">Steps</h2>
            <ol>
                <li>Navigate to the bottom of the <strong>Employee Dashboard.</strong></li>
                <li>Employees listed in this table have one or more expired certifications, or upcoming certifications that are to expire within the timeframe set; update the timeframe at the top of the table by typing in how many days out you would like the table to filter to.<br /><em>(For Example: 30 days, 60 days, 90 days.)</em></li>
                <li>In the far-right column, you may <strong>View Employee, View Image, Add Certification.</strong></li>
            </ol>
            <p>
                <Image
                    width={405}
                    height={184}
                    src="/Images/support-page-screenshots/accoric-management-certification-options.webp" 
                    alt="Actions for employee on the certifications table" 
                />
            </p>
            <h3 id="grouping-the-table">Grouping the Table</h3>
            <ol>
                <li>The following image displays the three types of groupings:</li>
            </ol>
            <p>
                <Image
                    width={344}
                    height={146}
                    src="/Images/support-page-screenshots/accoric-management-certification-groupings.webp" 
                    alt="Grouping Types for the certifications Table" 
                />
            </p>
            <ol>
                <li>
                    <strong>Default View:</strong> This will display employees&apos; name and the certification they hold that is expiring. In this view, a line will be added for each certification that is expiring for that employee.<br /><em>(For example, if Matthew holds two certifications that are expiring - OSHA 30 in Construction, Scissor Lift Operator Certification - then two lines will be added to the table.)</em><br />Default View is shown in this image.
                </li>
                <li>
                    <strong>Employee View:</strong> This will condense all expired certifications to each employee. Clicking <strong>view</strong> will show that employee&apos;s expired certifications in a table you may scroll through.
                </li>
                <li>
                    <strong>Certification View:</strong> This view will prompt the user to sort the table from a list of certifications in the dropdown. Certifications listed here are pulled from certification names you previously uploaded for employees.<br /><em>For Example, if you upload a certification named &quot;Forklift Operator&quot; for an employee, that name will appear in the dropdown.</em><br />Selecting a certification type from this dropdown will filter the table to employees that are holding a certification of that type that is expired.
                </li>
            </ol>
        </>
    );
}