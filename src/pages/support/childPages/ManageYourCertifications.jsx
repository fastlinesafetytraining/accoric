import PageHeader from "../../../views/pageHeader"
function ManageYourCertifications() {
  return (
    <>
    <PageHeader title="Manage Your Certifications"></PageHeader>
  <section class="support-section container my-5 grn-gradient-section ">
    <div class="card border-0 shadow-lg rounded-4 p-4">

   
        <h2 class="fw-bold mb-3">Managing Your Certifications</h2>



        
        <h4 class="fw-bold mb-3">Adding a Certification</h4>
        <ol class="mb-4 fs-5">
   
            <li> Tap <strong> "Certifications"</strong>  in the bottom navigation bar.</li>
            <li> Tap <strong>  "Add Certification"</strong>in the top right corner of the screen.</li>
            <li>
                Complete the required fields: Certification Name, Issued Date, Expiration Date.
            </li>
         
     
            <li>Toggle<strong> "Sensitive"</strong>if you want to keep it private (hidden from your public scan page).</li>
            <li>Tap <strong>"Save" </strong>to store it in your DASHcard.</li>
        </ol>


        <h4 class="fw-bold mb-3">Editing  a Certification</h4>
        <ol class="mb-4 fs-5">
         
            <li> Go to <strong>"Certifications"</strong> in the bottom navigation bar.</li>
           
            <li> Tap<strong>"View" </strong> next to the cert, then <strong> "Edit"</strong>.</li>
            <li>
                Make Your changes and tap <strong>"Save"</strong>.
            </li>
        </ol>

        <h4 class="fw-bold mb-3">Sharing  a Certification</h4>
        <ol class="mb-4 fs-5">

            <li> Go to <strong>"Certifications"</strong>.</li>
            
            <li> Tap<strong>"View" </strong> next to the cert you want to share..</li>
            <li>
                Tap <strong>"Share"</strong>  to send it via text, email, WhatsApp, or another app.
          
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
  export default ManageYourCertifications