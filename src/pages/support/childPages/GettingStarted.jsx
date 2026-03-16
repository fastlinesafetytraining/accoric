import PageHeader from "../../../views/pageHeader"
function GettingStarted() {
  return (
    <>
    <PageHeader title="Getting Started"></PageHeader>
    <section class="support-section container my-5 grn-gradient-section ">
    <div class="card border-0 shadow-lg rounded-4 p-4">

      
        <h2 class="fw-bold mb-3">Get Started</h2>

       
        <h4 class="fw-semibold mb-2">Introduction</h4>
        <p class="mb-4 fs-5">
            Welcome to the Personal DASHcard™ app — your all-in-one tool for managing your certifications.
            This guide walks you through key features so you can stay organized, avoid expired certs,
            and maintain full control of your credentials.
        </p>

   
        <h4 class="fw-bold mb-3">What's the Groundswell Program?</h4>
        <ol class="mb-4 fs-5">
            <li>Refer <strong>3+ coworkers</strong> to the app.</li>
            <li>Receive <strong>2 free DASHcard replacements</strong> — whether lost or for future renewal (a $50 value).</li>
            <li>
                Once your three friends are signed up, you will automatically be registered in the Groundswell Program;
                you'll be able to see how many free replacements you have left underneath the "Request New FASHcard"
                button on your home page.
            </li>
        </ol>
        <hr />

        
        <p class="fs-5 text-center" >
            <span class="text-danger fw-semibold">Need more help?</span>
            Email <a href="mailto:support@accoric.com">support@accoric.com</a> — we've got you covered.
        </p>

    </div>
</section>
    </>
  );
}
  export default GettingStarted