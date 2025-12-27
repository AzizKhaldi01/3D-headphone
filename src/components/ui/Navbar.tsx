"use client";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#E5E5E5]/80 backdrop-blur-md z-[100]">
      <div className="container mx-auto px-6 md:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#333333]">
            DEMO.
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/overview"
              className="text-[#333333] hover:text-gray-600 transition-colors"
            >
              Overview
            </Link>
            <Link
              href="/specs"
              className="text-[#333333] hover:text-gray-600 transition-colors"
            >
              Specs
            </Link>
            <Link
              href="/support"
              className="text-[#333333] hover:text-gray-600 transition-colors"
            >
              Support
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#333333] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Links */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-6 flex flex-col space-y-4">
            <Link
              href="/overview"
              className="text-[#333333] hover:text-gray-600 transition-colors text-lg"
              onClick={() => setIsOpen(false)}
            >
              Overview
            </Link>
            <Link
              href="/specs"
              className="text-[#333333] hover:text-gray-600 transition-colors text-lg"
              onClick={() => setIsOpen(false)}
            >
              Specs
            </Link>
            <Link
              href="/support"
              className="text-[#333333] hover:text-gray-600 transition-colors text-lg"
              onClick={() => setIsOpen(false)}
            >
              Support
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
