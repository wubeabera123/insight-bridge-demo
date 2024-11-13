"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  const getRandomStyle = () => {
    const styles = [
      "text-blue-300 hover:text-blue-400",
      "text-blue-400 hover:text-blue-500",
      "text-blue-500 hover:text-blue-600",
      "text-blue-600 hover:text-blue-700"
    ];
    const transforms = [
      "hover:scale-110",
      "hover:skew-x-6",
      "hover:-skew-x-6",
      "hover:rotate-3",
      "hover:-rotate-3"
    ];
    return `${styles[Math.floor(Math.random() * styles.length)]} ${transforms[Math.floor(Math.random() * transforms.length)]} transition-all duration-300`;
  };

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`opacity-0 ${getRandomStyle()}`}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
