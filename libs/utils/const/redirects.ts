
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
   }
]