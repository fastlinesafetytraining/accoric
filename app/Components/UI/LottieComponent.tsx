'use client'

import Lottie from "lottie-react";

interface LottieComponentProps {
	animationData: any;
	loop: boolean;
	ariaLabel?: string;
	className?: string;
}

export default function LottieComponent({ animationData, loop, ariaLabel, className }: LottieComponentProps) {
	return <Lottie animationData={animationData} loop={loop} aria-label={ariaLabel} className={className} />
}
