'use client';

import Link from 'next/link';
import { useState } from 'react';

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
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#000922] to-[#0f1a3a] border-b border-[#86BC25]/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-[#86BC25] to-[#a8d63f] rounded-lg flex items-center justify-center font-bold text-[#000922] group-hover:shadow-lg group-hover:shadow-[#86BC25]/60 transition-all">
              V
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-white to-[#86BC25] bg-clip-text text-transparent">
              VedicSkill
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#c0c0c0] hover:text-[#86BC25] transition-colors duration-300 font-medium text-sm relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#86BC25] to-[#a8d63f] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-2 rounded-lg border border-[#86BC25]/60 text-[#86BC25] hover:bg-[#86BC25]/20 transition-all duration-300 font-medium text-sm">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-[#0f1a3a] rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6 text-[#86BC25]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-4 border-t border-[#86BC25]/40 pt-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-[#c0c0c0] hover:text-[#86BC25] hover:bg-[#0f1a3a] rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full mt-4 px-4 py-2 rounded-lg bg-[#86BC25] text-[#000922] hover:bg-[#a8d63f] transition-all duration-300 font-medium">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
