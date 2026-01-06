"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import FeaturesSection from "@/components/FeaturesSection";
import AISection from "@/components/AISection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DiagonalRibbon from "@/components/DiagonalRibbon";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-background selection:bg-accent-coral/30 overflow-hidden">
      <Navbar />
      <HeroSection />
      <div className="relative z-0">
        <ProductShowcase />
        <FeaturesSection />
        <AISection />
        <TestimonialsSection />
        <DiagonalRibbon />
        <PricingSection />
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
}
