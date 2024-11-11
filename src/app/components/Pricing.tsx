import { Check } from 'lucide-react';
import React from 'react';
import { CardSpotlight } from './ui/card-spotlight';

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <CardSpotlight 
              key={index}
              className={`flex flex-col p-8 ${
                plan.popular 
                  ? 'ring-2 ring-blue-500 scale-105' 
                  : ''
              }`}
              color={plan.popular ? "rgba(29, 78, 216, 0.55)" : "rgba(59, 130, 246, 0.45)"}
            >
              <div>
                {plan.popular && (
                  <span className="inline-block px-4 py-1 rounded-full bg-blue-900 text-blue-300 text-sm font-medium mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-400 ml-2">/month</span>}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-blue-500 shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <button 
                  className={`w-full py-4 rounded-lg font-semibold ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  } transition-colors`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </div>
  );
}