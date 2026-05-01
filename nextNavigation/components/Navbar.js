"use client"
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname()
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-xl font-semibold text-gray-800">
            MyBrand
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="/services" className="text-gray-600 hover:text-gray-900">Services</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </div>

      <div className="text-black">
        Currently Navbar is in {pathname}
      </div>
    </nav>

  );
};

export default Navbar;