import PageHeader from "../../../views/pageHeader";
import Image1 from '../../../assets/images/support/accoric-management-employee-active-status.webp';
import Image2 from  '../../../assets/images/support/accoric-management-update-employee-active-status.webp';


function ActiveInActiveEmployee() {
return (
<>
<PageHeader title="Employee Active InActive Status" ></PageHeader>
  <section class="support-section container my-5 grn-gradient-section ">
        <div class="card border-0 shadow-lg rounded-4 p-4">
            <h2 class="fw-bold mb-3">Employee Active/Inactive Status</h2>

            <h4 class="fw-bold mb-3">Objective</h4>
            <p>To use the active/inactive functionality properly.</p>
    
    
            <h4 class="fw-bold mb-3">Steps</h4>
            <p>From the Employee Dashboard</p>
            <ol class="mb-4 fs-5">
                
      
                <li>  Navigate to <strong>Employee Dashboard. </strong> </li>
                <li>A green or grey outline will surround each employee's profile picture.
            

                   
                </li>
                    <p> <strong>Green</strong> indicates active status.</p> 
                 <p> <strong> Grey </strong> indicates inactive status.</p>
                 <p>Click on the profile picture to change the status.</p>
                    <img src={Image1}  alt="accoric-management-certification-options"></img>
                    
                 
    
                    
                
                <hr/>
             
         
              
            </ol>
            <p>From the Employee Profile</p>
                <ol class="mb-4 fs-5">
                
      
                <li>Navigate to <strong> Employee Profile</strong>  Page.
              <li>Locate the <strong>Status</strong>  box. Tick either the active or inactive radio button.</li>
                </li>
                <img src={Image2} alt="accoric-management-update-employee-active-status"></img>
       
          <li>Click <strong>Update </strong> at the bottom of the screen.</li>
            
             
         
              
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
export default ActiveInActiveEmployee