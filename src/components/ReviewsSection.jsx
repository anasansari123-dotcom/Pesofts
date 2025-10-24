import React from 'react';
import goodfirmsLogo from '../assets/goodfirms.svg';
import getappLogo from '../assets/Get-App.png';
import capterraLogo from '../assets/capterra.svg';

const ReviewsSection = () => {
  const reviewPlatforms = [
    {
      name: "GoodFirms",
      logo: goodfirmsLogo,
      rating: "4.8/5"
    },
    {
      name: "GetApp",
      logo: getappLogo,
      rating: "4.7/5"
    },
    {
      name: "Capterra",
      logo: capterraLogo,
      rating: "4.9/5"
    }
  ];

  const testimonials = [
    {
      name: "MR. KANCHAN THAKUR",
      title: "IES MASTER",
      quote: "Pesofts is revolutionizing online test series software. The platform is incredibly user-friendly and the results are accurate. Our students love the interface and we've seen significant improvement in their performance.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "MR. MUKESH KUMAR",
      title: "CAREER ENDEAVOUR",
      quote: "I switched from other vendors to pesofts and was surprised because they handle and manage my exam management process very quickly. The support team is excellent and the features are exactly what we needed.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "MR. DESH RAJ",
      title: "CHANAKYA ACADEMY",
      quote: "These guys have extremely focus on the education sector. I hope to see innovation in the exam process through them. The proctoring features are outstanding and give us complete confidence in exam integrity.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      rating: 5
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            Customer Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We Got Lots Of Reviews From Our Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            See what our satisfied customers have to say about our online examination platform
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {reviewPlatforms.map((platform, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-orange-500 hover:border-2"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={platform.logo}
                    alt={platform.name}
                    className="w-32 h-16 object-contain mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-1">{platform.rating}</div>
                    <div className="text-sm text-gray-500 font-medium">{platform.name}</div>
                  </div>
                </div>
                
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Business Owners Love Pesofts Software
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real testimonials from educational leaders who trust our platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-orange-500 hover:border-2"
            >
              <div className="absolute top-6 right-6 text-orange-200 group-hover:text-orange-300 transition-colors duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              <div className="flex justify-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 text-center italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-orange-200"
                />
                <div className="text-center">
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-orange-600 font-medium">
                    {testimonial.title}
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Success Stories</h3>
            <p className="text-lg mb-6 opacity-90">See how we've helped educational institutions transform their examination process</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
                View All Clients
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-orange-600 transition-all duration-200">
                Read Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
