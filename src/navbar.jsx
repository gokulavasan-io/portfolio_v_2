import React, { useState,useEffect } from "react";
import { Sun, Moon } from 'lucide-react';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [darkMode]);

  return (
    <nav className="fixed z-50 w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
      <div className="container px-6 py-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400" id="gvHero">Gokulavasan</div>

          {/* Hamburger Icon */}
          <button
            className="text-gray-800 dark:text-white lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Links for Desktop */}
          <div className="items-center hidden space-x-8 lg:flex">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
  <div className="flex flex-col items-center justify-center space-y-4 bg-white dark:bg-gray-800 lg:hidden">
    <a
      href="#home"
      className="text-xl nav-link"
      onClick={() => setIsMenuOpen(false)}
    >
      Home
    </a>
    <a
      href="#about"
      className="text-xl nav-link"
      onClick={() => setIsMenuOpen(false)}
    >
      About
    </a>
    <a
      href="#skills"
      className="text-xl nav-link"
      onClick={() => setIsMenuOpen(false)}
    >
      Skills
    </a>
    <a
      href="#projects"
      className="text-xl nav-link"
      onClick={() => setIsMenuOpen(false)}
    >
      Projects
    </a>
 
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {darkMode ? <Sun className="w-8 h-8" /> : <Moon className="w-8 h-8" />}
    </button>
  </div>
)}

      </div>
    </nav>
  );
};

export default Navbar;
