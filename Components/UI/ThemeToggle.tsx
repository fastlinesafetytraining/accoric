'use client';
import React from 'react';
import { Flex, Segmented } from 'antd';
import { LuSun, LuMoon, LuMonitor } from 'react-icons/lu';

export default function ThemeToggle() {

	return (
		<Flex gap="small" align="flex-start">
			<Segmented
				options={[
					{ value: 'light', icon: <LuSun /> },
					{ value: 'system', icon: <LuMonitor /> },
					{ value: 'dark', icon: <LuMoon /> },
				]}
				defaultValue="system"
				aria-label="Theme Toggle Switch"
			/>
		</Flex>
	);
}
