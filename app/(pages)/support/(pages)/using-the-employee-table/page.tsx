import Image from "next/image";

export default function Page() {
    return (
        <>
            <h1 id="using-the-employee-table">Using the Employee Table</h1>
            <h2 id="objective">Objective</h2>
            <p>To manage the Employee table on the Employee Dashboard.</p>
            <h2 id="steps">Steps</h2>
            <ol>
                <li>Navigate to the <strong>Employee Dashboard</strong>.</li>
                <li>Filter the table by name by clicking on either first name or last name in the table&apos;s header.</li>
                <li>To the right, clicking on <strong>Certifications</strong> will expand into a list of the employees&apos; certifications. You may scroll through the list of certifications an employee holds. Click on any certification to view an image of it.</li>
                <li>Click <strong>View</strong> to see the employee&apos;s profile page. Click <strong>Add Certification</strong> to upload a certification and its corresponding information to the employee&apos;s profile. Click <strong>Delete</strong> to permanently delete an employee from your account.</li>
            </ol>
            <p>
                <Image
                    width={766}
                    height={374}
                    src="/Images/support-page-screenshots/accoric-management-employee-dashboard-options.webp" 
                    alt="Employee Dashboard Options" 
                    title="Employee Dashboard Options"
                />
            </p>
            <ol>
                <li>Clicking on an employee&apos;s profile picture will change its active status. A green outline indicates active, while a grey outline indicates inactive.</li>
            </ol>
        </>
    );
}