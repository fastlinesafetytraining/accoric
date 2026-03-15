import PageHeader from "../../../views/pageHeader"
function DashcardAndAccount() {
  return (
    <>
    <PageHeader title="Your Dashcard And Account"></PageHeader>
<section class="support-section container my-5 grn-gradient-section ">
    <div class="card border-0 shadow-lg rounded-4 p-4">

   
        <h2 class="fw-bold mb-3">Your DASHcard and Account</h2>



  
        <h4 class="fw-bold mb-3">Requesting a New DASHcard</h4>
        <ol class="mb-4 fs-5">

            <li>    From the <strong>    Home tab </strong> tap <strong>"Request New DASHcard"</strong>.</li>
            <li> Select your request type (New Renew, Cancel).</li>
            <li>
                Add an optional message.
            </li>

             
            <li>Tap<strong>"Save"</strong></li>
            <li>Track your card status on the Home tab.</li>
        </ol>


        <h4 class="fw-bold mb-3">Understanding Your Public Page</h4>
        <ol class="mb-4 fs-5">

            <li> Your public page auto-updates with any certifications you upload..</li>

            <li> Certifications marked <strong>"Sensitive" </strong>remain hidden.</li>
            <li>
                To access: Tap your DASHcard or scan the QR code using any smartphone camera.
            </li>
        </ol>

        <h4 class="fw-bold mb-3">Editing Your Profile</h4>
        <ol class="mb-4 fs-5">

            <li> Tap the <strong>Menu (☰) </strong> icon in the top left corner of the screen.</li>

            <li>Tap <strong>"Profile"</strong>,  then <strong>"Edit"</strong>. </li>
            <li>
                After updating your info, tap <strong>"Save"</strong>.

            </li>
        </ol>


        <h4 class="fw-bold mb-3">Viewing Billing Information</h4>
        <ol class="mb-4 fs-5">

            <li> Tap the menu (☰) icon and select <strong>"Billing History"</strong>.</li>

            <li>For Full details, view your Apple ID or Google Play account.</li>
          
        </ol>


        <h4 class="fw-bold mb-3">Cancelling Your Subscription</h4>
        <ol class="mb-4 fs-5">


            <li>To Cancel, manage your subscription through your Apple ID or Google Play account.
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
  export default DashcardAndAccount