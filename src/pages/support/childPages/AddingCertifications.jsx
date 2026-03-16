import PageHeader from "../../../views/pageHeader";
import Image1 from '../../../assets/images/support/accoric-management-add-certificate-one.webp';
import Image2 from '../../../assets/images/support/accoric-management-add-certificate-two.webp';

function AddingCertifications() {
    return (
   <>
   <PageHeader title="Adding Certifications"></PageHeader>
     <section class="support-section container my-5 grn-gradient-section ">
                   <div class="card border-0 shadow-lg rounded-4 p-4">
   
                       <h2 class="fw-bold mb-3">Adding a Certification to an Employee</h2>
                       <h4 class="fw-bold mb-3">Objective</h4>
                       <p>To add a certification to an employee.</p>
   
   
                       <h4 class="fw-bold mb-3">Steps</h4>
                       <p>From the Employee Dashboard</p>
                       <ol class="mb-4 fs-5">
   
   
                           <li>   Navigate to <strong>       Employee Dashboard  </strong>.</li>
                           <li> Hover over the arrow on the right, and click  <strong> New Certification.</strong>
                            Or, click <strong>View,</strong> scroll down to the <strong>Certifications</strong>
                            table on the employee's profile page, and click  <strong>New Certification.</strong>
                           </li>
                           <li>Add pertinent information, such as a name for the certification and an issue and expiration date.</li>
                           <li>Upload a front and back picture of the certification. Acceptable formats are .jpg, .png, and .pdf.</li>
                           <li>Click  <strong>Upload.</strong></li>
                           <img src={Image1}  alt="accoric-management-add-certificate-one"></img>
                           <hr />
                        
                          <img src={Image2}  alt="accoric-management-add-certificate-two"></img>
   
                          
   
   
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
export default AddingCertifications