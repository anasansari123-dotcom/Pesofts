import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Bar - Dark Gray */}
      <div className="bg-gray-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end space-x-6">
            {/* Phone Contact */}
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-sm">Call Us: +91-9540289135</span>
            </div>
            
            {/* Email Contact */}
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-sm">Pessworld@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - White */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              {/* Logo Image */}
              <img src="/src/assets/logo.webp" alt="Pesofts Logo" className="w-52 h-14" />
              
              {/* Logo Text */}
              {/* <div className="flex items-baseline">
                <span className="text-2xl font-bold text-orange-500">Pesofts</span>
                <span className="text-lg text-black ml-1">.com</span>
              </div> */}
            </div>

            {/* Navigation Menu */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200">
                HOME
              </Link>
              <a href="#" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200">
                PRODUCT
              </a>
              <Link to="/pricing" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200">
                PRICING
              </Link>
              <a href="#" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200">
                EXAMS
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200">
                CITIES WE SERVE
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200">
                ABOUT
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200">
                BLOG
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200">
                CONTACT
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-orange-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
