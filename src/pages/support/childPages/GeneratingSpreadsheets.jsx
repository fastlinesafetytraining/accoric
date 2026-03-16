import PageHeader from "../../../views/pageHeader";
import Image from "../../../assets/images/support/accoric-management-generate-spreadsheet.webp";

function GeneratingSpreadsheets() {
    return (
        <>
            <PageHeader title="Generating SpreadSheets" ></PageHeader>
            <section class="support-section container my-5 grn-gradient-section ">
                <div class="card border-0 shadow-lg rounded-4 p-4">

                    <h2 class="fw-bold mb-3">Generating Spreadsheets</h2>
                    <h4 class="fw-bold mb-3">Objective</h4>
                    <p>To create a variety of spreadsheets from information uploaded to you Accoric Management Account.</p>


                    <h4 class="fw-bold mb-3">Steps</h4>

                    <ol class="mb-4 fs-5">



                        <li>   Navigate to <strong>       Employee Dashboard  </strong>.</li>
                        <li>  Click  <strong>  Create Spreadsheet</strong> at the top-right of the Employee Table.
                        </li>
                        <li>Specify the category from which you would like to pull information from by using the dropdown menu.</li>
                    
                        <li>Specify if you would like to generate a spreadsheet for employees that are active, inactive, or all, but using the corresponding option button.</li>
                        <li> <strong>Personal Information: </strong> Tick the option button for the personal information you would like to include in your spreadsheet</li>

                        <li> <strong>Certification Information: </strong> Specify the type of certification you would like the certification to filter for. Or, Click All Certifications to include <strong> all certifications.</strong></li>
                        <li>In the <strong>Expiring In</strong>  to filter the spreadsheet to certifications only expiring in that preset timeframe. Spreadsheets will always show certifications that are currently expired.</li>
                        <li>Name the spreadsheet, then click <strong>Create.</strong> </li>

                    </ol>
                    <img src={Image} alt="accoric-management-generate-spreadsheet"></img>

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
export default GeneratingSpreadsheets