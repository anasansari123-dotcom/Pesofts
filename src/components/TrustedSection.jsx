import React from 'react';
import kdCampusLogo from '../assets/kd-logo.png';
import careerEndeavourLogo from '../assets/career-logo.png';
import studyMantraLogo from '../assets/adhyayanlogo.png';
import gateAcademyLogo from '../assets/thegateacademy.png';
import pinnacleLogo from '../assets/logopinnacle.jpg';

const TrustedSection = () => {
  const partners = [
    {
      name: 'KDCAMPUS',
      logo: kdCampusLogo
    },
    {
      name: 'CAREER ENDEAVOUR',
      logo: careerEndeavourLogo
    },
    {
      name: 'अध्ययन मंत्र',
      logo: studyMantraLogo
    },
    {
      name: 'GATE ACADEMY',
      logo: gateAcademyLogo
    },
    {
      name: 'PINNACLE',
      logo: pinnacleLogo
    }
  ];

  return (
    <div className="bg-gradient-to-r from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            Trusted Partners
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Educational Institutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of educational institutions that trust our platform for their examination needs
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center justify-center h-16">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto object-contain max-w-[120px] group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="mt-3 text-center">
                <p className="text-xs text-gray-500 font-medium">{partner.name}</p>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">1000+</div>
            <div className="text-gray-600 font-medium">Institutions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">50K+</div>
            <div className="text-gray-600 font-medium">Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">1M+</div>
            <div className="text-gray-600 font-medium">Exams Conducted</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">99.9%</div>
            <div className="text-gray-600 font-medium">Uptime</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
