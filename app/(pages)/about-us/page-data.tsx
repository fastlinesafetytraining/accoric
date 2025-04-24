import { FaEnvelope, FaPhoneAlt, FaClock } from "react-icons/fa";
import { LottieComponent } from "@Components/UI";
import {
  easeOfUseLottie,
  quickSetupLottie,
  simplisticLottie,
} from "@/public/lottie/index";

type QuickContactCardProps = {
    icon: React.ReactNode;
    title: string;
    content: {
      title: string;
      info: string;
    }[];
  };
  
  type BenefitProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
  }
  
  export const quickContactCard: QuickContactCardProps[] = [
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      content: [{
        title: "Technical Help (Accoric Management):",
        info: "techsupport@accoric.com",
      }, 
      {
        title: "Technical Help (Accoric DashCard):",
        info: "dash@accoric.com",
      },
      {
        title: "Sales/General Inquiry:",
        info: "info@accoric.com",
      }]
    },
    {
      icon: <FaPhoneAlt />,
      title: "Call Us",
      content: [{
        title: "Technical Help (Accoric Management):",
        info: "(631) 200-4720",
      },
      {
        title: "Technical Help (Accoric Management):",
        info: "(631) 200-1051",
      },
      {
        title: "Sales/General Inquiry:",
        info: "(516) 200-4720",
      }]
    },
    {
      icon: <FaClock />,
      title: "Hours Of Operations",
      content: [{
        title: "Monday-Friday:",
        info: "9:00AM - 5:00PM EDT",
      }]
    },
  ];
  
  export const benefits: BenefitProps[] = [
  {
    title: "Ease Of Use",
    description: "Accoric Management is designed to be easy to use. We want you to be able to use it without any training.",
    icon: <LottieComponent
                ariaLabel="Ease of Use Lottie Animation"
                animationData={easeOfUseLottie}
                loop={true}
              />,
  },
  {
    title: "Quick Onboarding",
    description: "Our onboarding process is designed to be quick and easy. We will help you get started with your Accoric Management account in no time.",
    icon: <LottieComponent
                ariaLabel="Quick Setup Lottie Animation"
                animationData={quickSetupLottie}
                loop={true}
              />,
  },
  {
    title: "Simplicity",
    description: "Simple User Interface designed to be simple and easy to use. We want you to be able to use it without any training.",
    icon: <LottieComponent
                ariaLabel="Simplicity Lottie Animation"
                animationData={simplisticLottie}
                loop={true}
              />,
  },
  ];