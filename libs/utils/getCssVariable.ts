'use client'

function getCssVariable(variable: string) {
    if (typeof window === "object") {
        const rootStyles = window.getComputedStyle(document.documentElement);
        return rootStyles.getPropertyValue(variable.trim());
    }
    return null;
}

export default getCssVariable;
