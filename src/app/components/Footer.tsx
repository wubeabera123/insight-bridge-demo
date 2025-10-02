"use client";
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone } from "lucide-react";
import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer
      className="relative overflow-hidden 
      bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800 
      dark:from-gray-900 dark:to-gray-950 dark:text-white"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0000000a_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,_#ffffff0a_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#0195D120_0%,transparent_50%)]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter */}
        <div className="mb-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-gray-700 dark:text-white/80 mb-6 max-w-md mx-auto">
            Subscribe to our newsletter for the latest insights, features, and industry updates.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-xl 
                bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500
                dark:bg-white/10 dark:border-white/20 dark:text-white dark:placeholder-white/50
                focus:outline-none focus:border-[#0195D1]"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-[#0B4A97] text-white font-medium 
                hover:bg-[#0195D1] dark:hover:bg-white dark:hover:text-[#0B4A97] transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">InsightBridge</h3>
            <p className="text-gray-700 dark:text-white/80 mb-6">
              Unlock the power of your organizational data with AI-powered insights that drive smarter decisions.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-600 hover:text-[#0B4A97] 
                    dark:text-white/70 dark:hover:text-white transition"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Blog", "Contact", "Request a Demo"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#0B4A97] 
                      dark:text-white/70 dark:hover:text-white transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Solutions</h4>
            <ul className="space-y-2">
              {[
                "Predictive Modeling",
                "Data Security & Compliance",
                "Automated Insights",
                "Enterprise Integration",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#0B4A97] 
                      dark:text-white/70 dark:hover:text-white transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="mailto:support@insightbridge.com"
                className="flex items-center gap-3 
                  text-gray-600 hover:text-[#0B4A97] 
                  dark:text-white/70 dark:hover:text-white transition"
              >
                <Mail className="w-4 h-4" />
                support@insightbridge.com
              </a>
              <a
                href="tel:+11234567890"
                className="flex items-center gap-3 
                  text-gray-600 hover:text-[#0B4A97] 
                  dark:text-white/70 dark:hover:text-white transition"
              >
                <Phone className="w-4 h-4" />
                +1 (123) 456-7890
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative mt-16 pt-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gray-300 dark:bg-white/20" />
          <p className="text-center text-gray-600 dark:text-white/60">
            &copy; {new Date().getFullYear()} InsightBridge. All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorative glow */}
      <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-[#0195D1] rounded-full blur-[128px] opacity-20" />
      <div className="absolute -right-32 -top-32 w-64 h-64 bg-[#0195D1] rounded-full blur-[128px] opacity-20" />
    </footer>
  );
}
