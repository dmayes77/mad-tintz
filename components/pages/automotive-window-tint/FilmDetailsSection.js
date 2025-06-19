import React from "react";
import {
  Thermometer,
  Sun,
  ShieldCheck,
  Droplet,
  Layers,
  RefreshCcw,
} from "lucide-react";

// Centralized content for FilmDetailsSection
const content = {
  heading: "In-Depth Film Features",
  subheading:
    "Explore the advanced technology behind our Ceramic and Carbon films.",
  ceramic: {
    title: "Ceramic Window Film",
    tagline: "The epitome of style, protection, and comfort.",
    features: [
      {
        icon: Thermometer,
        label: "Optimal Heat Insulation:",
        text: "Non-conductive ceramic layer slows heat transfer for a cooler ride.",
      },
      {
        icon: Sun,
        label: "Superior IR Rejection:",
        text: "Blocks up to 89% of infrared solar heat with advanced ceramic particle tech.",
      },
      {
        icon: ShieldCheck,
        label: "Extensive UV Protection:",
        text: "Over 99.9% UVA/UVB blockage to protect skin and interior.",
      },
      {
        icon: Droplet,
        label: "Rich Black Finish:",
        text: "Deep, stable black shade for head-turning style.",
      },
      {
        icon: Layers,
        label: "Layer Breakdown:",
        text: "2-ply, 1.5mil film with carbon nanoparticles and ceramic hard coat.",
      },
      {
        icon: RefreshCcw,
        label: "No Fade & Color Stable:",
        text: "Dye-free ceramic ensures long-lasting, true-to-tone color.",
      },
    ],
  },
  carbon: {
    title: "Carbon Window Film",
    tagline: "Win with Carbon—performance over dyed alternatives.",
    features: [
      {
        icon: Droplet,
        label: "Rich Black Color:",
        text: "Bold carbon-only shade without dyes.",
      },
      {
        icon: Sun,
        label: "Superior IR Rejection:",
        text: "Blocks up to 67% of infrared heat via carbon nanoparticle adhesive.",
      },
      {
        icon: ShieldCheck,
        label: "Extensive UV Protection:",
        text: "Over 99.9% UVA/UVB blockage to safeguard skin and interiors.",
      },
      {
        icon: Thermometer,
        label: "Stellar Value:",
        text: "Comparable cost to dyed film with better heat blocking and no fading.",
      },
      {
        icon: Layers,
        label: "Layer Breakdown:",
        text: "2-ply, 1.5mil film with carbon nanoparticle core and weatherable polyester.",
      },
      {
        icon: RefreshCcw,
        label: "No Fade & Color Change:",
        text: "Generation 6 carbon tech ensures permanent, consistent shade.",
      },
    ],
  },
};

/**
 * FilmDetailsSection
 * Detailed feature breakdown for Ceramic (Panaflex) and Carbon (Terraflex) window films with accent-colored icons.
 */
export default function FilmDetailsSection() {
  return (
    <section
      id="film-details"
      className="py-16"
      aria-labelledby="film-details-heading"
    >
      <div className="text-center mb-12">
        <h2
          id="film-details-heading"
          className="font-semibold text-gray-800"
        >
          {content.heading}
        </h2>
        <p className="text-gray-600 mt-2">{content.subheading}</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 tablet:grid-cols-2 gap-8">
        {/* Ceramic Film Card */}
        <div className="bg-white rounded-2xl shadow p-8">
          <h3 className="font-semibold text-gray-800 mb-4">
            {content.ceramic.title}
          </h3>
          <p className="font-medium text-gray-700 mb-6">
            {content.ceramic.tagline}
          </p>
          <ul className="space-y-4 text-gray-700">
            {content.ceramic.features.map(({ icon: Icon, label, text }) => (
              <li key={label} className="flex items-start">
                <Icon className="w-6 h-6 text-accent flex-shrink-0 mr-3" />
                <div>
                  <strong>{label}</strong> {text}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Carbon Film Card */}
        <div className="bg-white rounded-2xl shadow p-8">
          <h3 className="font-semibold text-gray-800 mb-4">
            {content.carbon.title}
          </h3>
          <p className="font-medium text-gray-700 mb-6">
            {content.carbon.tagline}
          </p>
          <ul className="space-y-4 text-gray-700">
            {content.carbon.features.map(({ icon: Icon, label, text }) => (
              <li key={label} className="flex items-start">
                <Icon className="w-6 h-6 text-accent flex-shrink-0 mr-3" />
                <div>
                  <strong>{label}</strong> {text}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
