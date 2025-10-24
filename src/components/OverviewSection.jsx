import React from 'react';

const OverviewSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Know More Before Buying Pesofts Online Exam Software
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Pesofts online exam software is a digital-friendly education software/system designed for colleges, institutions, and corporate sectors. Its primary function is to enable the management and creation of exams, as well as the assessment of students and employees through both offline and online examinations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The introduction of this software has led many national-level competitive examinations to shift from offline to online testing, revolutionizing the education sector.
              </p>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Key Capabilities</h4>
              <p className="text-gray-700 leading-relaxed">
                Our online test software allows corporate entities, colleges, and coaching centers to assess the progress of their employees and the capabilities of applicants during recruitment through aptitude or psychometric tests.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Exclusive Features</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Robust Security</h4>
                  <p className="text-gray-600 text-sm">Enterprise-grade security measures to ensure exam integrity</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">User-Friendly Interface</h4>
                  <p className="text-gray-600 text-sm">Intuitive design for easy navigation and operation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Authorized Access Control</h4>
                  <p className="text-gray-600 text-sm">Secure access management for authorized personnel only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
