"use client";

import Image from "next/image";
import { Button } from "../../ui/Btn";
import { AuroraText } from "../../magicui/aurora-text";
import { ShimmerButton } from "../../magicui/shimmer-button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center h-[50svh] laptop:h-[75svh]">
      {/* Background Image */}
      <Image
        src="https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/v1749058331/mad-tintz/hero-images/car-at-collidge-park.png"
        alt="Hero Image"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 space-y-4">
        <h1 className="text-white font-normal!">
          Too Much Sun, No Privacy?
          <br /> We Tint It Right —{" "}
          <AuroraText className="uppercase font-semibold">Wherever You Are.</AuroraText>
        </h1>
        <p className="text-gray-100 max-w-xl">
          Our mobile window tinting service solves heat, glare, and privacy
          issues fast — for your vehicle, at your home or business.
        </p>
        <Link href="/services">
          <ShimmerButton
            className="uppercase p"
            shimmerSize="0.15em"
            shimmerColor="#7eaedc"
            background="#385a83"
          >
            View All Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="ml-2 size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </ShimmerButton>
        </Link>
      </div>
    </section>
  );
}
