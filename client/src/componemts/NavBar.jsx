import React from 'react';
import { FaUser, FaChartLine, FaPhone, FaMoneyBill, FaInfoCircle } from 'react-icons/fa';
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={logo} alt="PayTro Logo" className="w-16 h-16" />
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-300 hover:text-white hover:border-white"
          type="button"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path
              d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:justify-end">
        <div className="text-sm lg:flex-grow lg:text-right">
          <a
            href="/login"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-6 font-semibold text-lg"
          >
            <FaUser className="inline-block mr-2" />
            Login/Sign Up
          </a>
          <a
            href="/dashboard"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-6 font-semibold text-lg"
          >
            <FaChartLine className="inline-block mr-2" />
            User Dashboard
          </a>
          <a
            href="/contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-6 font-semibold text-lg"
          >
            <FaPhone className="inline-block mr-2" />
            Support/Contact Us
          </a>
          <a
            href="/plans"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-6 font-semibold text-lg"
          >
            <FaMoneyBill className="inline-block mr-2" />
            Subscription Plans
          </a>
          <a
            href="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white font-semibold text-lg"
          >
            <FaInfoCircle className="inline-block mr-2" />
            About Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
