import React from 'react';
import { ShieldCheck, Clock, TrendingUp, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      title: 'Secure Transactions',
      description: 'Bank-level encryption and secure transfer protocols protect your sensitive license information.',
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 2,
      title: 'Fast Turnaround',
      description: 'Get valuations in minutes and payment within 48 hours of accepting our competitive offer.',
      icon: <Clock className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 3,
      title: 'Maximum Value',
      description: 'Our market analysis ensures you get the highest possible value for your unused licenses.',
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 4,
      title: 'Effortless Process',
      description: 'Our streamlined system handles all the complexity, from verification to transfer documentation.',
      icon: <Zap className="w-8 h-8 text-blue-600" />,
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose SoftSell</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We've optimized every aspect of the software resale process to provide unmatched value and convenience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div 
              key={reason.id} 
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;