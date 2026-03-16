import { Link } from "react-router-dom";
import tick from "../../assets/images/tick.svg";
import PageHeader from "../../views/pageHeader"
function Support() {
    return (
        <>
            <PageHeader title="Support Center" description="Welcome to our support center. Here you'll find comprehensive guides and documentation to help you start working with our products as quickly as possible."></PageHeader>

            <div class="container b-child-container white mt-5">
                <section class="a-section">
                    <div>
                        <h2 class="title mb-4">
                            Explore Topics for Personal DASHcard™ Support

                        </h2>

                        <div class="row">

                            <div class="col-md-6 b-boxes2">
                                <div class="b-box2">
                                    <div class="icon">
                                        <img src={tick} />
                                    </div>
                                    <div class="text"> <a href="/support/getting-started">Getting Started</a> </div>
                                </div>

                                <div class="b-box2">
                                    <div class="icon">
                                        <img src={tick} />
                                    </div>
                                    <div class="text"><a href="/support/manage-your-certifications">Manage Your Ceritifications</a></div>
                                </div>

                            </div>
                            <div class="col-md-6 b-boxes2">
                                <div class="b-box2" >
                                    <div class="icon">
                                        <img src={tick} />
                                    </div>
                                    <div class="text"><a href="/support/certifications-reminders">Certification Reminders</a></div>
                                </div>

                                <div class="b-box2">
                                    <div class="icon">
                                        <img src={tick} />
                                    </div>
                                    <div class="text"><a href="/support/dashcard-and-account">Your DASHcard and Account</a></div>
                                </div>
                            </div>







                        </div>
                    </div>
                </section>
            </div>

            <div class="container b-child-container white mt-4">
                <section class="a-section">
                    <div>
                        <h2 class="title mb-4">
                            Explore Topics for Accoric Management Support

                        </h2>

                        <div class="row">
                            <div class="col-md-4 b-boxes2">
                                <div class="b-box2">
                                    <div class="icon">
                                        <img src={tick} />
                                    </div>
                                    <div class="text"> <a href="/support/using-the-employee-table">Using The Employee Table</a> </div>
                                </div>


                                <div class="b-box2 ">
                                    <div class="icon">
                                        <img src={tick} />
                                    </div>
                                    <div class="text"> <a href="/support/searching-for-employees">Searching For Employees</a></div>
                                </div>
                                <div class="b-box2 ">
                                    <div class="icon">
                                        <img src={tick} />
                                    </div>
                                    <div class="text"> <a href="/support/adding-employees">Adding Employees</a></div>

                                </div>

                            </div>

                            <div class="col-md-4 b-boxes2">
                                <div class="b-box2  ">
                                    <div class="icon">
                                        <img src={tick} />
                                    </div>
                                    <div class="text"><a href="/support/adding-certifications" >Adding Certifications</a> </div>
                                </div>


                                <div class="b-box2 ">
                                    <div class="icon">
                                        <img src={tick} />
                                    </div>
                                    <div class="text"><a href="/support/updating-employee">Updating Employees</a></div>
                                </div>

                                <div class="b-box2 ">
                                    <div class="icon">
                                        <img src={tick} />
                                    </div>
                                    <div class="text"><a href="/support/expired-certification-tables" >Using Expired Certification Table</a></div>
                                </div>

                            </div>


                            <div class="col-md-4 b-boxes2">
                                <div class="b-box2  ">
                                    <div class="icon">
                                        <img src={tick} />
                                    </div>
                                    <div class="text"> <a href="/support/active-inactive-status" >Active/Inactive Employees</a> </div>
                                </div>


                                <div class="b-box2 ">
                                    <div class="icon">
                                        <img src={tick} />
                                    </div>
                                    <div class="text"><a href="/support/using-notes" >Using Notes</a></div>

                                </div>


                                <div class="b-box2 ">
                                    <div class="icon">
                                        <img src={tick} />
                                    </div>
                                    <div class="text"><a href="/support/using-categories">Using Categories</a></div>
                                </div>

                            </div>



                            <div class="col-md-4 b-boxes2">
                                <div class="b-box2 ">
                                    <div class="icon">
                                        <img src={tick} />
                                    </div>
                                    <div class="text">   <a href="/support/generating-spreadsheets" >Generating Spreadsheets</a> </div>
                                </div>

                                <div class="b-box2 ">
                                    <div class="icon">
                                        <img src={tick} />
                                    </div>
                                    <div class="text"><a href="/support/secondary-users" >Secondary Users</a> </div>
                                </div>

                                <div class="b-box2 ">
                                    <div class="icon">
                                        <img src={tick} />
                                    </div>
                                    <div class="text"><a href="/support/forgot-password" >Forgot Password</a></div>
                                </div>

                            </div>

                            <div class="col-md-4 b-boxes2">
                                <div class="b-box2 ">
                                    <div class="icon">
                                        <img src={tick} />
                                    </div>
                                    <div class="text">   <a href="/support/creating-automated-email-reminders" >Creating Automated Email Reminders</a> </div>
                                </div>

                                <div class="b-box2 ">
                                    <div class="icon">
                                        <img src={tick} />
                                    </div>
                                    <div class="text"><a href="/support/viewing-requesting-and-deleting-dashcard">Viewing, Requesting, and Deleting Dashcards</a> </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </section>
            </div>



        </>
    );
}

export default Support;
