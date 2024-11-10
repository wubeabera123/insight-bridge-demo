import { BookOpen, Map, Timer, Brain, Users, BarChart, Smartphone, RefreshCw } from 'lucide-react';
import React from 'react';

const features = [
  {
    icon: BookOpen,
    title: 'Content Categorization',
    description: 'Well-organized study material divided by subjects and topics'
  },
  {
    icon: BarChart,
    title: 'Progress Tracking',
    description: 'Monitor your preparation with detailed analytics'
  },
  {
    icon: Map,
    title: 'Interactive Maps',
    description: 'Learn geography with interactive state and country maps'
  },
  {
    icon: Brain,
    title: 'Smart Analytics',
    description: 'AI-powered performance insights and recommendations'
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Connect with peers and experts for doubt resolution'
  },
  {
    icon: Timer,
    title: 'Focused Study',
    description: 'Built-in tools for time management and concentration'
  },
  {
    icon: Smartphone,
    title: 'Mobile Ready',
    description: 'Study on any device with our responsive platform'
  },
  {
    icon: RefreshCw,
    title: 'Regular Updates',
    description: 'Stay current with the latest exam patterns and syllabus'
  }
];

export default function Features() {
  return (
    <div className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our comprehensive platform provides all the tools and resources required for RAS exam preparation
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