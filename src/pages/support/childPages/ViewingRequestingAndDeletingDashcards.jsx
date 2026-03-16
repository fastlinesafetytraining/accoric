import PageHeader from "../../../views/pageHeader";
import Image from "../../../assets/images/support/accoric-management-request-new-card.webp";

function ViewingRequestingAndDeletingDashcards() {
    return (
 <>
 <PageHeader title="Viewing Requesting And Deleting Dashcards" ></PageHeader>

   <section class="support-section container my-5 grn-gradient-section ">
                         <div class="card border-0 shadow-lg rounded-4 p-4">
         
                             <h2 class="fw-bold mb-3">Viewing, Requesting, and Deleting DashCard's</h2>
                             <h4 class="fw-bold mb-3">Objective</h4>
                             <p>To view, request, and delete DashCard's.</p>
         
         
                             <h4 class="fw-bold mb-3">Steps</h4>
               
                             <ol class="mb-4 fs-5">
 
      
                                 <li>  From the Employee Dashboard, click    <strong> View </strong> </li>
                                 
                                 <li>On the employee's profile page, a picture display of the employee's DashCard will appear. The employee's current DashCard information will be visible, such as their name, issue date, expiration date, and DashCard ID Number.</li>
                                 <li>Click <strong> Request New Card </strong> to send an order notification to Accoric.</li>
                                 <li>
 
                                     Click  <strong>Cancel Card </strong> to send a cancel notification to Accoric.
                                 </li>
                                 <li>If the employee does not have a DashCard, it will be display as such.</li>
                                 <img src={Image}  alt="accoric-management-request-new-card"></img>
                             
         
         
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

export default ViewingRequestingAndDeletingDashcards