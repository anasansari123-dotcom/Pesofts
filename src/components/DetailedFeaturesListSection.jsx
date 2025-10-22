import React from 'react';

const DetailedFeaturesListSection = () => {
  const basicFeatures = [
    "White Label",
    "Take Live Classes",
    "Quick Result Generate",
    "Coupon Generate Facility",
    "SMS Integration",
    "Online Exam Live"
  ];

  const detailedFeatures = [
    {
      title: "Easy Question Upload",
      description: "Compatible with AI, allowing users to upload questions or items in any language",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      )
    },
    {
      title: "Best Supportive Team",
      description: "Experienced team of Pesofts provides 24*7 support to ensure all examination-related queries and issues are resolved quickly. Quick generation of detailed results once an exam is completed.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
        </svg>
      )
    },
    {
      title: "Integrate SMS",
      description: "Ensures that test-takers receive necessary exam-related notifications. The system's responsiveness enables student evaluation on any screen (computer or mobile).",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Basic Features You Should Know Before Buying Examination Creating Software
          </h2>
        </div>
        
        {/* Basic Features List */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">General Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {basicFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center hover:bg-orange-100 transition-colors duration-200"
              >
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="font-semibold text-gray-900">{feature}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <span className="text-lg font-semibold text-gray-600">and lots of others...</span>
          </div>
        </div>
        
        {/* Detailed Features */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {detailedFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedFeaturesListSection;
