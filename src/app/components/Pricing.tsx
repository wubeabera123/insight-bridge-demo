import { Check } from 'lucide-react';
import React from 'react';

const plans = [
  {
    name: 'Prelims Package',
    price: '₹4,999',
    features: [
      'Complete prelims study material',
      'Previous year question papers',
      'Daily MCQ practice',
      'Basic performance analytics',
      'Mobile access'
    ]
  },
  {
    name: 'Mains Package',
    price: '₹7,999',
    features: [
      'Comprehensive mains material',
      'Answer writing practice',
      'Expert evaluation',
      'Detailed feedback system',
      'Topic-wise tests'
    ]
  },
  {
    name: 'Comprehensive Package',
    price: '₹11,999',
    popular: true,
    features: [
      'Complete prelims & mains coverage',
      'Premium study material',
      'Personal mentor support',
      'Live doubt clearing sessions',
      'Interview preparation'
    ]
  },
  {
    name: 'Test Series Package',
    price: '₹3,999',
    features: [
      'Full-length mock tests',
      'Subject-wise tests',
      'Performance analytics',
      'Detailed solutions',
      'Rank predictor'
    ]
  }
];

export default function Pricing() {
  return (
    <div className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Choose Your Success Path
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Select the package that best fits your preparation needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-gray-800 rounded-xl p-6 ${
                plan.popular 
                  ? 'ring-2 ring-[#34A853] scale-105' 
                  : 'border border-gray-700'
              }`}
            >
              {plan.popular && (
                <span className="inline-block px-4 py-1 rounded-full bg-green-900 text-green-300 text-sm font-medium mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-white mb-2">
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400">/year</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#34A853]" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-3 rounded-lg font-semibold ${
                  plan.popular
                    ? 'bg-[#34A853] text-white hover:bg-green-600'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                } transition-colors`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}