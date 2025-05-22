import { Flex, Typography } from "antd";
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
			<Typography.Title level={2}>404 - Page Not Found</Typography.Title>
			<Typography.Paragraph style={{ fontSize: "1.2rem" }}>
				Sorry, the page you are looking for does not exist.
			</Typography.Paragraph>
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
