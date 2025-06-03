"use client";
import "@ant-design/v5-patch-for-react-19";
import React, { useEffect, useState } from "react";
import {
	formFields,
	marks,
	radioOptions,
} from "@/libs/utils/const/pricingFormData";
import toast from "react-hot-toast";
import { Form, Input, Slider, Radio } from "antd";
import styles from "@styles/component.module.scss";
import { LuSend } from "react-icons/lu";
export default function PricingForm() {
	const [form] = Form.useForm();
	const [selectedValue, setSelectedValue] = useState<number>(5);
	const [priceValue, setPriceValue] = useState<string>("$799/Year");

	const handleSubmit = async () => {
		const response = await fetch("/api/send", {
			method: "POST",
			body: JSON.stringify(form.getFieldsValue()),
		});
		if (!response.ok) {
			toast.error("Email sent failed");
			form.resetFields();
		} else {
			toast.success("Email sent successfully");
			form.resetFields();
		}
	};

	const calculatePrice = (value: number) => {
		if (5 <= value && value <= 24) {
			setPriceValue("$799/Year");
		} else if (25 <= value && value <= 49) {
			setPriceValue("$1599/Year");
		} else if (50 <= value && value <= 99) {
			setPriceValue("$2599/Year");
		} else if (100 <= value && value <= 199) {
			setPriceValue("$3599/Year");
		} else if (200 <= value && value <= 299) {
			setPriceValue("$4099/Year");
		} else if (300 <= value && value <= 399) {
			setPriceValue("$4899/Year");
		} else if (400 <= value && value <= 499) {
			setPriceValue("$5699/Year");
		} else if (500 <= value && value <= 599) {
			setPriceValue("$8999/Year");
		} else if (600 <= value) {
			setPriceValue("Contact Sales");
		}
	};

	const handleEmployeeNumberChange = (value: number) => {
		setSelectedValue(value);
		calculatePrice(value);
		form.setFieldsValue({
			numberOfEmployees: `${value}+`,
		});
	};

	useEffect(() => {
		form.setFieldsValue({
			numberOfEmployees: selectedValue,
		});
	}, [form, selectedValue]);

	return (
		<div className={styles.pricingFormContainer}>
			<h2>Pricing Form</h2>
			<p>Please fill out the form below to get a quote for your company.</p>
			<p>Required Fields are marked with an asterisk (*)</p>
				<Form
					form={form}
					className={styles.pricingForm}
					name='Pricing Form'
					initialValues={{ remember: true }}
					size='large'
					layout='inline'
					autoComplete='off'
					onFinish={handleSubmit}
				>
					{formFields.map((field) => (
						<Form.Item
							key={field.name}
							name={field.name}
							className={styles.pricingForm__input}
							rules={field.rules}
						>
							<Input
								variant="filled"
								size='large'
								prefix={field.prefix}
								placeholder={field.placeholder}
								type={field.type}
							/>
						</Form.Item>
					))}
					<Form.Item
						name='numberOfEmployees'
						getValueFromEvent={(e) => e.target.value}
						className={styles.pricingForm__employeeNumber}
						rules={[
							{
								required: true,
								message: "Please select your number of employees",
							},
						]}
					>
						<div aria-label='Slider Information'>
							<p className={styles.pricingForm__employeeNumber__info}>
								Number of Employees to be Monitored:{" "}
								<b>{`${selectedValue}+`}</b>
							</p>

							<Slider
								className={styles.pricingForm__employeeNumber__slider}
								step={null}
								marks={marks}
								min={Number(Object.keys(marks ?? {})[0])}
								max={Number(Object.keys(marks ?? {}).pop())}
								value={selectedValue}
								tooltip={{ open: false }}
								onChange={(value) => handleEmployeeNumberChange(value)}
							/>

							<Radio.Group
								className={styles.pricingForm__employeeNumber__radio}
								value={selectedValue}
								options={radioOptions}
								optionType='button'
								buttonStyle='solid'
								onChange={(e) => handleEmployeeNumberChange(e.target.value)}
							></Radio.Group>
							<p className={styles.pricingForm__employeeNumber__cost}>
								Cost: <b>{priceValue}</b>
							</p>
						</div>
					</Form.Item>
					<Form.Item className={styles.pricingForm__buttonContainer}>
						<button type='submit' className={styles.pricingForm__button}>
							Submit
							<LuSend />
						</button>
					</Form.Item>
				</Form>
				<p>
					We&apos;ll collect this information subject to our{" "}
					<a href='/privacy-policy'>Privacy Policy</a>.
				</p>
		</div>
	);
}
