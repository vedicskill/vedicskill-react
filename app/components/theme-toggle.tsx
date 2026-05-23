'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg bg-[#F5F5F5] dark:bg-[#1A1A1A] text-[#121212] dark:text-white transition-all duration-300 hover:bg-[#EFEFEF] dark:hover:bg-[#252525] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#064E3B] dark:focus-visible:ring-[#10B981] ring-offset-2 dark:ring-offset-[#0F0F0F]"
      aria-label="Toggle dark mode"
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        // Sun icon for light mode
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.323 2.677a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707zm2.121 5.657a1 1 0 10-1.414-1.414l-.707.707a1 1 0 101.414 1.414l.707-.707zM10 12a2 2 0 100-4 2 2 0 000 4zm3.192-8.192a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707zm0 11.314a1 1 0 001.414 1.414l.707-.707a1 1 0 00-1.414-1.414l-.707.707zM4.464 4.465a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707zm0 11.314a1 1 0 001.414 1.414l.707-.707a1 1 0 00-1.414-1.414l-.707.707zM4.929 16.071a1 1 0 10-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM19 11a1 1 0 11-2 0 1 1 0 012 0zm-2-7a1 1 0 11-2 0 1 1 0 012 0zM5 19a1 1 0 11-2 0 1 1 0 012 0z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        // Moon icon for dark mode
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
}
