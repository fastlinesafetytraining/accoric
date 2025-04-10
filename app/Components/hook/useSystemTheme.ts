import { useState, useEffect } from 'react';

const useSystemTheme = () => {
	const [theme, setTheme] = useState(() => {
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	});

	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		interface MediaQueryListEvent {
			matches: boolean;
		}

		const handleChange = (event: MediaQueryListEvent) => {
			setTheme(event.matches ? 'dark' : 'light');
		};

		mediaQuery.addEventListener('change', handleChange);

		return () => {
			mediaQuery.removeEventListener('change', handleChange);
		};
	}, []);
	return theme;
}
export default useSystemTheme;