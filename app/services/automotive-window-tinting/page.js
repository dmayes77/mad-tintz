import HeaderSection from "@/components/sections/automotive-window-tint/HeaderSection";
import PackagesSection from "@/components/sections/automotive-window-tint/PackageSection";
import TintLearnMoreSection from "@/components/sections/automotive-window-tint/LearnMore";
import TintComparisonSection from "@/components/sections/automotive-window-tint/TintComparisonSection";
import FeaturesSection from "@/components/sections/automotive-window-tint/FeatureSection";
import PatternBackground from "@/components/ui/PatternBackground";
import BackgroundShape from "@/components/ui/BackgroundShape";
import HowItWorksSection from "@/components/sections/automotive-window-tint/HowItWorksSection";
import WarrantySection from "@/components/sections/automotive-window-tint/WarrantySection";
import CTASection from "@/components/sections/automotive-window-tint/CTASection";
import WhatWeOfferSection from "@/components/sections/automotive-window-tint/WhatWeOfferSection";
import FilmDetailsSection from "@/components/sections/automotive-window-tint/FilmDetailsSection";

export default function WindowTintPage() {
  return (
    <>
      <PatternBackground
        variant="dots"
        speed={0.5}
        patternColorClass="text-lime-400"
      >
        <HeaderSection />
        <FeaturesSection />
        <TintLearnMoreSection />
        <HowItWorksSection />
        <TintComparisonSection />

        <BackgroundShape>
          <WhatWeOfferSection />
          <FilmDetailsSection/>
          <PackagesSection />
          <WarrantySection />
        </BackgroundShape>
        <CTASection />
      </PatternBackground>
    </>
  );
}
