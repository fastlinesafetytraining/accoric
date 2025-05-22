"use client";
import { SiteButton } from "@/Components/UI";
import { LuHouse } from "react-icons/lu";
import { Typography, Flex } from "antd";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<Flex
			vertical
			align='center'
			justify='center'
			style={{
				gap: 10,
				height: "70vh",
				width: "100vw",
			}}
		>
			<Typography.Title level={2}>Something went wrong!</Typography.Title>
			<Typography.Paragraph style={{ fontSize: "1.2rem" }}>
				We apologize for the inconvenience. Please try again.
			</Typography.Paragraph>

			<SiteButton
				href='/'
				title='Go to Home'
				type='primary'
				icon={<LuHouse />}
				iconPosition='right'
			>
				Go to Home
			</SiteButton>
		</Flex>
	);
}
