import { Link } from "react-router-dom";
import PageHeader from "../../views/pageHeader"
function Support() {
    return (
        <>
            <PageHeader title="Support Center" description="Welcome to our support center. Here you'll find comprehensive guides and documentation to help you start working with our products as quickly as possible."></PageHeader>




            <section class="support-personaldashcard-section container my-5  ">
                <div class="card border-0 shadow-lg rounded-5 p-5">


                    <h1 class="fw-normal display-4 mb-5">Explore Topics for Personal DASHcard™ Support</h1>
                    <div class="support-buttons d-flex align-items-center justify-content-between">

                        <Link to="/support/getting-started" className="nav-link">Getting Started</Link>
                        <Link to="/support/manage-your-certifications" className="nav-link">Manage Your Ceritifications</Link>
                        <Link to="/support/certifications-reminders" className="nav-link">Certification Reminders</Link>
                        <Link to="/support/dashcard-and-account" className="nav-link">Your DASHcard and Account</Link>

                    </div>


                </div>
            </section>


            <section class="support-accoricmanagement-section container my-5 mb-5  ">
                <div class="card border-0 shadow-lg rounded-5 p-5">

                    <h1 class="fw-normal display-4 mb-5">Explore Topics for Personal DASHcard™ Support</h1>
                    <div class="support-buttons d-flex align-items-center justify-content-between">



                        <a >Using The Employee Table</a>
                        <a > Searching For Employees</a>
                        <a> Adding Employees</a>

                    </div>
                    <div class="support-buttons d-flex align-items-center justify-content-between">



                        <a >Adding Certifications</a>
                        <a >Updating Employees</a>
                        <a >Using Expired Certification Table</a>

                    </div>

                    <div class="support-buttons d-flex align-items-center justify-content-between">



                        <a >Active/Inactive Employees</a>
                        <a >Using Notes</a>
                        <a>Using Categories</a>

                    </div>

                    <div class="support-buttons d-flex align-items-center justify-content-between">



                        <a >Generating Spreadsheets</a>
                        <a >Secondary Users</a>
                        <a >Forgot Password</a>

                    </div>
                    <div class="support-buttons d-flex align-items-center justify-content-between">




                        <a>Creating Automated Email Reminders</a>
                        <a >Viewing, Requesting, and Deleting Dashcards</a>


                    </div>


                </div>
            </section>

        </>
    );
}

export default Support;
