"use client";
import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import React from 'react';

export default function Features() {
  const features = [
    {
      title: "No-Code Builder",
      description: "Create sophisticated Telegram bots without any coding knowledge",
      icon: <IconTerminal2 />,
    },
    {
      title: "AI-Powered", 
      description: "Leverage advanced AI to understand and respond to user messages",
      icon: <IconEaseInOut />,
    },
    {
      title: "Custom Integration",
      description: "Connect your bot with external APIs and services seamlessly",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Instant Deployment",
      description: "Deploy your bot to Telegram with just one click",
      icon: <IconCloud />,
    },
    {
      title: "Multi-User Support",
      description: "Handle thousands of concurrent users effortlessly",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Analytics Dashboard",
      description: "Track user engagement and bot performance in real-time",
      icon: <IconHelp />,
    },
    {
      title: "Cross-Platform",
      description: "Build and manage bots from any device, anywhere",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Auto Updates",
      description: "Always stay current with automatic AI model updates",
      icon: <IconHeart />,
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden py-24">
      <div className="absolute inset-0 bg-black" />
      <div className="h-px w-px absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[40rem] w-[40rem] bg-cyan-400/30 relative top-1/2 -translate-y-1/2 rounded-full blur-[128px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-4">
            Features That Empower
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Create, deploy and scale intelligent Telegram bots without writing a single line of code
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </div>
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
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-800 hover:bg-blue-900/10 transition-colors duration-200",
        (index === 0 || index === 4) && "lg:border-l border-neutral-800",
        index < 4 && "lg:border-b border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-800/50 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-800/50 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-blue-400 group-hover/feature:text-blue-300 transition-colors duration-200">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-blue-600/30 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-blue-200 group-hover/feature:text-blue-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-blue-200/80 max-w-xs relative z-10 px-10 group-hover/feature:text-blue-100">
        {description}
      </p>
    </div>
  );
};