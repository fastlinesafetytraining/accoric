interface Redirect {
	source: string;
	destination: string;
	permanent: boolean;
}

export const redirects: Redirect[] = [
	{
		source: "/Home/DashCardPage",
		destination: "/accoric-dashcard",
		permanent: true,
	},
	{
		source: "/Home/DashCardPage",
		destination: "/accoric-dashcard",
		permanent: true,
	},
	{
		source: "/Home/ManagementPage",
		destination: "/accoric-management",
		permanent: true,
	},
	{
		source: "/Home/PricingPage",
		destination: "/pricing",
		permanent: true,
	},
	{
		source: "/ContactUs/Index",
		destination: "/contact-us",
		permanent: true,
	},
	{
		source: "/ContactUs",
		destination: "/contact-us",
		permanent: true,
	},
	{
		source: "/HelpGuide/SupportPage",
		destination: "/support",
		permanent: true,
	},
	{
		source: "/privacy-policy/index",
		destination: "/privacy-policy",
		permanent: true,
	},
	{
		source: "/TermsOfService/index",
		destination: "/terms-of-service",
		permanent: true,
	},
	{
		source: "/accoric-dashcard",
		destination: "/personal-dashcard",
		permanent: true,
	},
	{
		source: "/support/using-the-employee-table",
		destination: "/support/accoric-management/using-the-employee-table",
		permanent: true,
	},
	{
		source: "/support/searching-for-employees",
		destination: "/support/accoric-management/searching-for-employees",
		permanent: true,
	},
	{
		source: "/support/adding-employees",
		destination: "/support/accoric-management/adding-employees",
		permanent: true,
	},
	{
		source: "/support/adding-certifications",
		destination: "/support/accoric-management/adding-certifications",
		permanent: true,
	},
	{
		source: "/support/updating-employees",
		destination: "/support/accoric-management/updating-employees",
		permanent: true,
	},
	{
		source: "/support/using-expired-certification-table",
		destination:
			"/support/accoric-management/using-expired-certification-table",
		permanent: true,
	},
	{
		source: "/support/active-or-inactive-employees",
		destination: "/support/accoric-management/active-or-inactive-employees",
		permanent: true,
	},
	{
		source: "/support/using-notes",
		destination: "/support/accoric-management/using-notes",
		permanent: true,
	},
	{
		source: "/support/using-categories",
		destination: "/support/accoric-management/using-categories",
		permanent: true,
	},
	{
		source: "/support/generating-spreadsheets",
		destination: "/support/accoric-management/generating-spreadsheets",
		permanent: true,
	},
	{
		source: "/support/secondary-users",
		destination: "/support/accoric-management/secondary-users",
		permanent: true,
	},
	{
		source: "/support/forgot-password",
		destination: "/support/accoric-management/forgot-password",
		permanent: true,
	},
	{
		source: "/support/creating-automated-email-reminders",
		destination:
			"/support/accoric-management/creating-automated-email-reminders",
		permanent: true,
	},
	{
		source: "/support/viewing-requesting-and-deleting-dashcards",
		destination:
			"/support/accoric-management/viewing-requesting-and-deleting-dashcards",
		permanent: true,
	},
	{
		source: "/support/blogs",
		destination: "/blog",
		permanent: true,
	},
];
