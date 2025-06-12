import React from "react";
import { Check } from "lucide-react";

/**
 * WhatWeOfferSection
 * Shows a comparison of our Ceramic and Carbon window films and available VLT shades, plus additional details.
 */
export default function WhatWeOfferSection() {
  const shades = [
    { percent: "5% VLT", carbon: true, ceramic: false },
    { percent: "20% VLT", carbon: true, ceramic: true },
    { percent: "35% VLT", carbon: true, ceramic: true },
    { percent: "50% VLT", carbon: false, ceramic: true },
    { percent: "70% VLT", carbon: false, ceramic: true },
  ];

  return (
    <section
      id="what-we-offer"
      className="py-16 bg-white"
      aria-labelledby="what-we-offer-heading"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2
          id="what-we-offer-heading"
          className="text-3xl font-semibold text-gray-800"
        >
          What We Offer
        </h2>
        <p className="mt-4 text-gray-600">
          Choose between our cutting-edge Ceramic or classic Carbon films and
          find the perfect shade of tint to suit your style and needs.
        </p>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full table-auto text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">Shade</th>
                <th className="px-4 py-2">Carbon Film</th>
                <th className="px-4 py-2">Ceramic Film</th>
              </tr>
            </thead>
            <tbody>
              {shades.map((s) => (
                <tr key={s.percent} className="border-b">
                  <td className="px-4 py-3 font-medium">{s.percent}</td>
                  <td className="px-4 py-3">
                    {s.carbon ? (
                      <Check className="inline-block w-5 h-5 text-green-500" />
                    ) : (
                      "—"
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {s.ceramic ? (
                      <Check className="inline-block w-5 h-5 text-green-500" />
                    ) : (
                      "—"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Additional descriptive paragraphs */}
        <div className="mt-6 text-gray-700 text-left space-y-4">
          <p>
            Our <strong>Carbon Film</strong> offers an economical option with
            excellent scratch resistance, quick installation, and reliable UV
            protection. It’s perfect for those looking to enhance privacy and
            reduce glare without the premium investment.
          </p>
          <p>
            For top-tier performance, our <strong>Ceramic Film</strong> delivers
            superior heat rejection (up to 88%), crystal-clear clarity, and
            non-fading color stability. With a wide range of VLT options from
            20% to 70%, it’s the ideal choice for drivers seeking maximum
            comfort and longevity.
          </p>
        </div>
      </div>
    </section>
  );
}
