import React from "react";
import { Flex } from "antd";
import GridLoader from "react-spinners/GridLoader";
import { globalPrimaryColor } from "@/styles/exportVariables";

const Loading: React.FC = () => {
	return (
		<Flex
			vertical
			align='center'
			justify='center'
			style={{ gap: 10, height: "70vh", width: "100vw" }}
		>
			<GridLoader color={globalPrimaryColor} size={20} />
			<h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Loading...</h2>
		</Flex>
	);
};

export default Loading;
