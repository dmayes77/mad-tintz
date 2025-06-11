import HeaderSection from "@/components/sections/automotive-window-tint/HeaderSection";
import PackagesSection from "@/components/sections/automotive-window-tint/PackageSection";
import TintLearnMoreSection from "@/components/sections/automotive-window-tint/LearnMore";
import TintComparisonSection from "@/components/sections/automotive-window-tint/TintComparisonSection";
import FeaturesSection from "@/components/sections/automotive-window-tint/FeatureSection";
import DotPattern from "@/components/ui/DotPattern";
import BackgroundShape from "@/components/ui/BackgroundShape";

export default function WindowTintPage() {
  return (
    <>
      <HeaderSection />
      <DotPattern>
        <TintLearnMoreSection />
        <FeaturesSection />
      </DotPattern>
      <TintComparisonSection />
      <BackgroundShape>
        <PackagesSection />
      </BackgroundShape>
    </>
  );
}
