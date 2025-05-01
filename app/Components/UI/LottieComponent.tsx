'use client'
import dynamic from "next/dynamic";

interface LottieComponentProps {
	animationData: object;
	loop: boolean;
	ariaLabel?: string;
	className?: string;
}

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function LottieComponent({ animationData, loop, ariaLabel, className }: LottieComponentProps) {
	return <Lottie animationData={animationData} loop={loop} aria-label={ariaLabel} className={className} />
}
