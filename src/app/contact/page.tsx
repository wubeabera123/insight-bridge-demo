"use client";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const form = e.currentTarget;
    const data = {
      type: "contact",
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.success) {
        setMessage("✅ Thanks for reaching out! Our team will get back to you soon.");
        form.reset();
      } else {
        setMessage("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      setMessage("❌ Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Banner */}
      <section className="relative w-full h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <Image
          src="/contact.jpg"
          alt="Contact Banner"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Contact Us</h1>
          <p className="text-white/80 mt-2 text-lg">We&apos;d love to hear from you</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="flex-1 py-16 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B4A97]"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B4A97]"
                />
              </div>
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B4A97]"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B4A97]"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#0B4A97] to-[#0195D1] text-white font-semibold shadow-md hover:opacity-90 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              {message && (
                <p className="mt-4 mr-[13px] text-lg text-center text-gray-700 dark:text-gray-300">
                  {message}
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Reach out to us through any of the following channels. We’ll
              respond as quickly as possible.
            </p>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-[#0B4A97]" />
                <span className="text-gray-900 dark:text-gray-200">
                  support@insightbridge.com
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[#0B4A97]" />
                <span className="text-gray-900 dark:text-gray-200">
                  +1 (123) 456-7890
                </span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#0B4A97]" />
                <span className="text-gray-900 dark:text-gray-200">
                  123 Insight Street, Innovation City, USA
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
