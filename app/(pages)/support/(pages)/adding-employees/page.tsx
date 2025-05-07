import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Adding Employees | Support | Accoric Management",
    description: "Learn how to add employees to your Accoric Management account.",
}

export default function Page() {
    return (
        <>
            <h1 id="adding-employees">Adding Employees</h1>
            <h2 id="objective">Objective</h2>
            <p>To add an employee to your Accoric Management account</p>
            <h2 id="steps">Steps</h2>
            <ol>
                <li>Navigate to <strong>Employee Dashboard</strong></li>
                <li>Click <strong>Add Employee.</strong></li>
                <li>
                    <p>Add pertinent employee information, such as name, address, phone number, email address,
                    job title, and emergency contact information.</p>
                    <Image
                        width={600}
                        height={370}
                        src="/Images/support-page-screenshots/accoric-management-add-employee-form.webp" 
                        alt="accoric screenshot" 
                    />
                    <ol>
                        <li>
                            Add a Profile picture. (<em>Preferred picture formats are .jpg or .png</em>). 
                            When added, employees by default are active; profile pictures will have a green outline, 
                            indicating they are active. Click{" "}
                            <a href="https://wwww.accoric.com/support/active-or-inactive-employees">Here</a>
                            to learn more about active/inactive status of employees.
                        </li>
                    </ol>
                </li>
            </ol>
        </>
    )
}