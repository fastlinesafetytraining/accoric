import PageHeader from "../../../views/pageHeader";
import Image1 from '../../../assets/images/support/accoric-management-forgot-password.webp';
import Image2 from  '../../../assets/images/support/accoric-management-reset-password.webp';
import Image3 from '../../../assets/images/support/accoric-management-set-new-password.webp';



function ForgotPassword() {
    return (
<>
<PageHeader title="Forgot Password" ></PageHeader>
   <section class="support-section container my-5 grn-gradient-section ">
                        <div class="card border-0 shadow-lg rounded-4 p-4">
        
                            <h2 class="fw-bold mb-3">Resetting Your Password</h2>
                            <h4 class="fw-bold mb-3">Objective</h4>
                            <p>To reset your password.</p>
        
        
                            <h4 class="fw-bold mb-3">Steps</h4>
                            <p>Note: Secondary users must sign in themselves to change their passwords.</p>
                            <ol class="mb-4 fs-5">

      
                                <li>     Click  <strong> Forgot Password </strong> on the login page.</li>
                                <img src={Image1} alt="accoric-management-forgot-password"></img>
                                <li> Enter the email address registered with your Accoric Management Account.</li>
                                <li>An email will be sent to this email address with a link to change your password. The link expires after you reset your password</li>
                                <li>

                                    You may also change your password from the <strong>My Account</strong>  page. Enter and confirm your new password. Then, enter your current password and click <strong>Update.</strong>   Your current password will also display. Reset any secondary user's password by simply clicking  <strong>Reset Password.</strong> 
                                </li>
        
                                <img src={Image2}  alt="accoric-management-reset-password"></img>
                               <img src={Image3}  alt="accoric-management-set-new-password"></img>
        
        
        
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
export default ForgotPassword