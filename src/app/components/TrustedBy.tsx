"use client";
import Image from "next/image";

const compliance = [
  { name: "GDPR", logo: "/logo/gdpr.png", width: 80, height: 60 },
  { name: "HIPAA", logo: "/logo/hipaa.png", width: 80, height: 60 },
  { name: "SOC 2 Type II", logo: "/logo/soc.jpg", width: 80, height: 60 },
  { name: "ISO 27001", logo: "/logo/iso.webp", width: 80, height: 60 },
];

export default function DataSecurity() {
  return (
    <section className="py-24 relative overflow-hidden 
      bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold 
          text-[#0B4A97] flex flex-col items-center mb-4">
          We prioritize your security and privacy
        </h2>
        <p className="text-center text-lg md:text-xl 
          text-gray-700 dark:text-gray-400 max-w-2xl mx-auto mb-10">
          Strict data retention policies, continuous monitoring, and industry-leading standards.
        </p>

        {/* Infinite scroll badges */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-infinite-scroll">
            {compliance.map((item, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center w-[280px] h-24 px-12 shrink-0"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={item.width}
                  height={item.height}
                  className="object-contain opacity-70 hover:opacity-100 transition"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {compliance.map((item, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center w-[280px] h-24 px-12 shrink-0"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={item.width}
                  height={item.height}
                  className="object-contain opacity-70 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
