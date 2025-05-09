import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Transform Unused Software into <span className="text-blue-600">Instant Revenue</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              SoftSell helps businesses recover value from unused software licenses through our secure, transparent marketplace.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center group"
              >
                Sell Your Licenses 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#how-it-works" 
                className="px-6 py-3 bg-white text-blue-600 border border-blue-200 rounded-md hover:bg-blue-50 transition-colors flex items-center justify-center"
              >
                Learn How It Works
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="bg-white p-6 rounded-xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Business team reviewing software licenses" 
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-4 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-300">
              <p className="text-lg font-semibold">Recover up to 70% of license value</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;