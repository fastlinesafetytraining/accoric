import { useEffect, useState } from "react";

/**
 * Custom React hook to retrieve an array of section attributes from the DOM.
 *
 * This hook scans the document for all <section> elements, and for each section
 * with an "id" attribute, it collects:
 *   - key: the section's id (string)
 *   - href: a hash link to the section (e.g., "#mySection")
 *   - name: the value of the section's "aria-label" attribute, or an empty string if not present
 *
 * The returned array can be used for navigation menus, sidebars, or anchor links
 * that correspond to the sections present in the page.
 *
 * @returns {Array<{ key: string; href: string; name: string }>} Array of section attributes
 *
 * Example return value:
 * [
 *   { key: "introSec", href: "#introSec", name: "Introduction" },
 *   { key: "alwaysSync", href: "#alwaysSync", name: "Always Synced" },
 *   ...
 * ]
 */
export function useGetSectionAttributes() {
	const [sectionIdArray, setSectionIdArray] = useState<{ key: string; href: string; name: string }[]>([]);

	useEffect(() => {
		const sections = Array.from(document.querySelectorAll("section"));
		const sectionId = sections
			.map((section) => {
				const sectionId = section.getAttribute("id");
				const sectionLabel = section.getAttribute("aria-label");
				if (sectionId) {
					return {
						key: sectionId,
						href: `#${sectionId}`,
						name: sectionLabel || "",
					};
				}
				return null;
			})
			.filter(Boolean) as { key: string; href: string; name: string }[];
		setSectionIdArray(sectionId);
		return;
	}, []);
	return sectionIdArray;
}
