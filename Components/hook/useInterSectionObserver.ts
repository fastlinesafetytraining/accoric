import { useEffect, useState } from "react";

export function useInterSectionObserver(items: { key: string; href: string; name: string }[]) {
    const [activeSection, setActiveSection] = useState<string>("");
	useEffect(() => {
		const sectionIds = items.map((item) => item.href.replace("#", ""));
		const sections = sectionIds
			.map((id) => document.getElementById(id))
			.filter(Boolean) as HTMLElement[];

		if (sections.length === 0) return;

		const observer = new window.IntersectionObserver(
			(entries) => {
				// Find the entry that is most in view
				const visible = entries.filter((entry) => entry.isIntersecting);
				if (visible.length > 0) {
					// Pick the one closest to the top
					const topMost = visible.reduce((prev, curr) =>
						prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr
					);
					setActiveSection(topMost.target.id);
				}
			},
			{
				root: null,
				rootMargin: "0px 0px -60% 0px", // Trigger when section is 40% from top
				threshold: 0.2,
			}
		);

		sections.forEach((section) => observer.observe(section));

		return () => {
			sections.forEach((section) => observer.unobserve(section));
		};
	}, [items]);

	return activeSection;
}