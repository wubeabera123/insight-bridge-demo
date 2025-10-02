"use client";
import React, { useState } from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconCurrencyDollar,
  IconShoppingCart,
  IconDeviceMobile,
  IconSchool,
  IconBolt,
  IconBuilding,
  IconPlane,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Industries() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const industries = [
    {
      title: "Finance & Banking",
      description:
        "Gain predictive insights to optimize portfolios, reduce risk, and drive profitability.",
      icon: <IconCurrencyDollar className="h-6 w-6" />,
    },
    {
      title: "Healthcare & Life Sciences",
      description:
        "Make data-driven decisions on patient outcomes, resource allocation, and operational efficiency.",
      icon: <IconShoppingCart className="h-6 w-6" />,
    },
    {
      title: "Retail & E-Commerce",
      description:
        "Understand customer behavior, forecast demand, and optimize inventory with AI insights.",
      icon: <IconShoppingCart className="h-6 w-6" />,
    },
    {
      title: "Manufacturing & Supply Chain",
      description:
        "Predict bottlenecks, optimize production, and improve supplier performance.",
      icon: <IconShoppingCart className="h-6 w-6" />,
    },
    {
      title: "Telecommunications",
      description:
        "Analyze usage patterns, predict churn, and enhance customer experience.",
      icon: <IconDeviceMobile className="h-6 w-6" />,
    },
    {
      title: "Education & Research",
      description:
        "Turn complex data into actionable insights for improved learning outcomes and efficiency.",
      icon: <IconSchool className="h-6 w-6" />,
    },
    {
      title: "Energy & Utilities",
      description:
        "Forecast demand, optimize resource allocation, and ensure regulatory compliance.",
      icon: <IconBolt className="h-6 w-6" />,
    },
    {
      title: "Public Sector & Government",
      description:
        "Make smarter policy decisions and improve public service delivery with actionable insights.",
      icon: <IconBuilding className="h-6 w-6" />,
    },
    {
      title: "Aviation & Transport",
      description:
        "Optimize routes, monitor fleet performance, and improve operational efficiency.",
      icon: <IconPlane className="h-6 w-6" />,
    },
  ];

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setLoading(true);
  setMessage("");

  const form = new FormData(e.currentTarget);
  const data = Object.fromEntries(form.entries());

  try {
    const res = await fetch("/api/forms", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, // ✅ Important
      body: JSON.stringify({ type: "demo", ...data }),
    });

    const result = await res.json();
    console.log("API result:", result); // ✅ Debugging

    if (res.ok && result.success) {
      setMessage("✅ Thanks! Our team will reach out soon.");
      e.currentTarget.reset();
    } else {
      setMessage("❌ Failed to submit. Try again later.");
    }
  } catch (err) {
    console.error("Submit error:", err);
    setMessage("❌ Something went wrong.");
  } finally {
    setLoading(false);
  }
}

  return (
    <section
      className="relative overflow-hidden py-32 
      bg-gradient-to-b from-gray-100 to-gray-200 
      dark:from-gray-900 dark:to-gray-950"
    >
      {/* glowing background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0000000a_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,_#ffffff0a_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem]">
        <div className="absolute inset-0 bg-[#0195D1]/15 dark:bg-[#0195D1]/20 rounded-full blur-[128px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-[#0B4A97] mb-4">
            Built For Enterprises Across Industries
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            Who we serve
          </p>
        </div>

        {/* Animated Bento grid */}
        <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[16rem]">
          {industries.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -6 }}
              className="relative group"
            >
              {/* hover glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0B4A97]/10 to-[#0195D1]/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />
              <BentoGridItem
                title={item.title}
                description={
                  <span className="text-sm text-gray-700 dark:text-gray-400">
                    {item.description}
                  </span>
                }
                className={cn(
                  "relative h-full bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 border border-gray-200 dark:border-gray-800/50 rounded-xl p-6 shadow-sm hover:shadow-xl transition"
                )}
                icon={
                  <div className="text-[#0B4A97] dark:text-[#0195D1] group-hover:text-[#0B4A97] transition">
                    {item.icon}
                  </div>
                }
              />
            </motion.div>
          ))}
        </BentoGrid>

        {/* CTA below */}
        <div
          className="relative mt-20 
          bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 
          border border-gray-200 dark:border-gray-800/50 
          rounded-2xl p-10 shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Text */}
            <div>
              <h3 className="text-3xl font-bold text-[#0B4A97] mb-4">
                Ready to get started?
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-400">
                Schedule a demo with our team and see how Insight-Bridge can
                unlock the power of your data.
              </p>
            </div>

            {/* Right Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  required
                  className="w-full px-4 py-3 rounded-lg 
                    bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 
                    dark:bg-gray-800/60 dark:border-gray-700 dark:text-white dark:placeholder-gray-400 
                    focus:outline-none focus:border-[#0195D1]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 rounded-lg 
                    bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 
                    dark:bg-gray-800/60 dark:border-gray-700 dark:text-white dark:placeholder-gray-400 
                    focus:outline-none focus:border-[#0195D1]"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="w-full px-4 py-3 rounded-lg 
                    bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 
                    dark:bg-gray-800/60 dark:border-gray-700 dark:text-white dark:placeholder-gray-400 
                    focus:outline-none focus:border-[#0195D1]"
                />
                <input
                  type="text"
                  name="position"
                  placeholder="Position"
                  className="w-full px-4 py-3 rounded-lg 
                    bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 
                    dark:bg-gray-800/60 dark:border-gray-700 dark:text-white dark:placeholder-gray-400 
                    focus:outline-none focus:border-[#0195D1]"
                />
              </div>

              <input
                type="text"
                name="organization"
                placeholder="Organization / Company"
                className="w-full px-4 py-3 rounded-lg 
                  bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 
                  dark:bg-gray-800/60 dark:border-gray-700 dark:text-white dark:placeholder-gray-400 
                  focus:outline-none focus:border-[#0195D1]"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-[#0B4A97] to-[#0195D1] text-white font-semibold shadow-md hover:opacity-90 transition"
              >
                {loading ? "Sending..." : "Schedule a Demo"}
              </button>
              {message && (
                <p className="mt-4 text-center text-sm text-gray-700 dark:text-gray-300">
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
