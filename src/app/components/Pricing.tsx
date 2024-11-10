import { Check } from 'lucide-react';
import React from 'react';

const plans = [
  {
    name: 'Starter',
    price: '$9',
    features: [
      '1 Active Bot',
      '1,000 Monthly Messages',
      'Basic Bot Templates',
      'Standard Support',
      'Basic Analytics'
    ]
  },
  {
    name: 'Professional',
    price: '$29',
    features: [
      '5 Active Bots',
      '10,000 Monthly Messages',
      'Advanced Templates',
      'Priority Support',
      'Advanced Analytics'
    ]
  },
  {
    name: 'Business',
    price: '$79',
    popular: true,
    features: [
      'Unlimited Active Bots',
      '100,000 Monthly Messages',
      'Custom Bot Development',
      '24/7 Premium Support',
      'AI-Powered Features'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Custom Bot Solutions',
      'Unlimited Messages',
      'Dedicated Account Manager',
      'SLA Guarantee',
      'Custom Integrations'
    ]
  }
];

export default function Pricing() {
  return (
    <div className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your bot-building needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-gray-800 rounded-xl p-6 ${
                plan.popular 
                  ? 'ring-2 ring-blue-500 scale-105' 
                  : 'border border-gray-700'
              }`}
            >
              {plan.popular && (
                <span className="inline-block px-4 py-1 rounded-full bg-blue-900 text-blue-300 text-sm font-medium mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-white mb-2">
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-gray-400">/month</span>}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-3 rounded-lg font-semibold ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                } transition-colors`}
              >
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}