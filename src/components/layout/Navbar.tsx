'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-zinc-200/80 py-3 shadow-xs' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Mark - No emoji, no gradients */}
        <Link 
          href="#hero" 
          className="flex items-center gap-2 text-zinc-950 font-semibold tracking-tight text-base"
        >
          <span>Saad Gul</span>
          <span className="text-xs font-mono text-zinc-500 font-normal">/ frontend</span>
        </Link>

        {/* Desktop Nav - Clean text, no pills */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-600 hover:text-zinc-950 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Button - One clean button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="/Saad_Gul_Resume.pdf"
            download
            className="text-xs font-mono text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            Resume
          </a>
          <Link
            href="#contact"
            className="px-3.5 py-1.5 text-xs font-medium text-white bg-zinc-950 hover:bg-zinc-800 rounded-md transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-zinc-600 hover:text-zinc-950 rounded-md border border-zinc-200"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 px-6 py-6 shadow-md">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-zinc-700 hover:text-zinc-950 py-1 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-zinc-200 flex items-center justify-between">
              <a
                href="/Saad_Gul_Resume.pdf"
                download
                className="text-xs font-mono text-zinc-600 hover:text-zinc-950"
              >
                Download Resume
              </a>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-1.5 text-xs font-medium text-white bg-zinc-950 rounded-md"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
