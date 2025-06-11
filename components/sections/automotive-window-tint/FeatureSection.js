import React from "react";
import {
  ShieldCheck as ShieldIcon,
  Sun as SunIcon,
  Thermometer as ThermometerIcon,
  RefreshCw as RefreshIcon,
} from "lucide-react";

/**
 * Why Choose Our Ceramic Tint?
 * Highlights the key benefits and technical features of our tint film.
 */
export default function FeaturesSection() {
  return (
    <section
      id="tint-features"
      className="py-16"
      aria-labelledby="tint-features-heading"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2
          id="tint-features-heading"
          className="font-semibold text-gray-800"
        >
          Why Choose Our Ceramic Window Tint
        </h2>
        <p className="mt-4 text-gray-600">
          Our premium ceramic film offers industry-leading performance and
          lasting style. Explore the benefits below.
        </p>

        <div className="mt-12 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-8">
          {/* UV Protection */}
          <div className="flex flex-col items-center">
            <ShieldIcon className="w-12 h-12 text-accent" />
            <h3 className="mt-4 text-xl font-medium text-gray-800">
              UV Protection
            </h3>
            <p className="mt-2 text-gray-600">
              Blocks up to 99% of harmful UV rays to protect your skin and
              interior.
            </p>
          </div>

          {/* Heat Rejection */}
          <div className="flex flex-col items-center">
            <ThermometerIcon className="w-12 h-12 text-accent" />
            <h3 className="mt-4 text-xl font-medium text-gray-800">
              Heat Rejection
            </h3>
            <p className="mt-2 text-gray-600">
              Rejects up to 88% of solar heat for cooler, more comfortable
              rides.
            </p>
          </div>

          {/* Glare Reduction & Privacy */}
          <div className="flex flex-col items-center">
            <SunIcon className="w-12 h-12 text-accent" />
            <h3 className="mt-4 text-xl font-medium text-gray-800">
              Glare & Privacy
            </h3>
            <p className="mt-2 text-gray-600">
              Significantly reduces glare and enhances privacy without
              sacrificing clarity.
            </p>
          </div>

          {/* Non-Fading Stability */}
          <div className="flex flex-col items-center">
            <RefreshIcon className="w-12 h-12 text-accent" />
            <h3 className="mt-4 text-xl font-medium text-gray-800">
              Non-Fading & Color Stable
            </h3>
            <p className="mt-2 text-gray-600">
              Engineered to resist fading and maintain true color stability over
              time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
