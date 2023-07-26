import React from 'react'
import logo from '../assets/logo.png';
import facebookLogo from '../assets/facebookLogo.jpg';
import instaLogo from '../assets/instaLogi.jpg';
import twitterLogo from '../assets/twitterLogo.jpg';
import emailLogo from '../assets/emailLogo.jpg';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-8 rounded-full" />
            <span className="ml-2 text-xl font-semibold">Paytro by Quatro</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex mt-4 sm:mt-0">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
              <img src={facebookLogo} alt="Facebook" className="h-6 w-6 rounded-full" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
              <img src={instaLogo} alt="Instagram" className="h-6 w-6 rounded-full" />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
              <img src={twitterLogo} alt="Twitter" className="h-6 w-6 rounded-full" />
            </a>
            <a href="mailto:info@example.com" className="mr-4">
              <img src={emailLogo} alt="Email" className="h-6 w-6 rounded-full" />
            </a>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Paytro by Quatro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
