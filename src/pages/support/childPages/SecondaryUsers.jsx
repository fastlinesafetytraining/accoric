import PageHeader from "../../../views/pageHeader";
import Image1 from '../../../assets/images/support/accoric-management-create-secondary-user.webp';
import Image2 from '../../../assets/images/support/accoric-management-secondary-user-access-level.webp';

function SecondaryUsers() {

    return (
        <>
       <PageHeader title="Secondary Users" ></PageHeader>  
        <section class="support-section container my-5 grn-gradient-section ">
                        <div class="card border-0 shadow-lg rounded-4 p-4">
        
                            <h2 class="fw-bold mb-3">Secondary Users</h2>
                            <h4 class="fw-bold mb-3">Objective</h4>
                            <p>To create secondary users and manage their permissions.</p>
        
        
                            <h4 class="fw-bold mb-3">Steps</h4>
                           
                            <p><strong>Creating Secondary Users</strong></p>
                            <p>Note: Only Admins can create secondary users.</p>
                            <ol class="mb-4 fs-5">

        
                                <li>  Navigate to <strong>  My Account. </strong></li>
                                <li> Click <strong>New User. </strong></li>
                                <li>Set their access level.</li>
                                <li>Enter the new user's email and their full name. Enter their password, enter your password, then click <strong>Create.</strong> </li>
        
                                <img src={Image1}  alt="accoric-management-create-secondary-user"></img>
        
        
        
                            </ol>
                         <hr />


                       <p><strong>Setting Access Levels </strong></p>
                      <ol>
                       <li>Change a user's access level by clicking on the access level. Or, click <strong>Edit,</strong>  and change their access level from the pop-up.</li>
                       
                       <img src={Image2} alt="accoric-management-secondary-user-access-level"></img>
                      </ol>
       
               
      
       
                
                      <ol>
                       <li> <strong>Admin Access:</strong> Enables access to all features on Accoric Management. Can create secondary users. This Access level is only given to <strong>One User</strong>  at the time of account set up.</li>
                       <li> <strong>Full Access:</strong>  Enables access to all features on Accoric Management with he exception of creating secondary users.</li>
                       <li> <strong>Restricted Access: </strong>Disables access to adding and deleting employees, but can create and delete certifications on employees' profiles.</li>

                       <li> <strong>View-Only Access:</strong> Unable to make any permanent changes to the account. Simply a viewing access level.</li>
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
export default SecondaryUsers