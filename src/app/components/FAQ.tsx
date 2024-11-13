"use client";
import React from 'react';
import { motion } from 'framer-motion';

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
    <section className="relative overflow-hidden bg-black py-24">
      {/* Middle gradient */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-blue-500/30 rounded-full blur-[128px] pointer-events-none" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 py-8">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-blue-200/80">
            Everything you need to know about Bot-Sensei
          </p>
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
                }}
                transition={{
                  duration: 0.2,
                  ease: "linear"
                }}
                className="overflow-hidden bg-gradient-to-b from-transparent to-blue-950/20"
              >
                <div className="px-6 pb-4 pt-2">
                  <p className="text-blue-200/80">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-blue-500 rounded-full filter blur-[128px] opacity-20" />
      <div className="absolute -right-32 -top-32 w-64 h-64 bg-blue-500 rounded-full filter blur-[128px] opacity-20" />
    </section>
  );
} 