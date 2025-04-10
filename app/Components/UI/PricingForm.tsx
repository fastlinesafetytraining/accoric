'use client';
import { Form, Input, Button, Slider } from "antd";
import React, {useState} from "react";
import type { SliderSingleProps } from "antd/es/slider";

export default function PricingForm() {
	const [form] = Form.useForm();
	const [sliderValue, setSliderValue] = useState(0);
	const [priceValue, setPriceValue] = useState(0);

	const marks: SliderSingleProps['marks'] = {
		5: '5+',
		25: '25+',
		50: '50+',
		100: '100+',
		200: '200+',
		300: '300+',
		400: '400+',
		500: '500+',
	}
	

	const calculatePrice = (value: number) => {
		if (5 <= value && value <= 24) {
			setPriceValue(799);
		} else if (25 <= value && value <= 49) {
			setPriceValue(1599);
		} else if (50 <= value && value <= 99) {
			setPriceValue(2599);
		} else if (100 <= value && value <= 199) {
			setPriceValue(3599);
		} else if (200 <= value && value <= 299) {
			setPriceValue(4099);
		} else if (300 <= value && value <= 399) {
			setPriceValue(4899);
		} else if (400 <= value && value <= 499) {
			setPriceValue(5699);
		} else if (500 <= value) {
			setPriceValue(8999);
		}
	};

	const handleSubmit = (values: any) => {
		console.log(values);
	}

	
	return (
		<Form layout="vertical" form={form} onFinish={handleSubmit}>
			<h2>Pricing Form</h2>
			<p>Please fill out the form below to get a quote for your project.</p>
			<div aria-label="Slider Information">
				<p>Employees: {sliderValue}</p>
				<Slider marks={marks} min={5} max={500} value={sliderValue} onChange={(value) => (setSliderValue(value), calculatePrice(value))} />
				<p>Cost: ${priceValue}/Year</p>
			</div>
			<Form.Item name="name" label="Full Name">
				<Input />
			</Form.Item>
			<Form.Item name="company" label="Company Name">
				<Input />
			</Form.Item>
			<Form.Item name="email" label="Email">
				<Input />
			</Form.Item>
			<Form.Item name="phone" label="Phone">
				<Input />
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit">Submit</Button>
			</Form.Item>
		</Form>
	)
}