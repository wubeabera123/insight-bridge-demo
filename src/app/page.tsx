import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import TrustedBy from "./components/TrustedBy";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <TrustedBy />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}
