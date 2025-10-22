import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What Is Online Testing Software?",
      answer: "Online Testing Software Is an Exam Conducting Software, With This Software Everyone Can Conduct There Students Online Tests Using Web & App Base System."
    },
    {
      question: "Is My Data Is Secure In This System?",
      answer: "Yes, your data is completely secure in our system. We use enterprise-grade security measures including SSL encryption, secure authentication, and regular security updates to protect all your information."
    },
    {
      question: "Is Proctoring Available In Pesofts Software?",
      answer: "Yes, Pesofts software includes advanced proctoring features. Our AI-powered proctoring system monitors students through webcam, detects suspicious activities, prevents tab switching, and records the entire exam session for complete security."
    },
    {
      question: "Can I Get Free Pesofts Software Demo First?",
      answer: "Absolutely! We offer a free demo of our software so you can experience all the features before making a decision. You can try our platform with a 14-day free trial to see how it works for your institution."
    },
    {
      question: "Can You Tell How To Make Online Test Paper?",
      answer: "Creating online test papers with Pesofts is simple. You can upload questions in any format, set time limits, configure question types (MCQ, subjective, etc.), add answer keys, and publish the test. Our user-friendly interface makes the entire process quick and easy."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-orange-50 hover:bg-orange-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    Q. {faq.question}
                  </h3>
                  <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center flex-shrink-0">
                    {openIndex === index ? (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    )}
                  </div>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-white">
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-500 font-bold">Ans. ✓</span>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
