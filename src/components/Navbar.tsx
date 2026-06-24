/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Landmark, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: (feature?: string) => void;
}

export default function Navbar({ onOpenDemo }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Before / After', href: '#day-in-life' },
    { name: 'Features', href: '#features' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'HRMS', href: '#hrms' },
    { name: 'Field Tools', href: '#field-tools' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 w-full z-40 bg-[#f4f7f6] border-b border-[#c3c6cf]/30 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Landmark className="w-8 h-8 text-[#066054] transition-transform duration-300 group-hover:scale-105" />
          <span className="font-sans text-2xl font-bold text-[#066054] tracking-tight">
            ValuXpert
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-sans">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold tracking-wide text-gray-600 hover:text-[#066054] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => onOpenDemo()}
            className="px-5 py-2 rounded-lg font-sans text-sm font-bold shadow-md bg-[#fcaa33] hover:bg-[#ef9f27] text-[#001732] hover:scale-[1.03] active:scale-[0.97] transition-all cursor-pointer"
          >
            Request a Demo
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#066054]"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Backdrop & Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-50 flex flex-col p-6 space-y-6 shadow-inner border-t border-gray-100">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-gray-800 hover:text-[#066054] py-2 border-b border-gray-100"
              >
                {link.name}
              </a>
            ))}
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDemo();
            }}
            className="w-full bg-[#fcaa33] hover:bg-[#ef9f27] text-[#001732] py-3 rounded-lg font-sans font-bold shadow-lg text-center"
          >
            Request a Demo
          </button>
        </div>
      )}
    </header>
  );
}
