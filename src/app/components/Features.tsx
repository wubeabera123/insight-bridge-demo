"use client";
import {
  IconMessageCircle,
  IconDatabase,
  IconChartLine,
  IconBrain,
  IconAlertTriangle,
  IconBolt,
  IconShieldCheck,
  IconSettings,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import React from "react";

export default function Features() {
  const features = [
    {
      title: "Speak to Your Data",
      description:
        "Access and explore your organizational data effortlessly. Ask questions in plain language and get actionable insights instantly.",
      icon: <IconMessageCircle className="w-8 h-8" />,
    },
    {
      title: "Unified Data Access",
      description:
        "Connect CRMs, ERPs, finance tools, and more to see the full picture and make decisions with clarity.",
      icon: <IconDatabase className="w-8 h-8" />,
    },
    {
      title: "Predictive & Scenario Modeling",
      description:
        "Anticipate challenges and uncover growth opportunities before they arise, putting you ahead of the curve.",
      icon: <IconChartLine className="w-8 h-8" />,
    },
    {
      title: "Deep Reasoning",
      description:
        "Go beyond surface-level insights: understand the 'why' behind your data to make smarter, evidence-driven decisions.",
      icon: <IconBrain className="w-8 h-8" />,
    },
    {
      title: "Works in Data-Poor Environments",
      description:
        "Even with limited data, gain actionable insights that guide smarter strategies and faster results.",
      icon: <IconAlertTriangle className="w-8 h-8" />,
    },
    {
      title: "Automated Insights",
      description:
        "Get the answers you need, when you need them, to make informed decisions without delays.",
      icon: <IconBolt className="w-8 h-8" />,
    },
    {
      title: "Security & Compliance",
      description:
        "Operate with confidence knowing your data is protected and meets industry standards.",
      icon: <IconShieldCheck className="w-8 h-8" />,
    },
    {
      title: "Customizable for Your Organization",
      description:
        "Tailor insights to your unique business context, helping you act decisively and unlock growth.",
      icon: <IconSettings className="w-8 h-8" />,
    },
  ];

  return (
    <section className="relative overflow-hidden py-32 
      bg-gradient-to-b from-gray-100 to-gray-200 
      dark:from-gray-900 dark:to-gray-950">
      {/* glowing background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0000000a_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,_#ffffff10_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem]">
        <div className="absolute inset-0 bg-[#0B4A97]/20 dark:bg-[#0B4A97]/30 rounded-full blur-[128px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-[#0B4A97] flex flex-col items-center mb-4">
            Features that empower
          </h2>
          <p className="text-center text-lg md:text-xl text-gray-700 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            See the opportunities hidden in your data and act with confidence.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -6 }}
      className="relative group"
    >
      {/* animated glow background */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0B4A97]/10 to-[#0195D1]/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

      <div className="relative h-full 
        bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 
        border border-gray-200 dark:border-gray-800/50 
        rounded-xl p-8 shadow-sm hover:shadow-xl transition">
        <div className="space-y-6">
          <div className="text-[#0B4A97] dark:text-[#0195D1] group-hover:text-[#0B4A97] transition">
            {icon}
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-[#0B4A97]">
              {title}
            </h3>
            <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
