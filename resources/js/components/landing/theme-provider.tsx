import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { Suspense, lazy } from 'react';
import GlobalWatermark from './global-watermark';

const LazyFloatingButtons = lazy(
    () => import('@/components/landing/whatsapp-float'),
);

type Theme = 'dark' | 'light';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: 'dark',
    toggleTheme: () => {},
});

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== 'undefined') {
            return (localStorage.getItem('zy-theme') as Theme) || 'dark';
        }

        return 'dark';
    });

    useEffect(() => {
        document.body.classList.toggle('light', theme === 'light');
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('zy-theme', theme);
    }, [theme]);

    const toggleTheme = () =>
        setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <GlobalWatermark />
            <Suspense fallback={null}>
                <LazyFloatingButtons />
            </Suspense>
            {children}
        </ThemeContext.Provider>
    );
}
