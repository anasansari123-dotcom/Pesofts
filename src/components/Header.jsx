import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full sticky top-0 z-50" role="banner">
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-2 sm:py-3" role="complementary" aria-label="Contact information">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center space-x-2 sm:space-x-4 lg:space-x-6">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-xs sm:text-sm font-medium whitespace-nowrap">+91-9540289135</span>
              </div>
              
              <div className="flex items-center space-x-1 sm:space-x-2">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-xs sm:text-sm font-medium whitespace-nowrap">Pessworld@gmail.com</span>
              </div>
            </div>

            <div className="flex items-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 transform hover:scale-105 whitespace-nowrap">
                Free Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Link to="/" className="hover:opacity-80 transition-opacity duration-200">
                <img src="/logo.webp" alt="Pesofts Logo" className="w-52 h-15 object-contain" />
              </Link>
            </div>

            <nav className="hidden lg:flex space-x-8" role="navigation" aria-label="Main navigation">
              <Link to="/" className="text-gray-700 hover:text-orange-600 font-semibold transition-all duration-200 relative group">
                HOME
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <a href="#products" className="text-gray-700 hover:text-orange-600 font-semibold transition-all duration-200 relative group">
                PRODUCT
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <Link to="/pricing" className="text-gray-700 hover:text-orange-600 font-semibold transition-all duration-200 relative group">
                PRICING
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <a href="#exams" className="text-gray-700 hover:text-orange-600 font-semibold transition-all duration-200 relative group">
                EXAMS
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="#cities" className="text-gray-700 hover:text-orange-600 font-semibold transition-all duration-200 relative group">
                CITIES
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 font-semibold transition-all duration-200 relative group">
                ABOUT
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 font-semibold transition-all duration-200 relative group">
                CONTACT
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
              </a>
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
                Get Started
              </button>
            </div>

            <div className="lg:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-orange-600 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg" role="navigation" aria-label="Mobile navigation">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link 
                  to="/" 
                  className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-semibold transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  HOME
                </Link>
                <a 
                  href="#products" 
                  className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-semibold transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  PRODUCT
                </a>
                <Link 
                  to="/pricing" 
                  className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-semibold transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  PRICING
                </Link>
                <a 
                  href="#exams" 
                  className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-semibold transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  EXAMS
                </a>
                <a 
                  href="#cities" 
                  className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-semibold transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CITIES
                </a>
                <a 
                  href="#about" 
                  className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-semibold transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ABOUT
                </a>
                <a 
                  href="#contact" 
                  className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-semibold transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CONTACT
                </a>
                <div className="pt-4">
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
