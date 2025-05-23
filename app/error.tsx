"use client";
import { SiteButton } from "@/Components/UI";
import { LuHouse } from "react-icons/lu";
import { Flex } from "antd";

export default function Error() {
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
			<h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Something went wrong!</h2>
			<p style={{ fontSize: "1.2rem" }}>
				We apologize for the inconvenience. Please try again.
			</p>

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
