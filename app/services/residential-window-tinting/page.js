import HeaderSection from "@/components/pages/residential-window-tint/HeaderSection";
import PatternBackground from "@/components/ui/PatternBackground";
import FeatureSection from "@/components/pages/residential-window-tint/FeatureSection";
import ResidentialFeatureSection from "@/components/pages/services/ResidentialFeatureSection";
import FeatureSectionLayout102 from "@/components/pages/residential-window-tint/FeatureSectionLayout102";
import Layout6 from "@/components/pages/residential-window-tint/Layout6";
import Layout245 from "@/components/pages/residential-window-tint/Layout245";

export default function ResidentialPage() {
  return (
    <PatternBackground
      variant="hex"
      speed={0.5}
      patternColorClass="text-lime-100"
    >
      <HeaderSection />
      <ResidentialFeatureSection />
      <FeatureSectionLayout102 />
      <Layout6 />
      <Layout245 />
    </PatternBackground>
  );
}
