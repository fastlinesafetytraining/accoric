import { SupportMenu } from "@/types/supportMenu";


export const navMenuItems = [
  {
    key: "1",
    label: "Accoric Management",
    href: "/accoric-management",
  },
  {
    key: "2",
    label: "Personal DASHcard™",
    href: "/personal-dashcard",
  },
  {
    key: "3",
    label: "Pricing",
    href: "/pricing",
  },
  {
    key: "4",
    label: "Support",
    href: "/support",
  },
  {
    key: "5",
    label: "About Us",
    href: "/about-us",
  } 
];

export const supportMenu: SupportMenu[] = [
	{
		sectionTitle: "Explore Topics for Accoric Management Support",
		sectionItems: [
			{
				title: "Using The Employee Table",
				link: "/support/accoric-management/using-the-employee-table",
			},
			{
				title: "Searching For Employees",
				link: "/support/accoric-management/searching-for-employees",
			},
			{
				title: "Adding Employees",
				link: "/support/accoric-management/adding-employees",
			},
			{
				title: "Adding Certifications",
				link: "/support/accoric-management/adding-certifications",
			},
			{
				title: "Updating Employees",
				link: "/support/accoric-management/updating-employees",
			},
			{
				title: "Using Expired Certification Table",
				link: "/support/accoric-management/using-expired-certification-table",
			},
			{
				title: "Active/Inactive Employees",
				link: "/support/accoric-management/active-or-inactive-employees",
			},
			{
				title: "Using Notes",
				link: "/support/accoric-management/using-notes",
			},
			{
				title: "Using Categories",
				link: "/support/accoric-management/using-categories",
			},
			{
				title: "Generating Spreadsheets",
				link: "/support/accoric-management/generating-spreadsheets",
			},
			{
				title: "Secondary Users",
				link: "/support/accoric-management/secondary-users",
			},
			{
				title: "Forgot Password",
				link: "/support/accoric-management/forgot-password",
			},
			{
				title: "Creating Automated Email Reminders",
				link: "/support/accoric-management/creating-automated-email-reminders",
			},
			{
				title: "Viewing, Requesting, and Deleting Dashcards",
				link: "/support/accoric-management/viewing-requesting-and-deleting-dashcards",
			},
		],
	},
];

export default supportMenu;

