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
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-black font-semibold text-lg mb-6 lg:mb-0">
            Trusted On Us:
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 flex items-center justify-center min-w-[120px]"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 w-auto object-contain max-w-[100px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
