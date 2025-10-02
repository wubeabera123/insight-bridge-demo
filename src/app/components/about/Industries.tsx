"use client";
import { motion } from "framer-motion";

const industries = [
  { name: "Finance", desc: "Smarter investment and risk strategies." },
  { name: "Healthcare", desc: "Better patient outcomes with data clarity." },
  { name: "Retail", desc: "Optimize supply chains and customer insights." },
  { name: "Manufacturing", desc: "Predict demand and streamline production." },
  { name: "Telecom", desc: "Enhance connectivity and customer engagement." },
  { name: "Education", desc: "Data-driven learning and administration." },
  { name: "Energy", desc: "Optimize resource use and sustainability." },
  { name: "Public Sector", desc: "Transparent, evidence-based governance." },
  { name: "Aviation", desc: "Improve safety and operational efficiency." },
];

export default function Industries() {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B4A97] dark:text-white mb-12">
          Serving Enterprises Across Industries
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[#0195D1] dark:text-[#0195D1] mb-2">
                {ind.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
