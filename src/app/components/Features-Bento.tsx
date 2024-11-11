"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid"
import {
  IconRobot,
  IconMessage2Code,
  IconBrain,
  IconMessageChatbot,
  IconApi,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-white/[0.2] p-2 items-center space-x-2 bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0" />
        <div className="w-full bg-neutral-900 h-4 rounded-full" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-black"
      >
        <div className="w-full bg-neutral-900 h-4 rounded-full" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-white/[0.2] p-2 items-center space-x-2 bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0" />
        <div className="w-full bg-neutral-900 h-4 rounded-full" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-white/[0.2] p-2 items-center space-x-2 bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] rounded-lg flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, var(--primary), var(--primary-light), var(--primary-lighter), var(--primary))",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-black border-white/[0.1] border p-4 flex flex-col items-center justify-center"
      >
        <IconRobot className="h-10 w-10 text-primary" />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Natural Language Processing
        </p>
        <p className="border border-primary bg-primary/20 text-primary-foreground text-xs rounded-full px-2 py-0.5 mt-4">
          Advanced
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-black border-white/[0.1] border p-4 flex flex-col items-center justify-center">
        <IconBrain className="h-10 w-10 text-primary" />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Machine Learning Models
        </p>
        <p className="border border-primary bg-primary/20 text-primary-foreground text-xs rounded-full px-2 py-0.5 mt-4">
          Powerful
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-black border-white/[0.1] border p-4 flex flex-col items-center justify-center"
      >
        <IconApi className="h-10 w-10 text-primary" />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          API Integration
        </p>
        <p className="border border-primary bg-primary/20 text-primary-foreground text-xs rounded-full px-2 py-0.5 mt-4">
          Seamless
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-white/[0.2] p-2 items-start space-x-2 bg-black"
      >
        <IconMessageChatbot className="h-10 w-10 text-primary" />
        <p className="text-xs text-neutral-500">
          Our AI chatbot understands context and provides intelligent responses...
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-black"
      >
        <p className="text-xs text-neutral-500">24/7 Automated Support</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Natural Language Understanding",
    description: (
      <span className="text-sm">
        Advanced AI that understands user intent and context naturally.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconRobot className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Multi-Language Support",
    description: (
      <span className="text-sm">
        Communicate with users in multiple languages seamlessly.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconMessage2Code className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Smart Learning",
    description: (
      <span className="text-sm">
        AI that learns and improves from each interaction.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconBrain className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Advanced Features",
    description: (
      <span className="text-sm">
        Rich features including NLP, sentiment analysis, and automated responses.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconMessageChatbot className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "24/7 Availability",
    description: (
      <span className="text-sm">
        Always-on chatbot support for your Telegram community.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconApi className="h-4 w-4 text-neutral-500" />,
  },
];
