import React from 'react';
import goodfirmsLogo from '../assets/goodfirms.svg';
import getappLogo from '../assets/Get-App.png';
import capterraLogo from '../assets/capterra.svg';

const ReviewsSection = () => {
  const reviewPlatforms = [
    {
    
      logo: goodfirmsLogo
    },
    {
      
      logo: getappLogo
    },
    {
      
      logo: capterraLogo
    }
  ];

  const testimonials = [
    {
      name: "MR. KANCHAN THAKUR",
      title: "IES MASTER",
      quote: "Pesofts is revolutionizing of online test series software. The platform is incredibly user-friendly and the results are accurate. Our students love the interface and we've seen significant improvement in their performance.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "MR. MUKESH KUMAR",
      title: "CAREER ENDEAVOUR",
      quote: "I switched from other vendors to pesofts and surprised because they handle and manage my exam management process very quickly. The support team is excellent and the features are exactly what we needed.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "MR. DESH RAJ",
      title: "CHANAKYA ACADEMY",
      quote: "These guys have extremely focus on the education sector. I hope to see innovation in the exam process through them. The proctoring features are outstanding and give us complete confidence in exam integrity.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Review Platforms Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We Got Lots Of Reviews From our Clients
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
  {reviewPlatforms.map((platform, index) => (
    <div
      key={index}
      className="relative bg-white p-10 rounded-[20px] overflow-hidden transform skew-x-[-8deg] shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Inner content layer (unskewed) */}
      <div className="flex justify-center items-center transform skew-x-[8deg]">
        <img
          src={platform.logo}
          alt={platform.name}
          className="w-[160px] h-auto object-contain"
        />
      </div>
    </div>
  ))}
</div>

        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Business Owner Loves To Pesofts Software Only
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <blockquote className="text-gray-600 italic mb-4 text-center">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-orange-600 text-sm">
                  {testimonial.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200">
              ALL CLIENTS
            </button>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
              CASE STUDY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
