import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white relative">
      {/* Red line at top */}
      <div className="h-1 bg-red-600"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* PRODUCT'S */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">PRODUCT'S</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Online Exam Software</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Online Teaching App</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Online Exam App</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Assessment Software</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Offline Software</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Recording Software</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Quiz Maker Software</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Software Demo</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Software USA</a></li>
            </ul>
          </div>

          {/* KEEP TOUCH */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">KEEP TOUCH</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Faq</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Career</a></li>
            </ul>
          </div>

          {/* CITIES WE SERVE */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">CITIES WE SERVE</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Delhi</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Ahmedabad</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hyderabad</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Indore</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Jaipur</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Kota</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Lucknow</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Patna</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Add Your City</a></li>
            </ul>
          </div>

          {/* CONDUCT ANY EXAMS */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">CONDUCT ANY EXAMS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">JEE Exam</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">RRB JE Exam</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">IBPS Exams</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">SSC Je Exams</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">RRB NTPC</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">CSIR NET</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">SSC CGL Exam</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Conduct Other Exams</a></li>
            </ul>
          </div>

          {/* IMPORTANT LINK */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">IMPORTANT LINK</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Case Study</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Client</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sitemap</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Rss Feed</a></li>
            </ul>
          </div>

          {/* MAIN BRANCH */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">MAIN BRANCH</h3>
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Location
            </button>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-12 mb-8">
          <a href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-gray-800 transition-colors">
            <span className="font-bold">f</span>
          </a>
          <a href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-gray-800 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-gray-800 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-gray-800 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-gray-800 transition-colors">
            <span className="font-bold text-sm">in</span>
          </a>
        </div>

        {/* Copyright Information */}
        <div className="text-center text-gray-300">
          <p className="mb-2">
            © Copyrights <span className="font-bold text-orange-500">PESOFTS</span> 2020. All rights reserved.{' '}
            <a href="#" className="text-orange-500 hover:text-orange-400">Privacy policy</a> |{' '}
            <a href="#" className="text-orange-500 hover:text-orange-400">Terms of use</a>
          </p>
        </div>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors shadow-lg">
          Chat and Get Discount
        </button>
      </div>
    </footer>
  );
};

export default Footer;
