"use client"
import React, { useState } from "react";

const AdminNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold">
            Admin Panel
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="/dashboard" className="hover:text-gray-300">Dashboard</a>
            <a href="/users" className="hover:text-gray-300">Users</a>
            <a href="/reports" className="hover:text-gray-300">Reports</a>
            <a href="/settings" className="hover:text-gray-300">Settings</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? (
                <span className="text-2xl">&times;</span>
              ) : (
                <span className="text-2xl">&#9776;</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 px-4 pb-4 space-y-2">
          <a href="/dashboard" className="block hover:text-gray-300">Dashboard</a>
          <a href="/users" className="block hover:text-gray-300">Users</a>
          <a href="/reports" className="block hover:text-gray-300">Reports</a>
          <a href="/settings" className="block hover:text-gray-300">Settings</a>
        </div>
      )}
    </nav>
  );
};

export default AdminNav;
