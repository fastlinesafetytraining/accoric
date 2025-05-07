import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Secondary Users | Support | Accoric Management",
    description: "Learn how to create secondary users and manage their permissions in Accoric Management.",
}

export default function Page() {
    return (
        <>
            <h1 id="secondary-users">Secondary Users</h1>
            <h2 id="objective">Objective</h2>
            <p>To create secondary users and manage their permissions.</p>
            <h2 id="steps">Steps</h2>
            <h3>Creating Secondary Users</h3>
            <ol>
                <li>Navigate to <strong>Settings.</strong></li>
                <li>Enter a valid email address and the full name of the secondary user you would like to add.</li>
                <li>Click <strong>Create.</strong></li>
            </ol>
            <hr />
            <h3>Setting Access Levels</h3>
            <ol>
                <li>Change a user&apos;s access level by clicking on the access level.</li>
            </ol>
            <p>
                <Image
                    width={814}
                    height={169}
                    src="/Images/support-page-screenshots/accoric-management-secondary-user-access-level.webp" 
                    alt="Access Levels For Secondary Users" 
                />
            </p>
            <ol>
                <li><strong>Full Access:</strong> Enables access to all features on Accoric Management.</li>
                <li><strong>Restricted Access:</strong> Disables access to adding and deleting employees, but can create and delete certifications on employees&apos; profile.</li>
            </ol>
        </>
    );
}