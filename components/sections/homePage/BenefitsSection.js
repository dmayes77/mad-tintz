// components/FeatureSection.jsx
import React from "react";
import CloudImage from "@/components/ui/CloudImage";
import { Button } from "@/components/ui/Btn";
import NextLink from "next/link";

const content = {
  preTitle: "Convenience",
  title: "Experience the Ultimate in Window Tinting",
  description:
    "Our premium window tinting services provide unparalleled heat and UV protection, ensuring your comfort and safety. Enjoy a stylish look that enhances your vehicle, home, or business while benefiting from our convenient on-site service.",
  btnHref: "/services",
  btnText: "Learn More",
  linkHref: "/",
  linkText: "Schedule Now",
  imageId: "mad-tintz/foto-images/ChatGPT_Image_Jun_4_2025_08_32_16_PM_rkvxf8",
  imageAlt: "Appliance & Headlight Wrap Preview",
  imageRatio: 4 / 3,
};

export default function BenefitsSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#F0FDF4] to-primary py-16">
      {/* Decorative SVG shape behind everything (optional) */}
      <div className="hidden laptop:block absolute inset-y-0 left-0 w-1/2">
        <svg
          className="h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 600 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M400,0 L600,800 L0,800 L0,0 Z"
            fill="#F0FDF4" /* adjust to a very light green/gray if you want */
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-6 items-center">
          {/* == LEFT COLUMN: Text + Icon List == */}
          <div className="space-y-8">
            <h4 className="text-accent uppercase tracking-wider">
              {content.preTitle}
            </h4>
            <h2 className="text-gray-900">{content.title}</h2>
            <p className=" text-gray-700">{content.description}</p>
            <div className="flex items-center gap-8">
              <Button href={content.btnHref} size="lg">
                {content.btnText}
              </Button>
              <NextLink
                href={content.linkHref}
                className="flex items-center tablet:text-accent font-medium text-white"
              >
                {content.linkText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </NextLink>
            </div>
          </div>

          {/* == RIGHT COLUMN: Framed Image == */}
          <div className="flex items-center justify-center">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
              <CloudImage
                publicId={content.imageId}
                alt={content.imageAlt}
                ratio={content.imageRatio}
                objectFit="cover"
                className="w-full"
              />
              {/* Optional overlay gradient at bottom */}
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
