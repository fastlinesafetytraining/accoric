const testimonials: {
	companyLogo: string;
	companyName: string;
	author: string;
	quote: React.ReactElement;
}[] = [
	{
		companyLogo: "/Images/client-logos/related-services-logo.webp",
		companyName: "Related Services LLC",
		author: "Justin A.",
		quote: (
			<>
				&quot;Accoric Management has empowered Related Services LLC to <b>proactively manage employee credentials</b> and <b>certification status</b>, a significant improvement. We highly recommend it.&quot;
			</>
		)
	},
	{
		companyLogo: "/Images/client-logos/champion-scc-logo.webp",
		companyName: "Champion Painting",
		author: "Amel H.",
		quote: (
			<>
				&quot;Accoric Management&apos;s capabilities have enabled Champion Painting&apos;s management team to bid and <b>pre-plan projects more efficiently</b> with <b>easy access to all employee training credentials</b>.&quot;
			</>
		)
	},
	{
		companyLogo: "/Images/client-logos/millbrook-logo.webp",
		companyName: "Millbrook Fire",
		author: "Nick D.",
		quote: (
			<>
				&quot;With Accoric Management&apos;s unparalleled safety management and proactive approach to certifications, we&apos;ve experienced significantly downtime prevention. It&apos;s an investment that <b>pays for itself in the first month!</b>&quot;
			</>
		),
	},
];

export default testimonials;
