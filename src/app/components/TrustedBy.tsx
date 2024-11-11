"use client";
import Image from "next/image";

const companies = [
  { name: "Adobe", logo: "/adobe.png", isSvg: false },
  { name: "Google", logo: "/google.png", isSvg: false },
  { name: "Amazon", logo: "/amazon.png", isSvg: false },
  { name: "Next JS", logo: "/next.svg", isSvg: true },
  // Add more companies as needed
];

export default function TrustedBy() {
  return (
    <section className="py-16 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-white mb-12">
          Trusted by leading companies worldwide
        </h2>
        
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-infinite-scroll">
            {/* First set of logos */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center w-[180px] h-16 px-6 shrink-0"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={120}
                  height={40}
                  className={`object-contain transition-opacity duration-300 ${
                    company.isSvg 
                      ? 'filter invert brightness-0 opacity-60 hover:opacity-100' 
                      : 'filter grayscale brightness-200 contrast-200 opacity-60 hover:opacity-100'
                  }`}
                />
              </div>
            ))}
            {/* Duplicate set of logos for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center w-[180px] h-16 px-6 shrink-0"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={120}
                  height={40}
                  className={`object-contain transition-opacity duration-300 ${
                    company.isSvg 
                      ? 'filter invert brightness-0 opacity-60 hover:opacity-100' 
                      : 'filter grayscale brightness-200 contrast-200 opacity-60 hover:opacity-100'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 