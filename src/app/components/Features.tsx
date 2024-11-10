import { Bot, Code, Zap, Brain, Users, BarChart, Smartphone, RefreshCw } from 'lucide-react';
import React from 'react';

const features = [
  {
    icon: Bot,
    title: 'No-Code Builder',
    description: 'Create sophisticated Telegram bots without any coding knowledge'
  },
  {
    icon: Brain,
    title: 'AI-Powered',
    description: 'Leverage advanced AI to understand and respond to user messages'
  },
  {
    icon: Code,
    title: 'Custom Integration',
    description: 'Connect your bot with external APIs and services seamlessly'
  },
  {
    icon: Zap,
    title: 'Instant Deployment',
    description: 'Deploy your bot to Telegram with just one click'
  },
  {
    icon: Users,
    title: 'Multi-User Support',
    description: 'Handle thousands of concurrent users effortlessly'
  },
  {
    icon: BarChart,
    title: 'Analytics Dashboard',
    description: 'Track user engagement and bot performance in real-time'
  },
  {
    icon: Smartphone,
    title: 'Cross-Platform',
    description: 'Build and manage bots from any device, anywhere'
  },
  {
    icon: RefreshCw,
    title: 'Auto Updates',
    description: 'Always stay current with automatic AI model updates'
  }
];

export default function Features() {
  return (
    <div className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Build Powerful AI Bots in Minutes
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Create, deploy and scale intelligent Telegram bots without writing a single line of code
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="p-6 rounded-xl border border-gray-700 bg-gray-800 hover:border-blue-500 transition-colors group"
              >
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-6 h-6 text-blue-400 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}