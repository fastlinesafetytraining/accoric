'use client';
import React from 'react';
import { Flex, Segmented } from 'antd';
import { AiFillMoon, AiFillSun, AiOutlineDesktop } from 'react-icons/ai';

export default function ThemeToggle() {

	return (
		<Flex gap="small" align="flex-start">
			<Segmented
				options={[
					{ value: 'light', icon: <AiFillSun /> },
					{ value: 'system', icon: <AiOutlineDesktop /> },
					{ value: 'dark', icon: <AiFillMoon /> },
				]}
				defaultValue="system"
				aria-label="Theme Toggle Switch"
			/>
		</Flex>
	);
}
