"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo/Artboard 3@300x.png";
import { ThemeToggle } from "./ThemeToggle";
import { usePathname } from "next/navigation";

const Header = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 100, 1);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shadowOpacity = 0.65 * (1 - scrollProgress);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Articles", href: "/articles" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const linkClasses = (href: string) =>
    cn(
      "transition-colors",
      pathname === href
        ? "text-[#0B4A97] dark:text-[#0195D1] font-bold"
        : "hover:text-[#0B4A97] text-[#0195D1] dark:hover:text-[#0195D1]"
    );

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/90 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200/10"
      )}
      style={{
        boxShadow: `0 80px 200px 0 rgba(59,130,246,${shadowOpacity})`,
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={Logo}
            alt="InsightBridge Logo"
            height={40}
            width={40}
            priority
            className="rounded-lg object-cover"
          />
          <span className="text-xl font-semibold text-[#0B4A97] dark:text-white">
            InsightBridge
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClasses(link.href)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/login"
            className="px-5 py-2 rounded-full border-[#0B4A97] text-[#0B4A97] text-sm font-medium hover:bg-[#0B4A97] hover:text-white transition"
          >
            Login
          </Link>
          <Link
            href="/login/result"
            className="px-5 py-2 rounded-full bg-[#0B4A97] text-white text-sm font-medium hover:bg-[#0195D1] transition"
          >
            Request Demo
          </Link>
        </div>

        {/* Mobile controls: Theme toggle + Hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            className="text-gray-900 dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              // Close icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-gray-900 dark:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-gray-900 dark:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white/90 dark:bg-black/80 rounded-lg shadow-lg p-4 space-y-4 flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClasses(link.href)}
              onClick={() => setMobileMenuOpen(false)} // close menu after click
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile CTAs */}
          <div className="flex flex-col gap-2 pt-2">
            <Link
              href="/login"
              className="w-full px-5 py-2 rounded-lg border border-[#0B4A97] text-[#0B4A97] text-sm font-medium text-center hover:bg-[#0B4A97] hover:text-white transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/login/result"
              className="w-full px-5 py-2 rounded-lg bg-[#0B4A97] text-white text-sm font-medium text-center hover:bg-[#0195D1] transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Demo
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
