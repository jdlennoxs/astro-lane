type Theme = 'light' | 'dark';

// Get theme from local storage or system preference
const getTheme = (): Theme => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
        return localStorage.getItem('theme') as Theme;
    }
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
};

// Toggle theme in DOM and localStorage
const toggleTheme = (theme?: Theme) => {
    const root = document.documentElement;
    const isDark = theme === 'dark' || (theme === undefined && root.classList.contains('light'));

    root.classList.remove('light', 'dark');
    root.classList.add(isDark ? 'dark' : 'light');

    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
};

export { getTheme, toggleTheme };
export type { Theme }; 