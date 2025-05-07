import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Searching for Employees | Support | Accoric Management",
    description: "Learn how to search for employees in your Accoric Management account.",
}

export default function Page() {
    return (
        <>
            <h1 id="search-employee-table">Search Employee Table</h1>
            <h2 id="objective">Objective</h2>
            <p>To manage the Employee Table on the Employee Dashboard.</p>
            <h2 id="steps">Steps</h2>
            <ol>
                <li>Locate the <strong>search bar</strong> above the Employee table.</li>
                <li>You may search by first, middle, or last name.</li>
                <li>Search by a particular certification by typing it into the &quot;Certification Name&quot; field. You may not need to type in the entire certification name.</li>
            </ol>
            <Image
                width={500}
                height={170}
                src="/Images/support-page-screenshots/accoric-management-search-employee-table.webp" 
                alt="accoric management screenshot" 
            />
        </>
    );
}