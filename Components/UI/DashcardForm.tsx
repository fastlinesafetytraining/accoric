"use client";
import React, { useEffect } from "react";
import { Flex, Form, Input, Button } from "antd";
import toast from "react-hot-toast";
import styles from "@styles/component.module.scss";

export default function DashcardForm() {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    const response = await fetch("/api/send-dashcard-email", {
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

  useEffect(() => {
    form.setFieldsValue({
      email: "",
    });
  }, [form]);

  return (
    <Form form={form} onFinish={handleSubmit} className={styles.dashcardForm}>
      <Flex vertical gap="1rem">
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please enter your email" }]}
        >
          <Input size="large" type="email" placeholder="Enter your email" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Flex>
    </Form>
  );
}
