import PageHeader from "../../../views/pageHeader";
import Image from "../../../assets/images/support/accoric-management-notes.webp";

function UsingNotes() {
    return (
 <>
 <PageHeader title="Using Notes" ></PageHeader>
 <section class="support-section container my-5 grn-gradient-section ">
       <div class="card border-0 shadow-lg rounded-4 p-4">
       
        <h2 class="fw-bold mb-3">Using Notes </h2>
           <h4 class="fw-bold mb-3">Objective</h4>
           <p>To use the notes section on the Employee Profile page.</p>
   
   
           <h4 class="fw-bold mb-3">Steps</h4>
           <ol class="mb-4 fs-5">
   
               <li>    Navigate to any  <strong>Employee Profile Page.</strong></li>
               <li>Type your notes into the box. You may bold, italicize, underline, and make numbered lists.</li>
               <li>Click  <strong>Update.</strong> </li>
               
             
            
        
             
           </ol>
   
           <img src={Image} alt="accoric-management-notes"></img>
   
    
   
   
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
export default UsingNotes