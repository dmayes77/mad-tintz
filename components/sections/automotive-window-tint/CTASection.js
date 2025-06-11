import React from "react";
import { ArrowRight } from "lucide-react";

/**
 * CTASection
 * A prominent call-to-action banner encouraging users to book window tint services.
 */
export default function CTASection() {
  return (
    <section
      id="cta"
      className="py-16 h-[40svh] text-accent relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#F0FDF4] to-transparent"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h2 id="cta-heading" className="text-3xl font-bold mb-4">
          Ready to Transform Your Ride?
        </h2>
        <p className="text-lg mb-8">
          Experience unmatched comfort, style, and protection with our premium
          ceramic window tint.
        </p>
        <a
          href="/services/window-tint"
          className="inline-flex items-center px-8 py-4 bg-white text-accent font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          Book Your Tint Now
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </section>
  );
}
