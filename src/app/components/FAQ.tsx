"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { TextAnimate } from './ui/text-animate';

const faqs = [
  {
    question: "What is Bot-Sensei?",
    answer: "Bot-Sensei is a no-code platform that enables you to build, deploy, and scale intelligent Telegram bots powered by cutting-edge AI technology."
  },
  {
    question: "How do I get started?",
    answer: "Simply sign up for an account, choose a plan that suits your needs, and use our intuitive interface to start building your bot. No coding experience required!"
  },
  {
    question: "What features are included?",
    answer: "Our platform includes AI-powered responses, custom commands, media handling, analytics, and seamless Telegram integration. Features vary by plan."
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes! We provide comprehensive customer support through email, chat, and documentation. Premium plans include priority support."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. Changes will be reflected in your next billing cycle."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-blue-900/10 to-gray-950 py-24">
      {/* Enhanced gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(circle_at_center,_black,transparent_75%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#3b82f620_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#1d4ed820_0%,transparent_50%)]" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 py-8">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-blue-200/80">
            Everything you need to know about Bot-Sensei
          </p>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group rounded-lg border border-blue-500/20 bg-gray-900/40 backdrop-blur-sm overflow-hidden hover:border-blue-500/40 transition-colors duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex justify-between items-center w-full px-6 py-4 text-left group-hover:bg-blue-500/5 transition-colors duration-300"
              >
                <span className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500/10 group-hover:bg-blue-500/20"
                >
                  <span className="text-blue-400">↓</span>
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut"
                }}
                className="overflow-hidden bg-gradient-to-b from-transparent to-blue-950/20"
              >
                <div className="px-6 pb-4 pt-2">
                  {openIndex === index && <TextAnimate text={faq.answer} />}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full filter blur-[128px] opacity-20 animate-pulse" />
      <div className="absolute -right-32 -top-32 w-64 h-64 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full filter blur-[128px] opacity-20 animate-pulse" />
    </section>
  );
} 