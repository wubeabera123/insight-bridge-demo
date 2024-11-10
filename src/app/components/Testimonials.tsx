import { Star } from 'lucide-react';
import React from 'react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'RAS Officer, 2023 Batch',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    content: 'RAS-Pro\'s structured approach and comprehensive material helped me secure a top rank. The interactive features made learning engaging and effective.'
  },
  {
    name: 'Rahul Mehra',
    role: 'Current Aspirant',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    content: 'The progress tracking and performance analytics have completely transformed my preparation strategy. I can focus on my weak areas effectively.'
  },
  {
    name: 'Anjali Gupta',
    role: 'RAS Officer, 2022 Batch',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
    content: 'The mock tests and personalized feedback system gave me the confidence I needed. RAS-Pro\'s community support is exceptional.'
  }
];

export default function Testimonials() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A2B4A] mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of successful aspirants who trusted RAS-Pro for their preparation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 relative"
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-[#1A2B4A]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}