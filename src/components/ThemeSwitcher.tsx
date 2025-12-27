import { useEffect, useState } from 'react';
import { getTheme, toggleTheme, type Theme } from '../utils/theme';

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState<Theme>('light');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        setTheme(getTheme());
    }, []);

    useEffect(() => {
        if (isMounted) {
            toggleTheme(theme);
        }
    }, [theme, isMounted]);

    if (!isMounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="relative inline-flex h-10 w-16 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {/* Sun icon */}
            <span className={`absolute left-1 flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary-500 transition-all duration-500 ${theme === 'light' ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
            </span>
            {/* Moon icon */}
            <span className={`absolute right-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-white transition-all duration-500 ${theme === 'dark' ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
            </span>
        </button>
    );
} 