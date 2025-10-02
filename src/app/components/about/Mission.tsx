"use client";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#0B4A97] dark:text-white mb-6"
        >
          Our Mission
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Data is one of the most valuable resources in the modern enterprise.
          Our mission is to put it to work—making it accessible, understandable,
          and actionable—so organizations can thrive in an increasingly
          data-driven world.
        </motion.p>
      </div>
    </section>
  );
}
