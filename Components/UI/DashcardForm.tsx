"use client";
import React, { useEffect } from "react";
import { Flex, Form, Input, Button } from "antd";

export default function DashcardForm() {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    const values = await form.validateFields();
    console.log(values);
  };

  useEffect(() => {
    form.setFieldsValue({
      email: "",
    });
  }, []);

  return (
    <Form form={form} onFinish={handleSubmit} style={{ width: "60%" }}>
    <Flex vertical gap="1rem">
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please enter your email" }]}
      >
        <Input size="large" type="email" placeholder="Enter your email"/>
      </Form.Item>
      <Button type="primary" htmlType="submit" style={{ width: "30%" }}>
        Submit
      </Button>
    </Flex>
    </Form>
  );
}
