import PageHeader from "../../../views/pageHeader";
import Image from "../../../assets/images/support/accoric-management-add-employee-form.webp"

function AddingEmployee() {
    return (
        <>
            <PageHeader title="Adding Employees"></PageHeader>
            <section class="support-section container my-5 grn-gradient-section ">
                <div class="card border-0 shadow-lg rounded-4 p-4">

                    <h2 class="fw-bold mb-3">Adding Employees</h2>
                    <h4 class="fw-bold mb-3">Objective</h4>
                    <p>To add an employee to your Accoric Management account.</p>


                    <h4 class="fw-bold mb-3">Steps</h4>
                    <ol class="mb-4 fs-5">


                        <li>   Navigate to <strong>       Employee Dashboard  </strong>.</li>
                        <li>   Click  <strong> Add Employee.</strong></li>


                        <img src={Image}  alt="accoric-management-add-employee-form"></img>

                        <li>Add pertinent employee information, such as name, address, phone number, email address, job title, and emergency contact information.</li>
                        <li>Add a profile picture.
                            <p>(Preferred picture formats are .jpg or .png). When added, employees by default are active; profile pictures will have a green outline, indicating they are active.</p>
                            <p>Check out this support page to learn more about <a href="">Active/Inactive Status of Employees</a> .</p>
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
export default AddingEmployee