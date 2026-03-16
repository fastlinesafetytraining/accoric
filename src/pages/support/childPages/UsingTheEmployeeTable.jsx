import PageHeader from "../../../views/pageHeader";
import Image from '../../../assets/images/support/accoric-management-employee-dashboard-options.webp';

function UsingTheEmployeeTable() {
    return (
<>
<PageHeader title="Using The Employee Table"></PageHeader>
<section class="support-section container my-5 grn-gradient-section ">
    <div class="card border-0 shadow-lg rounded-4 p-4">
    
        <h4 class="fw-bold mb-3">Objective</h4>
        <p>To manage the Employee table on the Employee Dashboard.</p>


        <h4 class="fw-bold mb-3">Steps</h4>
        <ol class="mb-4 fs-5">
  
            <li>  Navigate to the <strong>Employee Dashboard  </strong> page. By default, all employees will appear here.</li>
            <li> To the right, hover over the arrow to either create a new certification, or to delete the employee.</li>
            <li>
                Click <strong>View</strong> to see the employee's profile page.
                
            </li>
         
     
          
        </ol>

        <img src={Image} alt="Accoric-management-employee-dashboard-options"></img>

 


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
export default UsingTheEmployeeTable