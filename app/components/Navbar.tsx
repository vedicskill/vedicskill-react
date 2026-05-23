'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/courses', label: 'Courses' },
    { href: '/blog', label: 'Blog' },
    { href: '/tutorials', label: 'Tutorials' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-[#0F0F0F] border-b border-[#E8E8E8] dark:border-[#2A2A2A] backdrop-blur-md bg-opacity-95 dark:bg-opacity-95">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* <div className="w-10 h-10 bg-gradient-to-br from-[#064E3B] to-[#053D2E] rounded-xl flex items-center justify-center font-bold text-white group-hover:shadow-lg transition-all duration-300">
              V
            </div> */}
            <span className="font-bold text-lg text-[#121212] dark:text-white tracking-tight">
              VedicSkill
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#121212] dark:text-white hover:text-[#064E3B] dark:hover:text-[#10B981] transition-colors duration-300 font-medium text-sm relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#064E3B] dark:bg-[#10B981] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <button className="px-6 py-2.5 rounded-2xl border-2 border-[#064E3B] text-[#064E3B] font-semibold text-sm hover:bg-[#064E3B] hover:text-white transition-all duration-300 dark:border-[#10B981] dark:text-[#10B981] dark:hover:bg-[#10B981] dark:hover:text-[#121212]">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 hover:bg-[#F5F5F5] dark:hover:bg-[#1A1A1A] rounded-xl transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-6 h-6 text-[#121212] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4 border-t border-[#E8E8E8] dark:border-[#2A2A2A] pt-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-[#121212] dark:text-white hover:text-[#064E3B] dark:hover:text-[#10B981] hover:bg-[#F5F5F5] dark:hover:bg-[#1A1A1A] rounded-xl transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full mt-4 px-6 py-3 rounded-2xl bg-[#064E3B] text-white hover:bg-[#053D2E] font-semibold transition-all duration-300 dark:bg-[#10B981] dark:text-[#121212] dark:hover:bg-[#059669]">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
