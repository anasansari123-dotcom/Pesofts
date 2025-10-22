import React from 'react';
import googleCloudLogo from '../assets/google-cloud.webp';
import awsLogo from '../assets/aws-services.png';
import azureLogo from '../assets/azure.png';

const ServicesSection = () => {
  const services = [
    {
      // name: "Google Cloud Platform",
      logo: googleCloudLogo
    },
    {
      // name: "Amazon Web Services",
      logo: awsLogo
    },
    {
      // name: "Microsoft Azure",
      logo: azureLogo
    }
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Services We Deliver With Trusted Companies
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
  {services.map((service, index) => (
    <div
      key={index}
      className="relative bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center
                 rounded-[20px] overflow-hidden transform skew-x-[-6deg]"
    >
      <div className="absolute inset-0 bg-gray-50 -z-10 skew-x-[6deg]"></div>
      <div className="flex justify-center items-center h-full transform skew-x-[6deg]">
        <img
          src={service.logo}
          alt={service.name}
          className="max-w-[180px] h-auto object-contain"
        />
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default ServicesSection;
