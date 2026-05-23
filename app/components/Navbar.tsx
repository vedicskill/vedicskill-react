'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { ThemeToggle } from './ThemeToggle';

const navigationLinks = [
  { href: '/tutorials', label: 'Tutorials' },
  { href: '/courses', label: 'Courses' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when Escape is pressed
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <nav
      className="sticky top-0 z-50 bg-white dark:bg-[#0F0F0F] border-b border-[#E8E8E8] dark:border-[#2A2A2A] backdrop-blur-md bg-opacity-95 dark:bg-opacity-95"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group font-bold text-lg text-[#121212] dark:text-white tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#064E3B] dark:focus-visible:ring-[#10B981] rounded px-2 py-1"
            aria-label="Vedicskill Home"
          >
            VedicSkill
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#121212] dark:text-white hover:text-[#064E3B] dark:hover:text-[#10B981] transition-colors duration-300 font-medium text-sm relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#064E3B] dark:focus-visible:ring-[#10B981] rounded px-2 py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#064E3B] dark:bg-[#10B981] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <button
              className="px-6 py-2.5 rounded-2xl border-2 border-[#064E3B] text-[#064E3B] font-semibold text-sm hover:bg-[#064E3B] hover:text-white transition-all duration-300 dark:border-[#10B981] dark:text-[#10B981] dark:hover:bg-[#10B981] dark:hover:text-[#121212] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#064E3B] dark:focus-visible:ring-[#10B981] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0F0F0F]"
              aria-label="Get Started"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              ref={menuButtonRef}
              className="p-2 hover:bg-[#F5F5F5] dark:hover:bg-[#1A1A1A] rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#064E3B] dark:focus-visible:ring-[#10B981]"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-6 h-6 text-[#121212] dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            ref={mobileMenuRef}
            id="mobile-menu"
            className="md:hidden mt-4 space-y-1 pb-4 border-t border-[#E8E8E8] dark:border-[#2A2A2A] pt-4"
            role="navigation"
          >
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-[#121212] dark:text-white hover:text-[#064E3B] dark:hover:text-[#10B981] hover:bg-[#F5F5F5] dark:hover:bg-[#1A1A1A] rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#064E3B] dark:focus-visible:ring-[#10B981] font-medium"
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}
            <button
              className="w-full mt-4 px-6 py-3 rounded-2xl bg-[#064E3B] text-white hover:bg-[#053D2E] font-semibold transition-all duration-300 dark:bg-[#10B981] dark:text-[#121212] dark:hover:bg-[#059669] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#064E3B] dark:focus-visible:ring-[#10B981] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0F0F0F]"
              onClick={closeMobileMenu}
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
