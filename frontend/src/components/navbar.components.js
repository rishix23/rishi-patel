import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-white text-lg font-semibold">
              Rishi
            </Link>
          </div>
          <div className="hidden md:block flex justify-center">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/about"
                className="text-gray-300 hover:text-white hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                About
              </Link>
              <Link
                to="/blogs"
                className="text-gray-300 hover:text-white hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                Blog
              </Link>
              <Link
                to="/projects"
                className="text-gray-300 hover:text-white hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                Projects
              </Link>
              <Link
                to="/photos"
                className="text-gray-300 hover:text-white hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                Photos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
