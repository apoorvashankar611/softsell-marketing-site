import React from 'react';
import { Upload, DollarSign, CreditCard } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Upload License Details',
      description: 'Share details about your unused software licenses through our secure portal.',
      icon: <Upload className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 2,
      title: 'Get Instant Valuation',
      description: 'Our proprietary algorithm provides a competitive market valuation within minutes.',
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 3,
      title: 'Get Paid Quickly',
      description: 'Accept our offer and receive payment through your preferred method within 48 hours.',
      icon: <CreditCard className="w-8 h-8 text-blue-600" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our streamlined process makes selling unused software licenses simple and profitable.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex-1"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  {step.icon}
                </div>
                <span className="text-3xl font-bold text-blue-600">0{step.id}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
                  <svg className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Start Selling Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;