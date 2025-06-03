'use client';
import "@ant-design/v5-patch-for-react-19";
import { ConfigProvider, theme } from 'antd';
import { useTernaryDarkMode } from 'usehooks-ts';
import { lightTheme, darkTheme } from '@/styles/antDesignTheme';
import { useState, useEffect } from 'react';

// Client-side theme provider
function ThemeProvider({ children }: { children: React.ReactNode }) {
    const { isDarkMode } = useTernaryDarkMode();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <ConfigProvider
            theme={{
                ...(isDarkMode ? darkTheme : lightTheme),
                algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
            }}
        >
            {children}
        </ConfigProvider>
    )
}

// Server-side wrapper
export default function Provider({ children }: { children: React.ReactNode }) {
    return <ThemeProvider>{children}</ThemeProvider>;
}
