import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import TrustedBy from "./components/TrustedBy";
import { BentoGridThirdDemo } from "./components/Features-Bento";
import { FeaturesSectionDemo } from "./components/cta";
import FAQ from "./components/FAQ";
import { RevealOnScroll } from "./components/ui/reveal-on-scroll";
import Header from "./components/header";
import { CatchyIntro } from "./components/catchintro";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <RevealOnScroll width="100%">
        <Hero />
      </RevealOnScroll>
      
      <RevealOnScroll width="100%">
        <TrustedBy />
      </RevealOnScroll>
      
      <RevealOnScroll width="100%">
        <Features />
      </RevealOnScroll>
      
      <RevealOnScroll width="100%">
        <Pricing />
      </RevealOnScroll>
      
      <RevealOnScroll width="100%">
        <BentoGridThirdDemo/>
      </RevealOnScroll>
      
      <RevealOnScroll width="100%">
        <Testimonials />
      </RevealOnScroll>
      
      <RevealOnScroll width="100%">
        <FAQ />
      </RevealOnScroll>
      
      <RevealOnScroll width="100%">
        <FeaturesSectionDemo/>
      </RevealOnScroll>
      
      <RevealOnScroll width="100%">
        <Footer />
      </RevealOnScroll>
      <Header />
      <Hero />
      <TrustedBy />
      <CatchyIntro/>
      <Features />
      <Pricing />
      <BentoGridThirdDemo />
      <Testimonials />
      <FeaturesSectionDemo />
      <Footer />
    </div>
  );
}
