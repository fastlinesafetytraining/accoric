"use client";
import React, { useEffect } from "react";
import { Segmented } from "antd";
import { LuSun, LuMoon, LuMonitor } from "react-icons/lu";
import { useTernaryDarkMode } from "usehooks-ts";
import type { TernaryDarkMode } from "usehooks-ts";

export default function ThemeToggle() {
	const { isDarkMode, ternaryDarkMode, setTernaryDarkMode } =
		useTernaryDarkMode();

	const themeOptions = [
		{
			icon: <LuSun />,
			value: "light",
		},
		{
			icon: <LuMonitor />,
			value: "system",
		},
		{
			icon: <LuMoon />,
			value: "dark",
		},
	];

	const handleThemeChange = (value: string) => {
		setTernaryDarkMode(value as TernaryDarkMode);
	};

	useEffect(() => {
		const root = document.documentElement;
		root.setAttribute("data-theme", isDarkMode ? "dark" : "light");
	}, [isDarkMode]);

	return (
		<Segmented
			suppressHydrationWarning
			shape='round'
			options={themeOptions}
			defaultValue='system'
			value={ternaryDarkMode}
			aria-label='Theme Toggle Switch'
			onChange={handleThemeChange}
			className="theme-toggle-button"
			style={{
				margin: "1rem",
				fontSize: "1rem",
				padding: "0.5rem",
			}}
		/>
	);
}
