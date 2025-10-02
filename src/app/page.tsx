"use client";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import TrustedBy from "./components/TrustedBy";
import { Industries } from "./components/Features-Bento";
import FAQ from "./components/FAQ";
import { RevealOnScroll } from "./components/ui/reveal-on-scroll";
import Header from "./components/header";
import React from "react";
import { BentoDemo } from "./components/Features-Bento2";
import { catchyLine as CatchyLine } from "./components/catchyline";

function RevealLayout({ children }: { children: React.ReactNode }) {
  return React.Children.map(children, (child) => (
    <RevealOnScroll width="100%">
      {child}
    </RevealOnScroll>
  ));
}

export default function Home() {
  return (
    <div className="min-h-screen">
      
      <RevealLayout>
        <Hero />
        <TrustedBy />
        {/* <CatchyLine /> */}
        {/* <div className="w-1/2 mx-auto">
          <BentoDemo/>
        </div> */}
        <Features />
        {/* <Testimonials /> */}
        <Industries/>
        {/* <Pricing />
        <FAQ /> */}
        
      </RevealLayout>
    </div>
  );
}