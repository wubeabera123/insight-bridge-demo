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
      description: "Create sophisticated Telegram bots without writing a single line of code",
      icon: <IconTerminal2 className="w-8 h-8" />,
    },
    {
      title: "AI-Powered Intelligence", 
      description: "Leverage state-of-the-art AI models to understand context and generate human-like responses",
      icon: <IconEaseInOut className="w-8 h-8" />,
    },
    {
      title: "Seamless Integrations",
      description: "Connect your bot with any API or service through our intuitive integration system",
      icon: <IconCurrencyDollar className="w-8 h-8" />,
    },
    {
      title: "One-Click Deploy",
      description: "Go live instantly with automated deployment and scaling on Telegram",
      icon: <IconCloud className="w-8 h-8" />,
    },
    {
      title: "Enterprise Scale",
      description: "Built to handle millions of messages with high availability and low latency",
      icon: <IconRouteAltLeft className="w-8 h-8" />,
    },
    {
      title: "Rich Analytics",
      description: "Get deep insights into user behavior, engagement metrics and bot performance",
      icon: <IconHelp className="w-8 h-8" />,
    },
    {
      title: "Universal Access",
      description: "Manage your bots from any device with our responsive web interface",
      icon: <IconAdjustmentsBolt className="w-8 h-8" />,
    },
    {
      title: "Future-Proof",
      description: "Stay ahead with continuous AI updates and new feature rollouts",
      icon: <IconHeart className="w-8 h-8" />,
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-950 via-black to-black overflow-hidden py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(circle_at_center,_black,transparent_75%)]" />
      
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[40rem] w-[40rem] bg-blue-500/20 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
            Features That Empower
          </h2>
          <p className="text-lg md:text-xl text-blue-200/90 max-w-2xl mx-auto">
            Build powerful Telegram bots with enterprise-grade features, no coding required
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px relative z-10">
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
    <div
      className={cn(
        "group relative p-8 transition-all duration-300",
        "hover:bg-blue-950/30 hover:backdrop-blur-sm",
        "border-neutral-800/50",
        "first:rounded-tl-2xl last:rounded-br-2xl",
        index === 0 && "lg:border-l",
        index === 3 && "lg:rounded-tr-2xl",
        index === 4 && "lg:rounded-bl-2xl",
        index < 4 && "border-b",
        index % 4 !== 3 && "border-r"
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
      
      <div className="relative space-y-6">
        <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
          {icon}
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-blue-100 group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-blue-300/80 group-hover:text-blue-200 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="absolute left-0 top-8 w-1 h-12 bg-blue-500/30 group-hover:h-24 group-hover:bg-blue-400 transition-all duration-300" />
    </div>
  );
};