'use client';
import React from 'react';
import { MoonOutlined, SunOutlined, DesktopOutlined } from '@ant-design/icons';
import { Flex, Segmented } from 'antd';

export default function ThemeToggle() {

	return (
		<Flex gap="small" align="flex-start">
			<Segmented
				options={[
					{ value: 'light', icon: <SunOutlined /> },
					{ value: 'system', icon: <DesktopOutlined /> },
					{ value: 'dark', icon: <MoonOutlined /> },
				]}
				defaultValue="system"
				aria-label="Theme Toggle Switch"
			/>
		</Flex>
	);
}
