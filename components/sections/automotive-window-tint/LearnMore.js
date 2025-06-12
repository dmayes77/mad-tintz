import React from "react";
import CloudImage from "@/components/ui/CloudImage";

export default function TintLearnMoreSection() {
  return (
    <section
      id="learn-more"
      className="max-w-7xl mx-auto py-16 px-4 gap-4 grid-cols-1 laptop:grid-cols-2 grid items-center bg-gradient-to-b from-transparent via-white/90 to-transparent"
    >
      <div className="w-full space-y-8 px-2">
        <h2 className="font-semibold text-gray-900">
          Learn More About Window Tinting
        </h2>
        <p className="text-gray-700">
          Automotive window tint is a precision-engineered film applied to your
          vehicle’s glass to block harmful ultraviolet (UV) rays, reduce
          infrared (IR) heat, and enhance privacy. By installing window tint,
          you’ll enjoy a cooler cabin, protect your dashboard and upholstery
          from fading, and experience reduced glare for safer driving.
        </p>
        <p className="text-gray-700">
          Not all films are created equal. Our{" "}
          <strong>ceramic window film</strong> uses advanced nano-ceramic
          particles that deliver exceptional performance—up to 50% more heat
          rejection than standard dyed films and 99% UV blockage. Unlike
          metallic tints, ceramic and <strong>nano-ceramic tint</strong> won’t
          interfere with GPS, Bluetooth, or cellular signals, keeping your
          electronics working flawlessly.
        </p>
        <p className="text-gray-700">
          Choosing the right window tint package is simple. Opt for a{" "}
          <em>Complete Install</em> to protect every pane, a{" "}
          <em>Full Install</em> for sides and rear, or select specialized
          options like <em>2 Front Windows</em>, <em>Windshield Only</em>, or a{" "}
          <em>Windshield Strip</em>. Each package uses the same high-quality
          film and meticulous installation process to ensure a flawless finish.
        </p>
        <p className="text-gray-700">
          In Chattanooga, TN, our mobile window tint service brings the
          expertise and convenience directly to your home or office. Ready to
          upgrade your ride with premium nano-ceramic tint or explore our carbon
          film options? Scroll down to find the perfect package for your vehicle
          and schedule your appointment today.
        </p>
      </div>
      <div className="w-full">
        <CloudImage
          publicId="mad-tintz/service-images/learn-more-window-tint"
          alt="Automotive window tint installation in progress, showcasing a technician applying nano-ceramic film to a car window"
          ratio={1}
          className="w-full rounded-2xl shadow-lg overflow-hidden mobile:aspect-video! laptop:aspect-3/4! desktop:aspect-square!"
          objectFit="cover"
        />
      </div>
    </section>
  );
}
