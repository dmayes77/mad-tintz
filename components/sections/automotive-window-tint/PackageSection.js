// components/PackagesSection.jsx
import CloudImage from "@/components/ui/CloudImage";
import React from "react";

const packages = [
  {
    name: "Complete Install",
    description: "Tint all glass—including windshield—for complete coverage.",
    imageId: "mad-tintz/service-images/complete-window-tint",
    imageAlt:
      "All windows tinted including windshield, side windows, and rear window",
  },
  {
    name: "Full Install",
    description: "Tint all side & rear glass (windshield excluded).",
    imageId: "mad-tintz/service-images/full-window-tint",
    imageAlt: "Tinted side and rear windows with windshield left clear",
  },
  {
    name: "Windshield Only",
    description: "Protect your windshield from UV & glare.",
    imageId: "mad-tintz/service-images/windshield-tint",
    imageAlt: "Only the windshield is highlighted to show tint coverage",
  },
  {
    name: "2 Front Windows",
    description: "Tint the driver & passenger front side windows.",
    imageId: "mad-tintz/service-images/front-2-windows",
    imageAlt: "Driver and passenger front side windows tinted",
  },
  {
    name: "Windshield Strip",
    description: "Add a sun-strip to the top of your windshield.",
    imageId: "mad-tintz/service-images/windshield-strip",
    imageAlt: "Sun-strip applied to the top edge of the windshield",
  },
];

export default function PackagesSection() {
  return (
    <section id="packages" className="max-w-7xl mx-auto px-4 lg:px-8 py-16 space-y-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2>Our Tint Packages</h2>
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6 text-center">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow space-y-4"
            >
              <CloudImage
                publicId={pkg.imageId}
                alt={pkg.imageAlt}
                ratio={16 / 9}
                className="w-full h-48 rounded-t-2xl "
                objectFit="cover"
              />
              <h3>{pkg.name}</h3>
              <p className="text-gray-600 ">{pkg.description}</p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
