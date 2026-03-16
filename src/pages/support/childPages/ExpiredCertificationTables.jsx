import PageHeader from "../../../views/pageHeader";
import Image1 from '../../../assets/images/support/accoric-management-certification-options.webp';
import Image2 from '../../../assets/images/support/accoric-management-certification-groupings.webp';


function ExpiredCertificationTables() {

    return (
        <>
            <PageHeader title="Using Expired Certification Tables" ></PageHeader>
            <section class="support-section container my-5 grn-gradient-section ">
                <div class="card border-0 shadow-lg rounded-4 p-4">
                    <h2 class="fw-bold mb-3">Using the Expiring Certifications Table</h2>

                    <h4 class="fw-bold mb-3">Objective</h4>
                    <p>To use the expiring certification table effectively.</p>


                    <h4 class="fw-bold mb-3">Steps</h4>
                    <ol class="mb-4 fs-5">


                        <li>  Navigate to the bottom of the <strong>Employee Dashboard. </strong> </li>
                        <li>Employees listed in this table have one or more expired certifications, or upcoming certifications that are to expire within the timeframe set; update the timeframe at the top of the table by typing in how many days out you would like the table to filter to.
                            <p>(For Example: 30 days, 60 days, 90 days.)</p>
                        </li>
                        <li>
                            In the far-right column, you may <strong>Edit the Certification, View the Certification, and View the Employee. </strong>

                            <img src={Image1} alt="accoric-management-certification-options"></img>


                        </li>
                        <hr />



                    </ol>
                    <p>Grouping the Table</p>
                    <ol class="mb-4 fs-5">


                        <li> <strong>Default View:</strong> This will display employees' name and the certification they hold that is expiring. In this view, a line will be added for each certification that is expiring for that employee.
                            <p>(For example, if Matthew holds two certifications that are expiring - OSHA 30 in Construction, Scissor Lift Operator Certification - then two lines will be added to the table.) Default View is shown in this image.</p>

                            <img src={Image2} alt="accoric-management-certification-groupings"></img>
                        </li>

                        <li> <strong>Employee View:</strong> This will condense all expired certifications to each employee. Clicking
                            <strong>view</strong>  will show that employee's expired certifications in a table you may scroll through.</li>
                        <li> <strong>Certification View:</strong> This view will prompt the user to sort the table from a list of certifications in the dropdown. Certifications listed here are pulled from certification names you previously uploaded for employees.
                           

                        </li>
                         <p>For Example, if you upload a certification named "Forklift Operator" for an employee, that name will appear in the dropdown.</p>
                            <p>Selecting a certification type from this dropdown will filter the table to employees that are holding a certification of that type that is expired.</p>
                        




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
export default ExpiredCertificationTables