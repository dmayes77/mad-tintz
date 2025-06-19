import HeaderSection from "@/components/pages/automotive-window-tint/HeaderSection";
import PackagesSection from "@/components/pages/automotive-window-tint/PackageSection";
import TintLearnMoreSection from "@/components/pages/automotive-window-tint/LearnMore";
import TintComparisonSection from "@/components/pages/automotive-window-tint/TintComparisonSection";
import FeaturesSection from "@/components/pages/automotive-window-tint/FeatureSection";
import PatternBackground from "@/components/ui/PatternBackground";
import BackgroundShape from "@/components/ui/BackgroundShape";
import HowItWorksSection from "@/components/pages/automotive-window-tint/HowItWorksSection";
import WarrantySection from "@/components/pages/automotive-window-tint/WarrantySection";
import CTASection from "@/components/pages/automotive-window-tint/CTASection";
import WhatWeOfferSection from "@/components/pages/automotive-window-tint/WhatWeOfferSection";
import FilmDetailsSection from "@/components/pages/automotive-window-tint/FilmDetailsSection";

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
