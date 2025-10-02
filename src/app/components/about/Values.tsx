"use client";
import { motion } from "framer-motion";

const values = [
  { title: "Security First", desc: "Data privacy and protection are non-negotiable." },
  { title: "Clarity Over Complexity", desc: "Simplify data for smarter, faster decisions." },
  { title: "Innovation with Purpose", desc: "AI used responsibly to deliver real-world impact." },
  { title: "Customer-Centric", desc: "Your success drives every solution we build." },
];

export default function Values() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B4A97] dark:text-white mb-12">
          Our Values
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-black shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[#0195D1] mb-3">{val.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
