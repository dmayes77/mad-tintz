import Hero from "@/components/pages/home-page/Hero";
import FeatureListSection from "@/components/pages/home-page/FeatureListSection";
import FeatureSection from "@/components/pages/home-page/FeatureSection";
import BenefitsSection from "@/components/pages/home-page/BenefitsSection";
import StatsSection from "@/components/pages/home-page/StatsSection";
import ContactSection from "@/components/pages/home-page/ContactSection";
import { Contact } from "lucide-react";
import PatternBackground from "@/components/ui/PatternBackground";

export const metadata = {
  title: "Auto, Home & Commercial Tinting Chattanooga | MAD Tintz",
  description:
    "Get MAD Tintz – Chattanooga’s mobile window tinting pros for cars, homes & businesses. Enhance privacy, reduce heat & boost style with expert, on-site installation.",
};

export default function Home() {
  return (
    <PatternBackground
      variant="stripes"
      speed={0.5}
      patternColorClass="text-accent/3"
    >
      <Hero />
      <FeatureListSection />
      <FeatureSection />
      <BenefitsSection />
      <StatsSection />
      <ContactSection />
    </PatternBackground>
  );
}
