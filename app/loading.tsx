import React from "react";
import { Flex, Typography } from "antd";
import GridLoader from "react-spinners/GridLoader";
import globalPrimaryColor from "@styles/scss-vars";

const Loading: React.FC = () => {
	return (
		<Flex
			vertical
			align='center'
			justify='center'
			style={{ gap: 10, height: "70vh", width: "100vw" }}
		>
			<GridLoader color={globalPrimaryColor.globalPrimaryColor} size={20} />
			<Typography.Title level={2}>Loading...</Typography.Title>
		</Flex>
	);
};

export default Loading;
