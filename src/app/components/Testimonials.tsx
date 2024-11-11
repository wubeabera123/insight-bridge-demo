"use client";

import React from 'react';
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote: 'This platform revolutionized our customer support. The AI bot we built handles 80% of routine inquiries, letting our team focus on complex cases. The ROI has been incredible.',
    name: 'Sarah Chen',
    title: 'Marketing Director'
  },
  {
    quote: 'As a solo founder, having an AI bot handle user onboarding 24/7 has been a game-changer. The no-code builder made it super easy to create a sophisticated bot in hours.',
    name: 'Michael Torres',
    title: 'Startup Founder'
  },
  {
    quote: 'Our sales have increased by 40% since implementing the product recommendation bot. The AI understanding of customer preferences is remarkable.',
    name: 'Emma Watson', 
    title: 'E-commerce Owner'
  },
  {
    quote: 'The multilingual capabilities of the AI bot have helped us expand into new markets effortlessly. It handles customer queries in 15 different languages with remarkable accuracy.',
    name: 'David Kim',
    title: 'Customer Service Manager'
  },
  {
    quote: 'Managing our Telegram community became so much easier with the AI bot. It moderates discussions, answers FAQs, and even organizes community events automatically.',
    name: 'Lisa Patel',
    title: 'Community Manager'
  },
  {
    quote: 'The analytics dashboard provides incredible insights into user interactions. We have optimized our bots responses based on real data, improving user satisfaction by 60%.',
    name: 'James Wilson',
    title: 'Tech Entrepreneur'
  }
];

export default function Testimonials() {
  return (
    <div className="py-10 flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zinc-100 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Join thousands of businesses transforming their Telegram presence with AI bots
          </p>
        </div>

        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}