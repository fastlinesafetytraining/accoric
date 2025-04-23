"use client";
import React, { useEffect, useState } from "react";
import "@ant-design/v5-patch-for-react-19";
import type { SliderSingleProps } from "antd/es/slider";
import { Form, Input, Button, Slider, Radio, ConfigProvider } from "antd";
import { FaBuilding, FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import styles from "@Styles/component.module.scss";

export default function PricingForm() {
  const [form] = Form.useForm();
  const [selectedValue, setSelectedValue] = useState<number>(5);
  const [priceValue, setPriceValue] = useState<string>("$799/Year");

  const formSubmission = () => {
    const values = form.getFieldsValue();
    console.log("Form submitted", values);
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

  const marks: SliderSingleProps["marks"] = {
    5: "5+",
    25: "25+",
    50: "50+",
    100: "100+",
    200: "200+",
    300: "300+",
    400: "400+",
    500: "500+",
    600: "600+",
  };

  const radioOptions = [
    { label: "5+", value: 5 },
    { label: "25+", value: 25 },
    { label: "50+", value: 50 },
    { label: "100+", value: 100 },
    { label: "200+", value: 200 },
    { label: "300+", value: 300 },
    { label: "400+", value: 400 },
    { label: "500+", value: 500 },
    { label: "600+", value: 600 },
  ];

  const handleEmployeeNumberChange = (value: number) => {
    setSelectedValue(value);
    calculatePrice(value);
    form.setFieldsValue({
      numberOfEmployees: value,
    });
  };

  useEffect(() => {
    console.log(selectedValue);
    form.setFieldsValue({
      numberOfEmployees: selectedValue,
    });
  }, [form]);

  return (
    <div className={styles.pricingFormContainer}>
      <h2>Pricing Form</h2>
      <p>Please fill out the form below to get a quote for your company.</p>
      <ConfigProvider
              theme={{
                components: {
                  Input: {
                    activeBorderColor: "#0c0050",
                    hoverBorderColor: "#0c0050",
                  },
                  Slider: {
                    trackBg: "#0c0050",
                    trackHoverBg: "#0c0050",
                  },
                  Radio: {
                    buttonSolidCheckedBg: "#0c0050",
                    buttonSolidCheckedHoverBg: "#0c0050",
                  },
                },
              }}
            >
      <Form
        form={form}
        className={styles.pricingForm}
        name="Pricing Form"
        initialValues={{ remember: true }}
        size="large"
        layout="inline"
        autoComplete="off"
      >
        <Form.Item
          name="fullName"
          className={styles.pricingForm__input}
          rules={[{ required: true, message: "Please enter your full name" }]}
        >
          <Input size="large" prefix={<FaUser />} placeholder="Full Name" type="text" />
        </Form.Item>
        <Form.Item
          name="companyName"
          className={styles.pricingForm__input}
          rules={[
            { required: true, message: "Please enter your company name" },
          ]}
        >
          <Input
            size="large"
            prefix={<FaBuilding />}
            placeholder="Company Name"
            type="text"
          />
        </Form.Item>
        <Form.Item
          name="email"
          className={styles.pricingForm__input}
          rules={[{ required: true, message: "Please enter your email" }]}
        >
          <Input size="large" prefix={<FaEnvelope />} placeholder="Email" type="email" />
        </Form.Item>
        <Form.Item
          name="phone"
          className={styles.pricingForm__input}
          rules={[
            { required: true, message: "Please enter your phone number" },
          ]}
        >
          <Input size="large" prefix={<FaPhoneAlt />} placeholder="Phone" type="tel" />
        </Form.Item>
        <Form.Item
          name="numberOfEmployees"
          getValueFromEvent={(e) => e.target.value}
          className={styles.pricingForm__employeeNumber}
          rules={[
            {
              required: true,
              message: "Please select your number of employees",
            },
          ]}
        >
          <div aria-label="Slider Information">
            <p className={styles.pricingForm__employeeNumber__info}>
              Number of Employees to be Monitored: <b>{`${selectedValue}+`}</b>
            </p>

              <Slider
                className={styles.pricingForm__employeeNumber__slider}
                step={null}
                marks={marks}
                min={Number(Object.keys(marks)[0])}
                max={Number(Object.keys(marks).pop())}
              value={selectedValue}
              tooltip={{ open: false }}
                onChange={(value) => handleEmployeeNumberChange(value)}
              />

            <Radio.Group
              className={styles.pricingForm__employeeNumber__radio}
              value={selectedValue}
              options={radioOptions}
              optionType="button"
              buttonStyle="solid"
              onChange={(e) => handleEmployeeNumberChange(e.target.value)}
            ></Radio.Group>
            <p className={styles.pricingForm__employeeNumber__cost}>
              Cost: <b>{priceValue}</b>
            </p>
          </div>
        </Form.Item>
        <Form.Item className={styles.pricingForm__button}>
          <Button
            type="primary"
            style={{ backgroundColor: "#ce2029" }}
            htmlType="submit"
            onClick={formSubmission}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
      <p>
        We'll collect this information subject to our{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>
      </ConfigProvider>
    </div>
  );
}
