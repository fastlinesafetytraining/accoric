import Image from "next/image";

export default function Page() {
    return (
        <>
            <h1 id="creating-and-using-categories">Creating and Using Categories</h1>
            <h2 id="objective">Objective</h2>
            <p>To create and use categories. Categories are an efficient way to segment your workforce and properly staff jobs.</p>
            <h2 id="steps">Steps</h2>
            <h3>Create a Category:</h3>
            <p><em>Note: Creating a category is not required, but to do so organizes the employees in your Accoric Management account.</em></p>
            <ol>
                <li>Hover over <strong>Menu</strong> in the top-left. Click <strong>Categories.</strong></li>
                <li>On the top of the page, you will see <strong>Current Categories</strong> table. By default, there will be two categories: All  Employees, and Unassigned. These cannot be deleted. Type in the category&#39;s name and click <strong>Create.</strong> Categories you create will be listed alphabetically in the Current Categories table.</li>
            </ol>
            <p>
                <Image
                    width={500}
                    height={304}
                    src="/Images/support-page-screenshots/accoric-management-create-category.webp" 
                    alt="Creatingg Categories" 
                />
            </p>
            <ol>
                <li>Clicking on the name of the category will link you to a dropdown table, listing employees in that category.</li>
            </ol>
            <hr />
            <h3>Deleting a Category:</h3>
            <ol>
                <li>Navigate to the <strong>Current Categories</strong> table.</li>
                <li>In the far-right Colum, Click <strong>Delete</strong>.</li>
            </ol>
            <p>
                <Image
                    width={602}
                    height={104}
                    src="/Images/support-page-screenshots/accoric-management-rename-category.webp" 
                    alt="Creating Categories" 
                />
            </p>
            <ol>
                <li>When a category is deleted all of its employees are automatically assigned to the unassigned category.</li>
            </ol>
            <hr />
            <h3>Viewing and Editing Information in a Category:</h3>
            <ol>
                <li>Clicking on the name of the category will link you to a dropdown table, listing employees in that category.</li>
                <li>Tick the radio button for the employees you would like to move to another category. Under Data Actions, use the dropdown to select which category you would like to move the selected employees to. Click <strong>Update.</strong></li>
            </ol>
            <p>
                <Image
                    width={2590}
                    height={1869}
                    src="/support-page-screenshots/accoric-management-update-category-name.webp" 
                    alt="Creating Categories" 
                />
            </p>
            <ol>
                <li>From here the active status of employees can be changed as well.</li>
            </ol>
            <hr />
            <h3>Activating a Category:</h3>
            <p><em>Note: Activating a category is necessary for it to be shown on the Employee Dashboard.</em></p>
            <ol>
                <li>Navigate to <strong>Categories.</strong></li>
                <li>Locate the category you wish to activate. Expand the dropdown and click on <strong>Activate</strong> at the top-right.</li>
            </ol>
            <p>
                <Image
                    width={1108}
                    height={337}
                    src="/Images/support-page-screenshots/accoric-management-activate-category.webp" 
                    alt="Creating Categories" 
                />
            </p>
        </>
    );
}