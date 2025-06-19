// components/PackagesSection.jsx
import CloudImage from "@/components/ui/CloudImage";
import React from "react";
import { Badge } from "@/components/ui/Badge";

const packages = [
  {
    name: "Ultimate Install",
    description:
      "All-glass tint—including windshield—with premium ceramic coating for UV protection, scratch resistance, and hydrophobic clarity.",
    imageId: "mad-tintz/service-images/complete-window-tint",
    imageAlt:
      "All windows tinted including windshield, side windows, and rear window, with ceramic coating gleaming under light",
  },

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
    <section id="packages" className="max-w-7xl mx-auto px-4 lg:px-8 space-y-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="inline-flex rounded-full mb-8 bg-gradient-to-br from-accent via-accent/70 to-accent text-accent-foreground h2 py-2 px-6 text-center ">
          Our Window Film Installation Services
        </h2>
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
        <div className="mt-12">
          <h3 className="font-semibold mb-4">
            Other Service Installs
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge>{`Sun Roof Tint`}</Badge>
            <Badge>{`Back Window Only`}</Badge>
            <Badge>{`Tint Removal`}</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
