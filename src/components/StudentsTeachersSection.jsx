import React from 'react';

const StudentsTeachersSection = () => {
  const clients = [
    "Kd Campus",
    "Goal Institute", 
    "Gate Academy",
    "Career Endeavour",
    "Pinnacle",
    "Chanakya"
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            What Pesofts Think For Students and Teachers
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Paragraph 1 - Student Benefits */}
          <div className="bg-orange-50 rounded-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Pesofts online examination software incorporates features to meet the requirements of both students and teachers. 
              Learners often experience anxiety and stress before tests, which impacts their mental health. With Pesofts, 
              learners can take exams anytime and anywhere from the comfort of their homes, offering convenience.
            </p>
          </div>

          {/* Paragraph 2 - Learning Experience */}
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              The software supports various question formats, such as MCQs (Multiple Choice Questions) and True/False types, 
              which keeps learners engaged and entertained during the exam. Students can view detailed results instantly after 
              completing the test, gaining insights into areas needing improvement. This panel aims to provide an excellent 
              learning experience and foster future development for the tutee.
            </p>
          </div>

          {/* Paragraph 3 - Teacher Benefits */}
          <div className="bg-green-50 rounded-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              The online examination system provides analyzed results post-test, enabling teachers to offer immediate feedback 
              to trainees. This strengthens the bond between teachers and students, allowing for proper guidance. Automatic 
              on-screen checking and online proctoring are mentioned as features that reduce the administrative burden on 
              teachers, making their work stress-free.
            </p>
          </div>

          {/* Paragraph 4 - Comparison and Clients */}
          <div className="bg-blue-50 rounded-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              While many similar software types are available, not all provide exclusive features like question banks, 
              automatic grading, and answer sheet generation with an answer key, along with a free trial. Other providers 
              often charge more, whereas Pesofts online test software is available at a moderate price and includes a free demo.
            </p>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Primary Clientele Who Have Trusted Pesofts For Many Years:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {clients.map((client, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <span className="text-gray-700 font-medium">& {client}</span>
                  </div>
                ))}
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <span className="text-gray-700 font-medium">& more</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <button className="bg-yellow-400 text-black px-12 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-200 shadow-lg">
              TRY FREE DEMO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsTeachersSection;
