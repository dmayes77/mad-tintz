import Hero from "@/components/sections/homePage/Hero";
import FeatureListSection from "@/components/sections/homePage/FeatureListSection";
import FeatureSection from "@/components/sections/homePage/FeatureSection";
import BenefitsSection from "@/components/sections/homePage/BenefitsSection";
import StatsSection from "@/components/sections/homePage/StatsSection";
import ContactSection from "@/components/sections/homePage/ContactSection";
import { Contact } from "lucide-react";

export const metadata = {
  title: "Auto, Home & Commercial Tinting Chattanooga | MAD Tintz",
  description:
    "Get MAD Tintz – Chattanooga’s mobile window tinting pros for cars, homes & businesses. Enhance privacy, reduce heat & boost style with expert, on-site installation.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureListSection />
      <FeatureSection />
      <BenefitsSection />
      <StatsSection />
      <ContactSection />
    </>
  );
}
