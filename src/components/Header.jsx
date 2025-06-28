import React, { useState } from "react";
import vite from "../assets/reactIcon.gif";
import img from "../assets/technologyImg.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const [isHovered, setIsHovered] = useState(false);

  console.log(isHovered);

  return (
    <header className="w-full px-6 py-5 bg-black shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-4xl md:text-5xl font-extrabold text-white tracking-wider">
          DevCool
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-xl font-extrabold text-white">
          <a href="#home" className="hover:text-gray-300 transition">
            Home
          </a>

          {/* Modal trigger button */}
          <a
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setTimeout(() => setIsHovered(false), 200)}
            className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white"
          >
            Company
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
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

        {/* modal  */}
        {isHovered && (
          
          <div className="absolute z-50 top-20 right-5 w-[900px] bg-white rounded-2xl shadow-lg p-4 border  mr-80 h-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setTimeout(() => setIsHovered(false), 200)}
          >

            <h2 className="text-lg font-semibold mb-2 text-gray-500 ">WHAT WE DO</h2>
            <ul className="flex flex-row gap-2 ">
              <li>
                <button className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200">
                  Web Development
                </button>
              </li>
              <li>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200">
                  App Development
                </button>
              </li>
            </ul>

            <p className="text-lg text-gray-500 mt-6 ">
              TECH SERVICES
            </p>

            {/* <div className="w-30 ml-200">
              <img src={img} alt="" />
            </div> */}

            {/* grid  */}
            <ul className="grid grid-cols-3 gap-5 mt-2">
              <li className="flex flex-row gap-2 p-4 border border-white rounded-xl bg-gray-100 shadow-lg ">
                <div className="w-25 h-auto mr-2 ">
                  <img src={vite} alt="" srcset="" />
                </div>

                <div>
                  <h1 className="text-lg font-semibold">MERN Stack</h1>
                  <p className="text-sm text-gray-600">The MERN stack is a popular technology.</p>
                </div>
              </li>

              <li className="flex flex-row gap-2 p-4 border border-white rounded-xl bg-gray-100 shadow-lg ">
                <div className="w-25 h-auto mr-2 ">
                  <img src={vite} alt="" srcset="" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold">MERN Stack</h1>
                  <p className="text-sm text-gray-600">The MERN stack is a popular technology.</p>
                </div>
              </li>

              <li className="flex flex-row gap-2 p-4 border border-white rounded-xl bg-gray-100 shadow-lg ">
                <div className="w-25 h-auto mr-2 ">
                  <img src={vite} alt="" srcset="" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold">MERN Stack</h1>
                  <p className="text-sm text-gray-600">The MERN stack is a popular technology.</p>
                </div>
              </li>

              <li className="flex flex-row gap-2 p-4 border border-white rounded-xl bg-gray-100 shadow-lg ">
                <div className="w-25 h-auto mr-2 ">
                  <img src={vite} alt="" srcset="" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold">MERN Stack</h1>
                  <p className="text-sm text-gray-600">The MERN stack is a popular technology.</p>
                </div>
              </li>

              <li className="flex flex-row gap-2 p-4 border border-white rounded-xl bg-gray-100 shadow-lg ">
                <div className="w-25 h-auto mr-2 ">
                  <img src={vite} alt="" srcset="" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold">MERN Stack</h1>
                  <p className="text-sm text-gray-600">The MERN stack is a popular technology.</p>
                </div>
              </li>

              <li className="flex flex-row gap-2 p-4 border border-white rounded-xl bg-gray-100 shadow-lg ">
                <div className="w-25 h-auto mr-2 ">
                  <img src={vite} alt="" srcset="" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold">MERN Stack</h1>
                  <p className="text-sm text-gray-600">The MERN stack is a popular technology.</p>
                </div>
              </li>

              

             

            </ul>

            <p className="text-lg text-gray-500 mt-6 ">
            Industries
            </p>
            
            {/* grid  */}
            <ul className="grid grid-cols-3 gap-5 mt-2">
              <li className="flex flex-row gap-2 p-4 border border-white rounded-xl bg-gray-100 shadow-lg ">
                <div className="w-25 h-auto mr-2 ">
                  <img src={vite} alt="" srcset="" />
                </div>

                <div>
                  <h1 className="text-lg font-semibold">E-Commerce</h1>
                  <p className="text-sm text-gray-600">The MERN stack is a popular technology.</p>
                </div>
              </li>

              <li className="flex flex-row gap-2 p-4 border border-white rounded-xl bg-gray-100 shadow-lg ">
                <div className="w-25 h-auto mr-2 ">
                  <img src={vite} alt="" srcset="" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold">Education Platform</h1>
                  <p className="text-sm text-gray-600">The MERN stack is a popular technology.</p>
                </div>
              </li>

              <li className="flex flex-row gap-2 p-4 border border-white rounded-xl bg-gray-100 shadow-lg ">
                <div className="w-25 h-auto mr-2 ">
                  <img src={vite} alt="" srcset="" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold">Healthcare</h1>
                  <p className="text-sm text-gray-600">The MERN stack is a popular technology.</p>
                </div>
              </li>
              </ul>
            
          </div>

        )}

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
              className={`absolute h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 top-2.5" : "top-0"
                }`}
            />
            <span
              className={`absolute h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${isOpen ? "opacity-0" : "top-2.5"
                }`}
            />
            <span
              className={`absolute h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 bottom-2.5" : "bottom-0"
                }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96 py-4 px-6" : "max-h-0"
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
