"use client";
import { useState } from "react";

export default function AboutCTA() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "demo", ...data }),
      });

      const result = await res.json();
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
    <section className="py-20 px-4">
      <div
        className="relative max-w-6xl mx-auto 
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
              className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-[#0B4A97] to-[#0195D1] text-white font-semibold shadow-md hover:opacity-90 transition disabled:opacity-50"
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
    </section>
  );
}
