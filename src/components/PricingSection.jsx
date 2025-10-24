import React, { useState } from 'react';

const PricingSection = () => {
  // FAQ state management
  const [openFAQ, setOpenFAQ] = useState(1); // First FAQ is open by default

  const toggleFAQ = (faqNumber) => {
    setOpenFAQ(openFAQ === faqNumber ? null : faqNumber);
  };

  const pricingPlans = [
    {
      id: 'free',
      name: 'FREE',
      color: 'blue',
      students: '30 Students',
      price: '₹ 0/Year',
      features: [
        'Report For 100 Tests',
        'Web Only',
        'No Proctoring',
        'Admin Panel',
        'No Billing',
        'Teaching Online'
      ],
      buttonText: 'Contact Us Now',
      buttonColor: 'bg-green-500 hover:bg-green-600'
    },
    {
      id: 'basic',
      name: 'BASIC',
      color: 'yellow',
      students: '50 Students',
      price: '₹ 3,000/Yr $ 50/Yr',
      features: [
        'Unlimited Tests',
        'Exam Scheduling',
        'Remote Proctoring',
        'Shared App',
        'Two Way Communication',
        'Payment Gateway',
        '1 Admin Panel',
        'Std. Token Apply Facility',
        'Highly Secure'
      ],
      buttonText: 'Try it free',
      buttonColor: 'bg-green-500 hover:bg-green-600'
    },
    {
      id: 'professional',
      name: 'PROFESSIONAL',
      color: 'green',
      students: '100 Students.',
      price: '₹ 5,000/Yr $ 80/Yr',
      features: [
        'Unlimited Tests',
        'Exam Scheduling',
        'Remote Proctoring',
        'Shared App',
        'Two Way Communication',
        'Payment Gateway',
        '1 Admin Panel',
        'Monetize Test',
        'Std. Token Apply Facility',
        'Highly Secure'
      ],
      buttonText: 'Try it free',
      buttonColor: 'bg-green-500 hover:bg-green-600'
    },
    {
      id: 'business',
      name: 'BUSINESS',
      color: 'orange',
      students: '250 Students.',
      price: '₹ 10,000/Yr $ 145/Yr',
      features: [
        'Unlimited Tests',
        'Exam Scheduling',
        'Remote Proctoring',
        'Shared App',
        'Two Way Communication',
        'Payment Gateway',
        '1 Admin Panel',
        'Monetize Test',
        'Std. Token Apply Facility',
        'Highly Secure'
      ],
      buttonText: 'Try it free',
      buttonColor: 'bg-green-500 hover:bg-green-600'
    },
    {
      id: 'custom',
      name: 'CUSTOM',
      color: 'blue',
      students: 'Unlimited Students.',
      price: 'Custom Dashboard',
      features: [
        'Unlimited Tests',
        'Custom Dashboard',
        'Custom App',
        'Remote Proctoring',
        'Two Way Communication',
        'White Label App/Soft.',
        'Exam Scheduling',
        'Unlimited Admin Panel',
        'Payment Gateway',
        'Std. Token Apply Facility',
        'Monetize Test'
      ],
      buttonText: 'Contact Us Now',
      buttonColor: 'bg-green-500 hover:bg-green-600'
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'blue':
        return 'text-blue-500';
      case 'yellow':
        return 'text-yellow-500';
      case 'green':
        return 'text-green-500';
      case 'orange':
        return 'text-orange-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <section className="py-16 bg-white">
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
      {/* Modern Header Section with Gradient Background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-20 mt-[-65px]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              🚀 Best Pricing Guaranteed
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Online Exam Software
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your educational needs. Start with our free trial and scale as you grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
              <span className="flex items-center">
                🎯 Free Demo Request
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 border border-white/20 hover:border-white/40">
              <span className="flex items-center">
                📞 Contact Sales
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Plans Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-8">
          Online Examination Software Price With & Without Customization
        </h2>

        {/* Color Separator Line */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-1">
            <div className="w-16 h-1 bg-blue-400"></div>
            <div className="w-16 h-1 bg-yellow-400"></div>
            <div className="w-16 h-1 bg-green-400"></div>
            <div className="w-16 h-1 bg-orange-400"></div>
            <div className="w-16 h-1 bg-blue-600"></div>
          </div>
        </div>

        {/* Pricing Cards - Original Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold ${getColorClasses(plan.color)} mb-2`}>
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm mb-1">{plan.students}</p>
                <p className="text-gray-800 font-semibold text-lg">
                  {plan.price}
                  {plan.id !== 'custom' && (
                    <svg className="w-4 h-4 inline ml-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  )}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">
                      {feature}
                      {feature === 'Remote Proctoring' && (
                        <svg className="w-3 h-3 inline ml-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      )}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full ${plan.buttonColor} text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Pricing Comparison Table */}
        <div className="mt-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
            Feature Comparison Table
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              {/* Table Header */}
              <thead>
                <tr className="bg-gradient-to-r from-red-500 to-orange-500">
                  <th className="text-left text-white font-bold py-4 px-6 text-lg">FEATURES</th>
                  <th className="text-center text-white font-bold py-4 px-4 text-lg">FREE</th>
                  <th className="text-center text-white font-bold py-4 px-4 text-lg">BASIC</th>
                  <th className="text-center text-white font-bold py-4 px-4 text-lg">PROFESSIONAL</th>
                  <th className="text-center text-white font-bold py-4 px-4 text-lg">BUSINESS</th>
                  <th className="text-center text-white font-bold py-4 px-4 text-lg">CUSTOM</th>
                </tr>
              </thead>
              
              {/* Table Body */}
              <tbody>
                {/* Teaching App & Software */}
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-800 font-medium">
                    Teaching App & Software
                    <svg className="w-4 h-4 inline ml-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4 text-gray-600">Online Demo</td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>

                {/* Exam Conducting & Quiz Maker */}
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-800 font-medium">
                    Exam Conducting & Quiz Maker
                    <svg className="w-4 h-4 inline ml-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4 text-gray-600">Online Demo</td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>

                {/* Computer Based Test Software(CBT) */}
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-800 font-medium">
                    Computer Based Test Software(CBT)
                    <svg className="w-4 h-4 inline ml-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4 text-gray-600">Online Demo</td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>

                {/* Personalised Theme */}
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-800 font-medium">
                    Personalised Theme
                    <svg className="w-4 h-4 inline ml-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>

                {/* Proctoring Enabled */}
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-800 font-medium">
                    Proctoring Enabled*
                    <svg className="w-4 h-4 inline ml-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4 text-gray-600">Online Demo</td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>

                {/* Payment Gateway */}
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-800 font-medium">
                    Payment Gateway
                    <svg className="w-4 h-4 inline ml-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>

                {/* Shared App */}
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-800 font-medium">
                    Shared App *
                    <svg className="w-4 h-4 inline ml-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4 text-gray-600">Online Demo</td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>

                {/* 24*7 Support */}
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-800 font-medium">
                    24*7 Support
                    <svg className="w-4 h-4 inline ml-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4 text-gray-600">Email/Ticket Support</td>
                  <td className="text-center py-4 px-4 text-gray-600">Whatsapp/Email/Ticket Support</td>
                  <td className="text-center py-4 px-4 text-gray-600">Whatsapp/Email/Ticket Support</td>
                  <td className="text-center py-4 px-4 text-gray-600">Whatsapp/Email/Ticket Support</td>
                  <td className="text-center py-4 px-4 text-gray-600">Whatsapp/Email/Ticket Support</td>
                </tr>

                {/* Quick Report */}
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-800 font-medium">
                    Quick Report
                    <svg className="w-4 h-4 inline ml-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>

                {/* Concurrent Test */}
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-800 font-medium">
                    Concurrent Test
                    <svg className="w-4 h-4 inline ml-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>

                {/* Question Bank */}
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-800 font-medium">
                    Question Bank
                    <svg className="w-4 h-4 inline ml-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>

                {/* Other Features */}
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-800 font-medium">
                    Other Features
                    <svg className="w-4 h-4 inline ml-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="text-center py-4 px-4">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pricing Information Text */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
                Online Exam Software Basic Price Plan Start Only ₹10 ($0.15)/Student/Yr
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-lg mb-6">
                  In today's digital era, the demand for online exam software has grown exponentially. Educational institutions, 
                  training centers, and organizations worldwide are seeking reliable solutions to conduct examinations remotely. 
                  <strong className="text-orange-600">Pesofts</strong> offers comprehensive online exam software solutions designed to meet 
                  diverse educational and assessment needs.
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">
                  We have Two Types of Exam Conducting Software
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-orange-500">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">1. Customized Solutions</h4>
                    <p className="text-gray-700">
                      Our customized online exam software is tailored to meet specific client requirements. This version offers 
                      complete flexibility and personalization, allowing institutions to have a solution that perfectly matches 
                      their unique assessment needs and branding requirements.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-500">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">2. Non-Customized Solutions</h4>
                    <p className="text-gray-700">
                      For general student examinations, we offer a non-customized, low-cost version that provides all essential 
                      features at an affordable price. Many startups and small educational institutions prefer this option due 
                      to its cost-effectiveness and immediate availability.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg border border-blue-200">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">
                    Online Exam Software Price
                  </h3>
                  <p className="text-blue-700 text-lg">
                    <strong className="text-blue-900">Pesofts</strong> is an experienced provider of comprehensive exam software solutions. 
                    Our platform offers a wide range of functionalities including:
                  </p>
                  <ul className="mt-4 space-y-2 text-blue-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>Creating and managing tests and examinations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>Defining detailed instructions and guidelines</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>Assigning and managing assignments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>Advanced online proctoring capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>Comprehensive online teaching features</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg border border-green-200">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">
                    Why Choose Our Software?
                  </h3>
                  <p className="text-green-700 text-lg mb-4">
                    Our software features a <strong className="text-green-900">responsive panel that is both understandable and self-manageable</strong>, 
                    making it easy for educators and administrators to operate without extensive technical knowledge.
                  </p>
                  <p className="text-green-700 text-lg">
                    At <strong className="text-green-900">Pesofts</strong>, we prioritize customer satisfaction and service excellence. Our dedicated team 
                    is always available to resolve any issues and provide ongoing support. We believe in putting <strong className="text-green-900">service over money</strong>, 
                    ensuring that our clients receive the best possible experience and value from our solutions.
                  </p>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-lg text-gray-600">
                    We will provide you with a comprehensive list of features available in our software system, 
                    helping you make an informed decision about the best solution for your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Modern Feature Cards Section */}
          <div className="mt-24">
            <div className="text-center mb-16">
              <div className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ✨ Key Features & Benefits
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our
                <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Platform?
                </span>
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover the powerful features that make our exam software the perfect choice for educational institutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Simplified as well as Experienced Team */}
              <div className="group bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">👥</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      Expert Development Team
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Our software is designed by an experienced and efficient team of developers, ensuring a user-friendly experience free from complexities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Highly Secure */}
              <div className="group bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 border border-green-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🔒</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
                      Enterprise-Grade Security
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Your data is protected with SSL certificates and advanced security measures implemented by our professional security team.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Concurrent Students Participating */}
              <div className="group bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 border border-purple-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🚀</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                      Unlimited Concurrent Users
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      No limits on the number of students participating in live tests or classes. Scale effortlessly with unlimited concurrent users.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4: Backups */}
              <div className="group bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-8 border border-orange-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">💾</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                      Automated Data Backup
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Create secure backups of all student data and performance metrics with our automated backup system for complete peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modern FAQ Section */}
          <div className="mt-24">
            <div className="text-center mb-16">
              <div className="inline-block bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ❓ Frequently Asked Questions
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Got Questions?
                <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  We've Got Answers
                </span>
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Find answers to the most common questions about our pricing and features.
              </p>
            </div>
            
            {/* Modern Decorative Line */}
            <div className="flex justify-center mb-16">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-bounce delay-100"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full animate-bounce delay-200"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-bounce delay-300"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce delay-400"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce delay-500"></div>
              </div>
            </div>

            {/* Modern FAQ Items */}
            <div className="max-w-4xl mx-auto space-y-6">
              {/* FAQ Item 1 */}
              <div className="group bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div 
                  className="flex items-center justify-between p-8 cursor-pointer hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 transition-all duration-300"
                  onClick={() => toggleFAQ(1)}
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-lg">🎯</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      Can I Take Free Trial For All Educational Software?
                    </h4>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <svg className="w-5 h-5 text-white transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {openFAQ === 1 ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      )}
                    </svg>
                  </div>
                </div>
                {openFAQ === 1 && (
                  <div className="px-8 pb-8 animate-fadeIn">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        <span className="font-bold text-green-600">Yes!</span> Anyone can take a free trial for our Online Exam Software, Online Teaching App, or any other educational software. We believe in letting you experience our platform before making a commitment.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-orange-100 rounded-lg border border-orange-200 overflow-hidden">
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer hover:bg-orange-200 transition-colors duration-200"
                  onClick={() => toggleFAQ(2)}
                >
                  <h4 className="text-lg font-bold text-gray-800">
                    Q. For How Much Time I Can Take Free Trial. ?
                  </h4>
                  <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-white transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {openFAQ === 2 ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      )}
                    </svg>
                  </div>
                </div>
                {openFAQ === 2 && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-700">
                        <span className="font-semibold">Ans.</span> You can take a free trial for 7 days with full access to all features. This gives you enough time to explore and test the software before making a purchase decision.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-orange-100 rounded-lg border border-orange-200 overflow-hidden">
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer hover:bg-orange-200 transition-colors duration-200"
                  onClick={() => toggleFAQ(3)}
                >
                  <h4 className="text-lg font-bold text-gray-800">
                    Q. Can I Take This Software For Unlimited No. Of Students. ?
                  </h4>
                  <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-white transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {openFAQ === 3 ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      )}
                    </svg>
                  </div>
                </div>
                {openFAQ === 3 && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-700">
                        <span className="font-semibold">Ans.</span> Yes, our software supports unlimited students. You can conduct exams for any number of students simultaneously without any restrictions on the number of participants.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-orange-100 rounded-lg border border-orange-200 overflow-hidden">
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer hover:bg-orange-200 transition-colors duration-200"
                  onClick={() => toggleFAQ(4)}
                >
                  <h4 className="text-lg font-bold text-gray-800">
                    Q. What Will Be The Price Range For Custom and Non-Custom Online Exam Software For Unlimited No. Of Students.?
                  </h4>
                  <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-white transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {openFAQ === 4 ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      )}
                    </svg>
                  </div>
                </div>
                {openFAQ === 4 && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-700">
                        <span className="font-semibold">Ans.</span> For unlimited students: Non-customized software starts at ₹10 per student per year, while customized solutions are priced based on specific requirements. Contact us for detailed pricing.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-orange-100 rounded-lg border border-orange-200 overflow-hidden">
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer hover:bg-orange-200 transition-colors duration-200"
                  onClick={() => toggleFAQ(5)}
                >
                  <h4 className="text-lg font-bold text-gray-800">
                    Q. Is Online Exam Software & App Safe For Me?
                  </h4>
                  <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-white transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {openFAQ === 5 ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      )}
                    </svg>
                  </div>
                </div>
                {openFAQ === 5 && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-700">
                        <span className="font-semibold">Ans.</span> Absolutely! Our software is highly secure with SSL certificate encryption, regular security updates, and compliance with data protection standards. Your data and student information are completely safe.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Modern CTA Button */}
            <div className="text-center mt-16">
              <div className="relative inline-block">
                <button className="group relative bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 hover:from-red-600 hover:via-pink-600 hover:to-purple-700 text-white font-bold py-6 px-16 rounded-2xl text-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl shadow-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative flex items-center">
                    <span className="mr-3 text-2xl">🚀</span>
                    GET QUOTE NOW
                    <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              </div>
              <p className="text-gray-600 mt-6 text-lg">
                Ready to transform your educational experience? Let's get started today!
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
