import AutomotiveFeatureSection from "@/components/pages/services/AutomotiveFeatureSection";
import ComingSoonFeatureSection from "@/components/pages/services/ComingSoonFeatureSection";
import CommercialFeatureSection from "@/components/pages/services/CommercialFeatureSection";
import FeatureListSection from "@/components/pages/services/FeatureListSection";
import HeaderSection from "@/components/pages/services/HeaderSection";
import ResidentialFeatureSection from "@/components/pages/services/ResidentialFeatureSection";

export const metadata = {
  title:
    "Our Tinting Services | Auto, Home & Commercial | MAD Tintz Chattanooga",
  description:
    "Discover all our window tinting solutions in Chattanooga: automotive, residential, and commercial. MAD Tintz delivers expert mobile installation to reduce heat, enhance privacy, and elevate style for every project.",
};


export default function ServicesPage() {
  return (
    <>
      <HeaderSection />
      <FeatureListSection />

      <AutomotiveFeatureSection />
      <ResidentialFeatureSection />
      <CommercialFeatureSection />
      <ComingSoonFeatureSection />
   </>
  );
}
