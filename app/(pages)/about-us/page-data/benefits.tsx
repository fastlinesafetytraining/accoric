import { LottieComponent } from "@components/UI";
import {
  easeOfUseLottie,
  quickSetupLottie,
  simplisticLottie,
} from "@/public/lottie/index";


  type BenefitProps = {
    title: string;
    description: React.ReactNode;
    icon: React.ReactNode;
  }

  
  export const benefits: BenefitProps[] = [
  {
    title: "Ease Of Use",
    description: <p>Accoric is <span>designed</span> to be easy to use. We want you to be able to use it without any training.</p>,
    icon: <LottieComponent
                ariaLabel="Ease of Use Lottie Animation"
                animationData={easeOfUseLottie}
                loop={true}
              />,
  },
  {
    title: "Quick Onboarding",
    description: <p>Our onboarding process is designed to be <span>quick</span> and <span>easy</span>. We will help you get started with your Accoric account in no time.</p>,
    icon: <LottieComponent
                ariaLabel="Quick Setup Lottie Animation"
                animationData={quickSetupLottie}
                loop={true}
              />,
  },
  {
    title: "Simplicity",
    description: <p>Simple User Interface designed to be <span>simple</span>. Easily find what you need.</p>,
    icon: <LottieComponent
                ariaLabel="Simplicity Lottie Animation"
                animationData={simplisticLottie}
                loop={true}
              />,
  },
  ];