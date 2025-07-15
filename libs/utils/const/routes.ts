import { SupportMenu } from "@/types/supportMenu";


export const navMenuItems = [
  {
    key: "1",
    label: "Accoric Management",
    href: "/accoric-management",
  },
  {
    key: "2",
    label: "Personal DashCard",
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
		sectionTitle: "Product Support",
		sectionItems: [
			{
				title: "Using The Employee Table",
				link: "/support/using-the-employee-table",
			},
			{
				title: "Searching For Employees",
				link: "/support/searching-for-employees",
			},
			{
				title: "Adding Employees",
				link: "/support/adding-employees",
			},
			{
				title: "Adding Certifications",
				link: "/support/adding-certifications",
			},
			{
				title: "Updating Employees",
				link: "/support/updating-employees",
			},
			{
				title: "Using Expired Certification Table",
				link: "/support/using-expired-certification-table",
			},
			{
				title: "Active/Inactive Employees",
				link: "/support/active-or-inactive-employees",
			},
			{
				title: "Using Notes",
				link: "/support/using-notes",
			},
			{
				title: "Using Categories",
				link: "/support/using-categories",
			},
			{
				title: "Generating Spreadsheets",
				link: "/support/generating-spreadsheets",
			},
			{
				title: "Secondary Users",
				link: "/support/secondary-users",
			},
			{
				title: "Forgot Password",
				link: "/support/forgot-password",
			},
			{
				title: "Creating Automated Email Reminders",
				link: "/support/creating-automated-email-reminders",
			},
			{
				title: "Viewing, Requesting, and Deleting Dashcards",
				link: "/support/viewing-requesting-and-deleting-dashcards",
			},
		],
	},
];

export default supportMenu;

