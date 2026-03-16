import PageHeader from "../../../views/pageHeader";
import Image from '../../../assets/images/support/accoric-management-add-employee-form.webp';

function UpdatingEmployee() {
    return (
        <>
            <PageHeader title="Updating Employee" ></PageHeader>
            <section class="support-section container my-5 grn-gradient-section ">
                <div class="card border-0 shadow-lg rounded-4 p-4">

                    <h2 class="fw-bold mb-3">Updating an Employee</h2>
                    <h4 class="fw-bold mb-3">Objective</h4>
                    <p>To update employee information in your Accoric Management account.</p>


                    <h4 class="fw-bold mb-3">Steps</h4>
                    <ol class="mb-4 fs-5">


                        <li>  Navigate to  <strong>     Employee Dashboard.  </strong>.</li>
                        <li>In the far-right column of the Employee table, click <strong> View Employee.</strong></li>
                        <li>Edit any employee data, then click <strong>Update</strong>at the bottom of the Employee profile page.</li>


                    </ol>
                    <img src={Image}  alt="accoric-management-add-employee-form"></img>


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
export default UpdatingEmployee