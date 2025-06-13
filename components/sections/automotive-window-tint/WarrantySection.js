import React from "react";
import { ShieldCheck } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";

/**
 * WarrantySection
 * Outlines the warranty details and maintenance recommendations for the tint film.
 */
export default function WarrantySection() {
  return (
    <section
      id="warranty"
      className="py-16  max-w-7xl mx-auto px-4 lg:px-8 space-y-8"
      aria-labelledby="warranty-heading"
    >
      <div className="relative overflow-hidden bg-white/60 max-w-4xl mx-auto text-center p-8 rounded-2xl border border-accent/50">
        <div className="flex items-center justify-center mb-4">
          <ShieldCheck className="w-8 h-8 text-accent" />
        </div>
        <h2
          id="warranty-heading"
          className="text-3xl font-semibold text-gray-800 mb-4"
        >
          Warranty & Maintenance
        </h2>
        <p className="text-gray-600 mb-8">
          We stand behind our premium ceramic film with industry-leading
          warranty coverage and simple maintenance guidelines to keep your tint
          looking like new.
        </p>

        <ul className="space-y-6 text-left md:text-center md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
          <li>
            <h3 className="font-medium text-gray-800">
              Lifetime Edge-Seal Guarantee
            </h3>
            <p className="text-gray-600">
              We guarantee your edges will stay sealed without peeling or
              lifting for the life of your vehicle.
            </p>
          </li>
          <li>
            <h3 className="font-medium text-gray-800">
              5-Year No-Fade Warranty
            </h3>
            <p className="text-gray-600">
              Our film is engineered for non-fading color stability, backed by a
              5-year warranty against discoloration.
            </p>
          </li>
          <li>
            <h3 className="font-medium text-gray-800">Responsive Support</h3>
            <p className="text-gray-600">
              If you ever notice bubbling, lifting, or imperfections, simply
              contact us for free repair or replacement.
            </p>
          </li>
          <li>
            <h3 className="font-medium text-gray-800">Maintenance Tips</h3>
            <p className="text-gray-600">
              Use a mild, ammonia-free cleaner and a soft microfiber cloth.
              Avoid sharp objects or power washers directly on the film.
            </p>
          </li>
        </ul>

        
        <BorderBeam
          duration={6}
          size={800}
          className="from-transparent via-accent to-transparent"
        />
        <BorderBeam
          duration={6}
          delay={3}
          size={800}
          className="from-transparent via-primary to-transparent"
        />
      </div>
    </section>
  );
}
