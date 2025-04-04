'use client'

import Lottie from "lottie-react";

interface LottieComponentProps {
	animationData: any;
	loop: boolean;
	ariaLabel?: string;
}

export default function LottieComponent({ animationData, loop, ariaLabel }: LottieComponentProps) {
	return <Lottie animationData={animationData} loop={loop} aria-label={ariaLabel} />
}
