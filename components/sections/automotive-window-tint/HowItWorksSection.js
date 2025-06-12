import React from "react";
import {
  SlidersHorizontal,
  Ruler,
  Zap,
  Scissors,
  Layout,
  CheckCircle,
} from "lucide-react";

/**
 * HowItWorksSection
 * A step-by-step overview of our window tint installation process.
 */
export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-16 bg-gradient-to-b from-transparent via-white/90 to-transparent"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2
          id="how-it-works-heading"
          className="text-3xl font-semibold text-gray-800"
        >
          How It Works
        </h2>
        <p className="mt-4 text-gray-600">
          From selection to inspection, our mobile tint experts make every step
          seamless.
        </p>

        <div className="mt-12 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-8">
          {/* Step 1: Consultation & Selection */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 bg-accent text-white rounded-full">
              <span className="font-bold">1</span>
            </div>
            <SlidersHorizontal className="w-10 h-10 text-accent mt-4" />
            <h3 className="mt-2 text-xl font-medium text-gray-800">
              Consultation & Selection
            </h3>
            <p className="mt-1 text-gray-600">
              Choose your installation service, tint material (ceramic or carbon),
              and VLT shade (5%, 20%, 35%, 50%, or 70%).
            </p>
          </div>

          {/* Step 2: Measurement */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 bg-accent text-white rounded-full">
              <span className="font-bold">2</span>
            </div>
            <Ruler className="w-10 h-10 text-accent mt-4" />
            <h3 className="mt-2 text-xl font-medium text-gray-800">
              Measurement
            </h3>
            <p className="mt-1 text-gray-600">
              We assess your vehicle and take precise measurements for the
              perfect fit.
            </p>
          </div>

          {/* Step 3: Surface Preparation */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 bg-accent text-white rounded-full">
              <span className="font-bold">3</span>
            </div>
            <Zap className="w-10 h-10 text-accent mt-4" />
            <h3 className="mt-2 text-xl font-medium text-gray-800">
              Surface Preparation
            </h3>
            <p className="mt-1 text-gray-600">
              We clean and decontaminate the glass to ensure long-lasting
              adhesion.
            </p>
          </div>

          {/* Step 4: Pattern Cutting */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 bg-accent text-white rounded-full">
              <span className="font-bold">4</span>
            </div>
            <Scissors className="w-10 h-10 text-accent mt-4" />
            <h3 className="mt-2 text-xl font-medium text-gray-800">
              Pattern Cutting
            </h3>
            <p className="mt-1 text-gray-600">
              Our custom plotter cuts each piece to exact dimensions for
              seamless coverage.
            </p>
          </div>

          {/* Step 5: Professional Installation */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 bg-accent text-white rounded-full">
              <span className="font-bold">5</span>
            </div>
            <Layout className="w-10 h-10 text-accent mt-4" />
            <h3 className="mt-2 text-xl font-medium text-gray-800">
              Professional Installation
            </h3>
            <p className="mt-1 text-gray-600">
              Our technicians apply the film with precision tools and expert
              technique.
            </p>
          </div>

          {/* Step 6: Final Inspection & Handover */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 bg-accent text-white rounded-full">
              <span className="font-bold">6</span>
            </div>
            <CheckCircle className="w-10 h-10 text-accent mt-4" />
            <h3 className="mt-2 text-xl font-medium text-gray-800">
              Final Inspection & Handover
            </h3>
            <p className="mt-1 text-gray-600">
              We ensure every edge is sealed and you’re fully satisfied before
              we leave.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
