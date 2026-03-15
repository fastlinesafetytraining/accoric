import PageHeader from "../../../views/pageHeader"
function CertificationReminders() {
    return (
        <>
            <PageHeader title="Certification Reminders"></PageHeader>
            <section class="support-section container my-5 grn-gradient-section ">
                <div class="card border-0 shadow-lg rounded-4 p-4">


                    <h2 class="fw-bold mb-3">Managing Your Training</h2>




                    <h4 class="fw-bold mb-3">Setting New Expiration Reminders</h4>
                    <p class="fs-5">(To Edit an existing reminder, use the Certifications tab or Reminders tab.)</p>
                    <ol class="mb-4 fs-5">

                        <li> Go to <strong>"Certifications"</strong>, then select and tap "Edit" on the desired certification.</li>
                        <li> In the <strong>Notification</strong> section, tap <strong>"New"</strong>.</li>
                        <li>
                            In the pop-up:

                            <ol class="mb-2 fs-5">
                                <li><strong>Days Before: </strong>Choose how many days in advance to begin reminders (e.g., 30 days).</li>
                                <li><strong>Send At: </strong> Pick the time of day to receive it.</li>

                                <li><strong>Repeat Notifications:</strong>Choose the frequency (daily, weekly, etc.).</li>
                            </ol>
                        </li>


                        <li>
                            Reminders will continue at your selected interval until the cert is renewed, deleted, or the reminder is turned off.
                        </li>
                        <li>Tap <strong>"Save"</strong>.</li>
                    </ol>


                    <h4 class="fw-bold mb-3">Editing Existing Expiration Reminder</h4>
                    <ul>
                        <li>
                            Option 1:

                            <ol class="mb-2 fs-5">
                                <li>Go to <strong>"Certifications"</strong></li>
                                <li>Tap <strong>"Edit"</strong> on the cert</li>

                                <li>Then Tap <strong>"Edit" </strong>under notifications.</li>
                            </ol>
                        </li>

                        <li>
                            Option 2:

                            <ol class="mb-2 fs-5">
                                <li>Go to <strong>"Reminders"</strong> tab (only visible if you've set reminders).</li>
                                <li>Tap <strong>"Edit"</strong> next to the reminder</li>


                            </ol>
                        </li>

                        <li>
                            In the Pop-up:

                            <ol class="mb-2 fs-5">
                                <li><strong>Days before:</strong> Set how early you want reminders.</li>
                                <li><strong>Send At:</strong> Choose notification time</li>
                                <li> <strong> Repeat:</strong> Set how often it repeats.</li>


                            </ol>
                        </li>
                        <li>
                            Reminders will continue until the cert is renewed, deleted, or the reminder is turned off.
                            Tap "Save" when done.
                        </li>

                    </ul>



                    <h4 class="fw-bold mb-3">Deleting Expiration Reminders</h4>
                    <ol class="mb-4 fs-5">

                        <li> Go to <strong>"Certifications"</strong> tab or <strong>"Reminders"</strong> tab</li>

                        <li>Tap <strong>"Edit"</strong> on the desired cert. </li>
                        <li>
                            In the Notification section, tap <strong>"Delete"</strong>  to remove the reminder.

                        </li>
                    </ol>


                    <h4 class="fw-bold mb-3">Viewing Billing Information</h4>
                    <ol class="mb-4 fs-5">

                        <li> Tap the menu (☰) icon and select <strong>"Billing History"</strong>.</li>

                        <li>For Full details, view your Apple ID or Google Play account.</li>

                    </ol>


                    <h4 class="fw-bold mb-3">Cancelling Your Subscription</h4>
                    <ol class="mb-4 fs-5">


                        <li>
                            To Cancel, manage your subscription through your Apple ID or Google Play account.
                        </li>

                    </ol>


                    <hr />


                    <p class="fs-5 text-center">
                        <span class="text-danger fw-semibold">Need more help?</span>
                        Email <a href="mailto:support@accoric.com">support@accoric.com</a> — we've got you covered.
                    </p>

                </div>
            </section>
        </>
    );
}
export default CertificationReminders