import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 fixed bottom-0 left-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo / About */}
        <div className="text-sm">
          <span className="font-bold text-white">MyWebsite</span> © {new Date().getFullYear()}
        </div>

        {/* Links */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Services</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;