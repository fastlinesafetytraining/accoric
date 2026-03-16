import PageHeader from "../../../views/pageHeader";
import Image from '../../../assets/images/support/accoric-management-new-automated-email-reminder.webp';

function CreatingAutomatedEmailReminders() {
    return(
        <>
        <PageHeader title="Creating Automated Email Reminders" ></PageHeader>
           <section class="support-section container my-5 grn-gradient-section ">
                                <div class="card border-0 shadow-lg rounded-4 p-4">
                
                                    <h2 class="fw-bold mb-3">Creating Automated Email Reminders</h2>
                                    <h4 class="fw-bold mb-3">Objective</h4>
                                    <p>To create automated email reminders.</p>
                
                
                                    <h4 class="fw-bold mb-3">Steps</h4>
                                   
                                    <p><strong>Creating and Automated Email Reminder</strong></p>
                        
                                    <ol class="mb-4 fs-5">
        
                
                                        <li> Click <strong> New Email </strong> in the Email's page </li>
                                        <li> Enter the name of the automated email you wish to create. </li>
                                        <li>Click on as many categories as you wish that you would like the information for the email to be pulled from.</li>
                                        <li>Click on the secondary users that you wish to receive the automated email. <strong>Create.</strong> </li>
                                        <li>Enter the date and time in which you would like the automated email to start on.</li>
                                        <li>Repeat indicates the frequency in which the automated email is to be sent out. Click either <strong>Daily, Weekly, Monthly,</strong>  or <strong>Yearly</strong>  to select the frequency.</li>
                                        <li> <strong>Expiring</strong>  indicated how far out the automated email should capture certifications. For example, set it to 60 days to capture all certifications that are going to expire in 60 days.</li>
                                       <li>Fill out the message that the automated email will contain. This will be the body of the email. The subject of the email is prefilled.</li>
                                       <li>Click <strong>Create</strong> </li>
                                       <li>After creating the automated email, it will store in a list. From here, at a glance you will be able to see the details of the email.</li>
                                        {/* <img src={Image1}  alt="accoric-management-create-secondary-user"></img> */}
                
                
                
                                    </ol>
                                 <hr />
        
        
                               <p><strong>Setting Access Levels </strong></p>
                              <ol>
                               <li>Change a user's access level by clicking on the access level. Or, click <strong>Edit,</strong>  and change their access level from the pop-up.</li>
                               
                               <img src={Image} alt="accoric-management-new-automated-email-reminder"></img>
                              </ol>
               
                       <hr/>
              
               
                        <p> <strong>Editing an Automated Email Reminder</strong>  </p>
                              <ol>
                               <li> Click <strong>Edit.</strong></li>
                               <li> Adjust any information in the pop-up window.</li>
                              
                              
        
                               <li> Click <strong>Update.</strong> </li>
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
export default CreatingAutomatedEmailReminders