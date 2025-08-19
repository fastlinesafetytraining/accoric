"use client";
import React from "react";
import { useMediaQuery } from "usehooks-ts";

export default function DotPatternBackgroundSvg() {
	const mobileWidth = useMediaQuery("(max-width: 767px)");

	const dotPosition = "8px";
	const dotRadius = mobileWidth ? "0.35vw" : "0.1vw";
	const dotOpacity = "0.15";
	const patternSize = mobileWidth ? "10vw" : "5vw";

	return (
		<svg
			style={{
				display: "block",
				position: "absolute",
				top: 0,
				left: 0,
				height: "100%",
				minHeight: "100vh",
				minWidth: "100%",
				zIndex: -1,
			}}
			width="100%"
			height="100%"
			viewBox="0 0 3000 5600"
			preserveAspectRatio="xMidYMid slice"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			focusable="false"
		>
			<defs>
				<pattern
					id="dotPattern"
					x="0"
					y="0"
					width={patternSize}
					height={patternSize}
					patternUnits="userSpaceOnUse"
				>
					<circle cx={dotPosition} cy={dotPosition} r={dotRadius} fill="currentColor" opacity={dotOpacity} />
				</pattern>
			</defs>
			<rect width="3000" height="5600" fill="url(#dotPattern)" />
		</svg>
	);
};