"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4",
        isScrolled
          ? "bg-black/50 backdrop-blur-md border-b border-white/10"
          : "bg-transparent",
        "after:absolute after:bottom-[-20px] after:left-0 after:right-0 after:h-[20px] after:bg-gradient-to-b after:from-black/20 after:to-transparent after:pointer-events-none"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
          YourBrand
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/features"
            className="text-base text-gray-300 hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="/about"
            className="text-base text-gray-300 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-base text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/get-started"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white text-base font-medium hover:opacity-90 transition-opacity shadow-lg hover:shadow-blue-500/25"
          >
            Get Started
          </Link>
        </nav>

        <button className="md:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
