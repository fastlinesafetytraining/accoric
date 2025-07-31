"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

/**
 * FlipText Component
 * 
 * A React component that creates an animated text carousel with vertical scrolling transitions.
 * Each text item fades in/out while moving vertically, creating a smooth cycling effect.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <FlipText 
 *   texts={["Hello", "World", "Animation"]} 
 *   className="text-2xl font-bold"
 * />
 * 
 * // With custom timing
 * <FlipText 
 *   texts={["Feature 1", "Feature 2", "Feature 3"]}
 *   delay={2}
 *   duration={1}
 *   className="text-xl text-blue-600"
 * />
 * 
 * // Multiple instances on same page
 * <div>
 *   <FlipText texts={["First", "Second"]} className="text-lg" />
 *   <FlipText texts={["Alpha", "Beta", "Gamma"]} className="text-xl" />
 * </div>
 * ```
 * 
 * @component
 * @since 1.0.0
 * @author Your Name
 */
export default function FlipText({
	texts,
	className,
	delay = 1.5,
	duration = 0.8,
}: {
	/** Array of text strings to cycle through */
	texts: string[];
	/** Optional CSS class name for styling the container */
	className?: string;
	/** Delay in seconds before transitioning to next text (default: 1.5) */
	delay?: number;
	/** Duration in seconds for the transition animation (default: 0.8) */
	duration?: number;
}) {
	const flipTextRef = useRef<HTMLDivElement>(null);
	const [wordHeight, setWordHeight] = useState<number>(0);
	const [isHeightCalculated, setIsHeightCalculated] = useState(false);

	/**
	 * Container styles for the FlipText component
	 * - Uses flexbox for layout
	 * - Height is dynamically calculated based on text content
	 * - Position relative for absolute positioning of text items
	 */
	const style: React.CSSProperties = {
		display: "flex",
		height: isHeightCalculated ? `${wordHeight}px` : "auto",
		flexDirection: "column",
		gap: "0.5rem",
		position: "relative",
	};

	/**
	 * GSAP animation setup
	 * Creates a timeline that cycles through all text items with vertical transitions
	 */
	useGSAP(
		() => {
			if (flipTextRef.current && isHeightCalculated) {
				// Get all text elements within this component instance
				const words = gsap.utils.toArray(".flipText__item") as HTMLElement[];
				
				// Create infinite repeating timeline
				const flipTextTimeline = gsap.timeline({
					repeat: -1,
					repeatRefresh: true,
					defaults: {
						ease: "power2.inOut",
					},
				});

				// Set initial state - hide all words except first
				gsap.set(words, { opacity: 0 });
				if (words.length > 0) {
					gsap.set(words[0], { opacity: 1, y: 0 });
				}

				// Build animation sequence for each word
				words.forEach((word: HTMLElement, index: number) => {
					const nextIndex = (index + 1) % words.length; // Circular reference
					const nextWord = words[nextIndex];

					flipTextTimeline
						.to(word, {
							opacity: 0,
							y: -wordHeight, // Move current word up and out
							duration: duration,
							delay: delay,
						})
						.to(
							nextWord,
							{
								opacity: 1,
								y: 0, // Move next word to center
								duration: duration,
							},
							"<" // Start simultaneously with previous animation
						);
				});
			}
		},
		{ scope: flipTextRef, dependencies: [isHeightCalculated] }
	);

	/**
	 * Calculate the height of text items
	 * Creates a temporary span element to measure the actual rendered height
	 * This ensures each component instance has its own independent height calculation
	 */
	useEffect(() => {
		if (flipTextRef.current && texts.length > 0) {
			// Create a temporary span to measure the height
			const tempSpan = document.createElement("span");
			tempSpan.className = "flipText__item";
			tempSpan.style.position = "absolute";
			tempSpan.style.visibility = "hidden";
			tempSpan.style.whiteSpace = "nowrap";
			tempSpan.textContent = texts[0]; // Use the first text as reference
			
			// Add to DOM temporarily within this component's container
			flipTextRef.current.appendChild(tempSpan);
			
			// Get the height
			const height = tempSpan.offsetHeight;
			
			// Remove the temporary span
			flipTextRef.current.removeChild(tempSpan);
			
			setWordHeight(height);
			setIsHeightCalculated(true);
		}
	}, [texts]);

	return (
		<div ref={flipTextRef} className={`${className}`} style={style}>
			{texts.map((item, index) => (
				<span
					style={{ position: "absolute", top: 0, left: 0 }}
					key={index}
					className='flipText__item'
				>
					{item}
				</span>
			))}
		</div>
	);
}
