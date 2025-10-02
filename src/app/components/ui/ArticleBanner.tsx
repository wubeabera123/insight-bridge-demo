"use client";
import Image from "next/image";

interface ArticleBannerProps {
  title: string;
  subtitle?: string;
  image: string;
}

export default function ArticleBanner({ title, subtitle, image }: ArticleBannerProps) {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/60" />

      {/* Text Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
