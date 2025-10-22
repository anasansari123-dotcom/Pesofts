import React from 'react';

const ExamTypesSection = () => {
  const examTypes = [
    {
      type: "Website-based",
      title: "First Type (Website-based)",
      features: [
        "Responsive design",
        "Supports iOS and Android",
        "Customized dashboard based on client's requirement"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "green",
      recommended: true
    },
    {
      type: "Web-based",
      title: "Second Type (Web-based Testing Conducting System)",
      features: [
        "Only supports computer screens",
        "No customized dashboard as per user's needs",
        "Not compatible with iOS or Android"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "gray",
      recommended: false
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Types of Exam Software/System Pesofts Provided
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer two types of online exam conducting software to meet different organizational needs and requirements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {examTypes.map((examType, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                examType.recommended ? 'ring-2 ring-green-500' : ''
              }`}
            >
              {examType.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Recommended
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  examType.color === 'green' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                }`}>
                  {examType.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {examType.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {examType.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${
                      examType.color === 'green' ? 'bg-green-100' : 'bg-gray-100'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        examType.color === 'green' ? 'bg-green-500' : 'bg-gray-500'
                      }`}></div>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
       
      </div>
    </div>
  );
};

export default ExamTypesSection;
