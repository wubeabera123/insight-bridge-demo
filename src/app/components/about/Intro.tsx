"use client";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="py-40 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-[#0B4A97] dark:text-white mb-6"
        >
          On a mission to help enterprises achieve better outcomes with data that works.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          InsightBridge is an AI-powered platform that democratizes access to
          data, empowering organizations to uncover opportunities, make
          evidence-based decisions, and drive growth with clarity and confidence.
        </motion.p>
      </div>
    </section>
  );
}
