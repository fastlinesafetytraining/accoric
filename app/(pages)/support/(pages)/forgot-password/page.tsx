import Image from "next/image";

export default function Page() {
    return (
        <>
            <h1 id="resetting-your-password">Resetting Your Password</h1>
            <h2 id="objective">Objective</h2>
            <p>To reset your password.</p>
            <h2 id="steps">Steps</h2>
            <p><em>Note: Secondary users must sign in themselves to change their passwords.</em></p>
            <ol>
                <li>Click <strong>Forgot Password</strong> on the login page.</li>
                <li>
                    <Image
                        width={204}
                        height={161}
                        src="/Images/support-page-screenshots/accoric-management-forgot-password.webp" 
                        alt="Forgot Password on Login" 
                    />
                </li>
                <li>Enter the email address registered with your Accoric Management account.</li>
                <li>An email will be sent to this email address with a link to change your password. The link expires after you reset your password.</li>
                <li>You may also change your password from the <strong>Settings</strong> page. Enter and confirm your new password. Then, enter your current password and click <strong>Update.</strong></li>
            </ol>
        </>
    )
}