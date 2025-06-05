// components/homepage/FeatureSection.jsx
import ServiceCard from "@/components/ui/Card";
import React from "react";

const section = {
  title:
    "Explore Our Premium Window Tinting Services for Ultimate Protection and Style",
  description:
    "At MAD Tintz, we specialize in enhancing your vehicle, home, and business with top-notch window tinting solutions. Our services not only provide aesthetic appeal but also protect against harmful UV rays and heat. Experience the perfect blend of style and functionality with our expert installation.",
  cards: [
    {
      imageId:
        "mad-tintz/foto-images/ChatGPT_Image_Jun_4_2025_08_32_16_PM_rkvxf8",
      imageAlt: "Automotive Tint",
      title:
        "Automotive Window Tinting: Style Meets Protection for Your Vehicle",
      body: "Transform your ride with our premium automotive window tinting services.",
      href: "/automotive-tinting",
    },
    {
      imageId:
        "mad-tintz/foto-images/ChatGPT_Image_Jun_4_2025_08_32_16_PM_rkvxf8",
      imageAlt: "Residential Tint",
      title:
        "Residential Window Tinting: Enhance Comfort and Privacy in Your Home",
      body: "Create a serene living space with our residential window tinting options.",
      href: "/residential-tinting",
    },
    {
      imageId:
        "mad-tintz/foto-images/ChatGPT_Image_Jun_4_2025_08_32_16_PM_rkvxf8",
      imageAlt: "Commercial Tint",
      title:
        "Commercial Window Tinting: Boost Your Business’s Aesthetic and Efficiency",
      body: "Elevate your workspace with our professional commercial window tinting services.",
      href: "/commercial-tinting",
    },
  ],
};

export default function FeatureListSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16 space-y-8">
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8">
        <h2>{section.title}</h2>
        <p>{section.description}</p>
      </div>

      <div className="grid grid-cols-1 tablet:grid-cols-3 gap-6">
        {section.cards.map((card, index) => (
          <ServiceCard
            key={index}
            imageId={card.imageId}
            imageAlt={card.imageAlt}
            title={card.title}
            body={card.body}
            href={card.href}
          />
        ))}
      </div>
    </section>
  );
}
