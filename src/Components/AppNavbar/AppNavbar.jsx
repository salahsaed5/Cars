import { useState } from "react";
import { Link } from "react-router-dom";
import navImg from "./../../assets/imges/nav/logo.png";

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-opacity-0 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={navImg} className="h-8" alt="Company Logo" />
        </a>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className="hidden lg:flex justify-center flex-grow">
          <ul className="flex space-x-6 font-medium text-gray-900">
            <li>
              <Link to="/" className="hover:text-blue-700">
                Become a renter
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-blue-700">
                Rental deals
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-blue-700">
                How it works
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-blue-700">
                Why choose us
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <button className="text-sm font-normal text-black">Sign in</button>
          <button className="text-white bg-[#0D6EFD] hover:bg-[#0D459D] font-medium rounded-lg text-sm px-5 py-2.5">
            Sign up
          </button>
        </div>

        <div
          className={`${isMenuOpen ? "block" : "hidden"} w-full lg:hidden mt-4`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col justify-around w-full p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 md:border-0 lg:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Become a renter
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Rental deals
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                How it works
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Why choose us
              </Link>
            </li>

            <li>
              <button className="block w-full text-left py-2 px-3 text-gray-900 rounded hover:bg-gray-100">
                Sign in
              </button>
            </li>
            <li>
              <button className="block w-full text-left py-2 px-3 text-white bg-blue-700 hover:bg-blue-500 rounded">
                Sign up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
