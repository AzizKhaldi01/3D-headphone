"use client";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className=" w-full bg-[#E5E5E5] ">
      <div className="container mx-auto px-8  pt-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#333333]">
            DEMO.
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
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
        </div>
      </div>
    </nav>
  );
};
