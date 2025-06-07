// components/homepage/FeatureListSection.jsx
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoCarSportOutline } from "react-icons/io5";
import FeatureCard from "@/components/ui/FeatureCardIcon";

const content = {
  title: "Transform Your Style with Our Window Tinting Services",
  cards: [
    {
      icon: IoCarSportOutline,
      title:
        "Discover the Benefits of Professional Window Tinting for All Spaces",
      subtitle:
        "Our automotive window tinting not only elevates your vehicle's aesthetics but also protects against harmful UV rays.",
      linkText: "Learn More",
      linkHref: "/services/automotive-window-tinting",
    },
    {
      icon: IoHomeOutline,
      title:
        "Enhance Your Home’s Comfort and Style with Residential Window Tinting",
      subtitle:
        "Our expert team ensures flawless installation, delivering style and protection for every environment.",
      linkText: "Learn More",
      linkHref: "/services/residential-window-tinting",
    },
    {
      icon: HiOutlineBuildingOffice2,
      title:
        "Boost Your Business Appeal with Commercial Window Tinting Solutions",
      subtitle:
        "Commercial window tinting enhances privacy, reduces glare, and improves energy efficiency for your business.",
      linkText: "Learn More",
      linkHref: "/services/commercial-window-tinting",
    },
  ],
};

export default function FeatureListSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16 space-y-8">
      {/* Section Title */}
      <h2 className="text-center  text-gray-900">{content.title}</h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 tablet:grid-cols-3 gap-6">
        {content.cards.map((card, idx) => (
          <FeatureCard
            key={idx}
            icon={card.icon}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
            linkText={card.linkText}
            linkHref={card.linkHref}
          />
        ))}
      </div>
    </section>
  );
}
