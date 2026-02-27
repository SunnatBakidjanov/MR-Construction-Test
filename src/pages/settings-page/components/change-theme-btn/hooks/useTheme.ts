import { useState } from 'react';

export type Theme = 'light' | 'dark';

const THEME_KEY = 'app-theme';

// Хук для смены темы
const getTheme = (): Theme => {
    const saved = localStorage.getItem(THEME_KEY) as Theme | null;
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const setTheme = (theme: Theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
};

// Хук для смены темы
export const useTheme = () => {
    const [isDark, setIsDark] = useState(() => {
        const theme = getTheme();
        setTheme(theme);
        return theme === 'dark';
    });

    const toggle = () => {
        const newTheme = isDark ? 'light' : 'dark';
        setTheme(newTheme);
        setIsDark(prev => !prev);
    };

    return { isDark, toggle };
};
