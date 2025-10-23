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
      {/* Header Section with Gradient Background */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Online Exam Software Price - Guaranteed Best Price Software
          </h1>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200">
            Free Demo Request
          </button>
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

        {/* Pricing Cards */}
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

          {/* Feature Cards Section */}
          <div className="mt-16">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Key Features & Benefits
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Simplified as well as Experienced Team */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">
                      Simplified as well as Experienced Team:
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Our software is free from any kind of complexities and is designed by an experienced as well as an efficient team of developers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Highly Secure */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">
                      Highly Secure:
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Our team of professionals make sure that all your data is secured by incorporating a secure socket layer certificate.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Concurrent Students Participating */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">
                      Concurrent Students Participating In a Particular Time
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      There is no limit on the number of students who have to either participate in the live tests or live classes. Any number of students can easily do this at a particular time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4: Backups */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">
                      Backups:
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Backups are very important and Users can easily create a backup of all the data as well as the performance of the students.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
              FAQ For Online Examination Software Price
            </h3>
            
            {/* Colorful Decorative Line */}
            <div className="flex justify-center mb-12">
              <div className="flex space-x-1">
                <div className="w-8 h-1 bg-red-500"></div>
                <div className="w-8 h-1 bg-orange-500"></div>
                <div className="w-8 h-1 bg-yellow-500"></div>
                <div className="w-8 h-1 bg-green-400"></div>
                <div className="w-8 h-1 bg-green-500"></div>
                <div className="w-8 h-1 bg-blue-400"></div>
                <div className="w-8 h-1 bg-blue-600"></div>
                <div className="w-8 h-1 bg-purple-500"></div>
                <div className="w-8 h-1 bg-gray-600"></div>
              </div>
            </div>

            {/* FAQ Items */}
            <div className="max-w-4xl mx-auto space-y-4">
              {/* FAQ Item 1 */}
              <div className="bg-orange-100 rounded-lg border border-orange-200 overflow-hidden">
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer hover:bg-orange-200 transition-colors duration-200"
                  onClick={() => toggleFAQ(1)}
                >
                  <h4 className="text-lg font-bold text-gray-800">
                    Q. Can I Take Free Trial For All Educational Software.?
                  </h4>
                  <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-white transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {openFAQ === 1 ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      )}
                    </svg>
                  </div>
                </div>
                {openFAQ === 1 && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-700">
                        <span className="font-semibold">Ans.</span> Yes.! Anyone Can Take Free Trial For Online Exam Software, Online Teaching App or Other Education Software.
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

            {/* GET QUOTE NOW Button */}
            <div className="text-center mt-12">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-lg text-xl transition-colors duration-200 transform hover:scale-105 shadow-lg">
                GET QUOTE NOW
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
