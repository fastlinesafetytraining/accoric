import { LottieComponent } from "@components/UI";
import {
  easeOfUseLottie,
  quickSetupLottie,
  simplisticLottie,
} from "@/public/lottie/index";


  type BenefitProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
  }

  
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