import React from "react";

interface ReadTimeProps {
	children: string;
}

// Simple read time component that takes the text content from children and estimates reading time
// Assumes average reading speed of 200 words per minute

// Optionally, you could pass in a prop for the text, but here we'll use children for flexibility

function getReadTime(text: string): number {
	const words = text.trim().split(/\s+/).length;
	return Math.max(1, Math.round(words / 200));
}

export default function ReadTime({ children }: ReadTimeProps) {
	const minutes = getReadTime(children);
	return <span>{minutes} min</span>;
}
