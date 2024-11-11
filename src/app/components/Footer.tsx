import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, ExternalLink } from 'lucide-react';
import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white overflow-hidden">
      {/* Futuristic decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30" />
        <div className="absolute -left-32 -top-32 w-64 h-64 bg-purple-500 rounded-full filter blur-[128px] opacity-20" />
        <div className="absolute -right-32 -bottom-32 w-64 h-64 bg-cyan-500 rounded-full filter blur-[128px] opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              RAS-Pro
            </h3>
            <p className="text-gray-300">
              Empowering aspirants with comprehensive preparation tools and resources for RAS exam success.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="group relative p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-gray-300 group-hover:text-cyan-400 transition-colors" />
                  <div className="absolute inset-0 rounded-lg border border-white/10 group-hover:border-cyan-400/50 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {[
            {
              title: 'Quick Links',
              links: ['About Us', 'Features', 'Pricing', 'Testimonials', 'Contact'],
            },
            {
              title: 'Support',
              links: ['Help Center', 'FAQs', 'Privacy Policy', 'Terms of Service', 'Refund Policy'],
            },
          ].map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-6 text-lg">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                    >
                      <ExternalLink className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 transition-all" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-semibold mb-6 text-lg">Contact Us</h4>
            <div className="space-y-4">
              {[
                { Icon: Mail, text: 'support@ras-pro.com', href: 'mailto:support@ras-pro.com' },
                { Icon: Phone, text: '+91 98765 43210', href: 'tel:+919876543210' },
              ].map(({ Icon, text, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="flex items-center gap-3 group p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="p-2 rounded-md bg-gradient-to-br from-cyan-500 to-purple-500">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">{text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="text-center text-gray-400">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} RAS-Pro. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}