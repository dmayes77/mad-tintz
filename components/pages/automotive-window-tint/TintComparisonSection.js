import { Button } from "@/components/ui/Btn";
import ComparisonSlider from "@/components/ui/ComparisonSlider";
import Link from "next/link";

const content = {
  sectionId: "tint-comparison",
  title: "See the Difference: Clear vs. Ceramic Window Film",
  description:
    "Drag the slider to compare factory-clear glass with our premium, neutral charcoal ceramic tint—boasting 70% VLT on the windshield and 35% VLT on the side windows, engineered for non-fading, color-stable performance and up to 88% heat rejection. Experience the real-world benefits of enhanced privacy, reduced glare, and lasting, sleek style.",
  beforeImage:
    "https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/v1749602154/mad-tintz/service-images/no-tint.png",
  afterImage:
    "https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/v1749608032/mad-tintz/service-images/with-tint.png",
  sliderPosition: 50, // Default position for the slider
  sliderCaption: "* Slide left/right to reveal more or less tint *",
  button: {
    href: "/services/window-tint",
    label: "Book Your Tint Now",
  },
  legalFootnote:
    "* Per Tennessee law, windshield tint must allow ≥70% VLT on windshields, and ≥35% VLT on side/rear windows.",
};

export default function TintComparisonSection() {
  return (
    <section
      id={content.sectionId}
      className="py-16 bg-gradient-to-b from-transparent to-[#F0FDF4]"
      aria-labelledby={`${content.sectionId}-heading`}
    >
      <div className="max-w-5xl mx-auto text-center px-4">
        {/* Section Heading */}
        <h2 id={`${content.sectionId}-heading`} className="font-semibold mb-4">
          {content.title}
        </h2>

        {/* Intro Copy */}
        <p className="text-gray-700 mb-8">{content.description}</p>

        {/* Slider */}
        <div className="max-w-2xl mx-auto mb-4">
          <ComparisonSlider
            beforeImage={content.beforeImage}
            afterImage={content.afterImage}
            position={content.sliderPosition}
          />
        </div>

        {/* Slider Caption */}
        <p className="text-sm text-gray-600 mb-6">{content.sliderCaption}</p>

        {/* Call-to-Action */}
        <Button asChild size={"lg"} className="uppercase">
          <Link href={content.button.href}>{content.button.label}</Link>
        </Button>

        {/* Legal Footnote */}
        <p className="text-xs text-gray-500 mt-4">{content.legalFootnote}</p>
      </div>
    </section>
  );
}
