import { SliderSingleProps } from "antd/es/slider";
import { LuUser, LuBuilding, LuMail, LuPhone } from "react-icons/lu";

export const formFields = [
    {
      name: "fullName",
      label: "Full Name",
      rules: [{ required: true, message: "Please enter your full name" }],
      prefix: <LuUser />,
      placeholder: "Full Name *",
      type: "text",
    },
    {
      name: "companyName",
      label: "Company Name",
      rules: [{ required: true, message: "Please enter your company name" }],
      prefix: <LuBuilding />,
      placeholder: "Company Name *",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      rules: [{ required: true, message: "Please enter your email" }],
      prefix: <LuMail />,
      placeholder: "Email *",
      type: "email",
    },
    {
      name: "phone",
      label: "Phone",
      rules: [{ required: true, message: "Please enter your phone number" }],
      prefix: <LuPhone />,
      placeholder: "Phone *",
      type: "tel",
    },
  ];

  export const marks: SliderSingleProps["marks"] = {
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

  export const radioOptions = [
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