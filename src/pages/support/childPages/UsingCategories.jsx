import PageHeader from "../../../views/pageHeader";
import Image1 from '../../../assets/images/support/accoric-management-create-category.webp';
import Image2 from '../../../assets/images/support/accoric-management-delete-category.webp';
import Image3 from '../../../assets/images/support/accoric-management-update-category-name.webp';

function UsingCategories() {
    return(
 <>
 <PageHeader title="Using Categories" ></PageHeader>
      <section class="support-section container my-5 grn-gradient-section ">
                 <div class="card border-0 shadow-lg rounded-4 p-4">
 
                     <h2 class="fw-bold mb-3">Creating and Using Categories</h2>
                     <h4 class="fw-bold mb-3">Objective</h4>
                     <p>To create and use categories. Categories are an efficient way to segment your workforce and properly staff jobs.</p>
 
 
                     <h4 class="fw-bold mb-3">Steps</h4>
                    
                     <p><strong>Create a Category:</strong></p>
                     <p>Note: Creating a category is not required, but to do so organizes the employees in your Accoric Management account.</p>
                     <ol class="mb-4 fs-5">
 
 
                         <li>  Click  <strong>  Categories </strong> from the right-side toolbar.</li>
                         <li>A Secondary toolbar will appear on the right side. Click <strong>New </strong> to create a new category. Type in the new category's name, and click <strong>Create</strong> </li>
                         <li>Clicking on the name of the category will pull up that category's employee information in a table</li>
 
                         <img src={Image1}  alt="accoric-management-create-category"></img>
 
 
 
                     </ol>
                  <hr />
                <p><strong>Deleting a Category:</strong></p>
               <ol>
                <li>Navigate to the <strong>Current Categories</strong> table.</li>
                <li>On the far-right Column, Click <strong>Delete Category.</strong> </li>
                <img src={Image2} alt="accoric-management-delete-category"></img>
               </ol>

               <hr />


             <p><strong>Viewing and Editing Information in a Category:</strong></p>
               <ol>
                <li>Clicking on the name of the category will pull up that category's employee information in a table.</li>
                <li>Tick the radio button for the employees you would like to move to another category. On the top-right, click <strong>Batch Actions.</strong> Use the dropdown to select which category you would like to move the selected employees to. Click <strong> Update.</strong></li>
                <img src={Image3} alt="accoric-management-update-category-name"></img>
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
export default UsingCategories