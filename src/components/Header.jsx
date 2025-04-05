import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full px-6 py-5 bg-black shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-4xl md:text-5xl font-extrabold text-white tracking-wider">
          TheMadBrains
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-xl font-extrabold text-white">
          <a href="#home" className="hover:text-gray-300 transition">
            Home
          </a>
          <a href="#services" className="hover:text-gray-300 transition">
            Services
          </a>
          <a href="#projects" className="hover:text-gray-300 transition">
            Projects
          </a>
          <a href="#about" className="hover:text-gray-300 transition">
            About
          </a>
        </nav>

        {/* CTA (Desktop) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-6 py-2 bg-white text-black text-xl font-bold rounded-full hover:bg-gray-200 transition"
          >
            Contact
          </a>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden z-50">
          <button
            onClick={toggleMenu}
            className="relative w-8 h-6 focus:outline-none"
          >
            <span
              className={`absolute h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
                isOpen ? "rotate-45 top-2.5" : "top-0"
              }`}
            />
            <span
              className={`absolute h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "top-2.5"
              }`}
            />
            <span
              className={`absolute h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
                isOpen ? "-rotate-45 bottom-2.5" : "bottom-0"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 py-4 px-6" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-5 text-white text-lg font-bold">
          <a href="#home" className="hover:text-gray-300" onClick={toggleMenu}>
            Home
          </a>
          <a
            href="#services"
            className="hover:text-gray-300"
            onClick={toggleMenu}
          >
            Services
          </a>
          <a
            href="#projects"
            className="hover:text-gray-300"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a href="#about" className="hover:text-gray-300" onClick={toggleMenu}>
            About
          </a>
          <a
            href="#contact"
            className="mt-2 px-5 py-2 bg-white text-black rounded-full text-center hover:bg-gray-200 transition"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
