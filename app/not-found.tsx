import { Flex } from "antd";
import { SiteButton } from "@/Components/UI";
import { LuHouse } from "react-icons/lu";

export default function NotFound() {
	return (
		<Flex
			style={{
				flexDirection: "column",
				gap: 10,
				height: "70vh",
				width: "100vw",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>404 - Page Not Found</h2>
			<p style={{ fontSize: "1.2rem" }}>
				Sorry, the page you are looking for does not exist.
			</p>
			<SiteButton
				href='/'
				title='Go to Home'
				type='secondary'
				icon={<LuHouse />}
				iconPosition='right'
			>
				Go back to Home
			</SiteButton>
		</Flex>
	);
}
