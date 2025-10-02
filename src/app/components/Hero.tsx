"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import Dashboard from "../../../public/InsightDashboard.webp";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <div
      className="relative overflow-hidden pt-10 -mb-10 
      bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
    >
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-white/30 dark:bg-black/30">
        <div
          className="absolute inset-0 
          bg-[radial-gradient(circle_at_center,_#00000011_1px,transparent_1px)] 
          dark:bg-[radial-gradient(circle_at_center,_#ffffff22_1px,transparent_1px)]
          [mask-image:radial-gradient(circle_at_center,_black,transparent_90%)] 
          [background-size:16px_16px]"
        />
      </div>

      {/* Blurry glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem]">
        <div className="absolute inset-0 bg-[#0195D1]/40 rounded-full blur-[128px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <div className="flex flex-col gap-12">
          {/* Text content */}
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <div className="space-y-8">
              <h1
                className="text-4xl sm:text-6xl lg:text-7xl font-semibold leading-10 
                text-gray-900 dark:text-white"
              >
                Unlock the power of your organizational data{" "}
                <span className="bg-gradient-to-r from-[#0195D1] to-[#0B4A97] bg-clip-text text-transparent">
                  – Powered by AI
                </span>
              </h1>
              <p
                className="text-lg sm:text-xl max-w-2xl mx-auto font-light 
                text-gray-700 dark:text-white/80"
              >
                AI-powered insights that make data accessible, actionable, and
                drive smarter decisions.
              </p>
            </div>

            {/* CTA buttons */}
            {/* CTA buttons */}
            <div className="relative z-10 flex lg:flex-row flex-col justify-center gap-4">
              <button
                onClick={() => router.push("/login/result")}
                className="px-8 py-3 rounded-full 
      bg-[#0B4A97] text-white font-semibold text-lg shadow-lg 
      hover:bg-[#0195D1] transition cursor-pointer"
              >
                Request a Demo
              </button>
              <button
                onClick={() => router.push("/login")}
                className="px-8 py-3 rounded-full border 
      border-gray-700 text-gray-800 dark:border-white/70 
      dark:text-white font-medium text-lg 
      hover:bg-gray-200 dark:hover:bg-white 
      hover:text-[#0B4A97] transition cursor-pointer"
              >
                Enterprise Login
              </button>
            </div>
          </div>

          {/* Dashboard visual */}
          <div className="flex flex-col overflow-hidden -mt-40">
            <ContainerScroll titleComponent={null}>
              <Image
                src={Dashboard}
                alt="InsightBridge Dashboard Preview"
                height={600}
                width={1000}
                className="mx-auto rounded-2xl object-cover h-full object-left-top shadow-2xl"
                draggable={false}
              />
            </ContainerScroll>
          </div>
        </div>
      </div>
    </div>
  );
}
