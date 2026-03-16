import PageHeader from "../../../views/pageHeader";
import Image from '../../../assets/images/support/accoric-management-search-employee-table.webp'

function SearchingForEmployees() {
    return (
   <>
   <PageHeader title="Searching for Employees" ></PageHeader>
  <section class="support-section container my-5 grn-gradient-section ">
      <div class="card border-0 shadow-lg rounded-4 p-4">
      
       <h2 class="fw-bold mb-3">Search Employee Table</h2>
          <h4 class="fw-bold mb-3">Objective</h4>
          <p>To manage the Employee Table on the Employee Dashboard.</p>
  
  
          <h4 class="fw-bold mb-3">Steps</h4>
          <ol class="mb-4 fs-5">
  
              <li>     Locate the <strong> search bar  </strong>above the Employee table.</li>
              <li>You may search by name, in any order, or by certification.</li>
              
            
           
       
            
          </ol>
  
          <img src={Image} alt="accoric-management-search-employee-table"></img>
  
   
  
  
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
export default SearchingForEmployees