"use client";
import "@ant-design/v5-patch-for-react-19";
import React from "react";
import toast from "react-hot-toast";
import { LuMail, LuPhone, LuUser } from "react-icons/lu";
import { Input, Form, Button } from "antd";

type FormValues = {
	fullName: string;
	email: string;
	phone: string;
};

export default function CardSignUpForm() {
	const [form] = Form.useForm();

	const handleSubmit = async (values: FormValues) => {
		const response = await fetch("/api/send-dashcard-email", {
			method: "POST",
			body: JSON.stringify(values),
		});
		if (!response.ok) {
			toast.error("Email sent failed");
			form.resetFields();
		} else {
			toast.success("Email sent successfully");
			form.resetFields();
		}
	};

	return (
		<Form
			name='card-signup'
			form={form}
			layout='vertical'
			onFinish={handleSubmit}
			style={{ margin: "1rem 0" }}
		>
			<Form.Item name='fullName' label='Full Name'>
				<Input
					variant='filled'
					size='large'
					prefix={<LuUser />}
					placeholder='Enter your Full Name'
					type='text'
				/>
			</Form.Item>
			<Form.Item name='email' label='Email'>
				<Input
					variant='filled'
					size='large'
					prefix={<LuMail />}
					placeholder='Enter your Email'
					type='email'
				/>
			</Form.Item>
			<Form.Item name='phone' label='Phone'>
				<Input
					variant='filled'
					size='large'
					prefix={<LuPhone />}
					placeholder='Enter your Phone'
					type='text'
				/>
			</Form.Item>
			<Form.Item>
				<Button type='primary' htmlType='submit' size='large'>
					Send Sign Up Request
				</Button>
			</Form.Item>
		</Form>
	);
}
