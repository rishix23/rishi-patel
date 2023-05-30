import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

function Navbar({ onCallFromNavBar }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    onCallFromNavBar();
  };

  return (
    <nav className="dark:bg-gray-800 bg-gray-400 dark:text-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-lg font-semibold">
              Rishi
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
              onClick={handleMobileMenuToggle}>
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="hidden md:block flex justify-center">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={toggleTheme} className="dark:hover:text-black hover:text-white btn-navbar">
                test
              </button>
              <Link to="/about" className="btn-navbar">
                About
              </Link>
              <Link to="/blogs" className="btn-navbar">
                Blog
              </Link>
              <Link to="/projects" className="btn-navbar">
                Projects
              </Link>
              <Link to="/photos" className="btn-navbar">
                Photos
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            About
          </Link>
          <Link to="/blogs" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            Blogs
          </Link>
          <Link to="/projects" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            Projects
          </Link>
          <Link to="/photos" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            Photos
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
