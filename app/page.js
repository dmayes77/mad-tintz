import Hero from "@/components/sections/homePage/Hero";
import { InteractiveGridPattern3D } from "@/components/magicui/interactive-grid-pattern-3d";
import { Button } from "@/components/ui/Btn";
import NextLink from "next/link";
import Image from "next/image";
import FeatureSection from "@/components/sections/homePage/FeatureSection";

export const metadata = {
  title: "Auto, Home & Commercial Tinting Chattanooga | MAD Tintz",
  description:
    "Get MAD Tintz – Chattanooga’s mobile window tinting pros for cars, homes & businesses. Enhance privacy, reduce heat & boost style with expert, on-site installation.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <section className="relative w-full h-100 flex ">
        {/* 
    1) Parent is relative and has an explicit height (here I used 600px as an example; adjust as needed).
    2) The Image is absolute/inset-0 with fill + object-cover so it always covers the entire section.
  */}
        <Image
          src="https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/v1749084614/mad-tintz/foto-images/geometric-bg.png"
          alt="hero-bg"
          fill
          priority
          className="absolute inset-0 object-cover"
        />

        {/* 
    3) Overlay content is given z-10 so it sits above the Image. 
       I also added a semi-transparent background on this wrapper so your text stays legible.
  */}
        <div className="absolute inset-0 z-10  items-center justify-center text-center space-y-4 w-full mx-auto px-4 bg-black/20">
          <div className="flex flex-col laptop:flex-row space-y-4 laptop:space-x-4 items-center max-w-5xl mx-auto p-4">
            <div>
              <h2 className="text-white font-semibold leading-tight uppercase">
                The best automotive, residential, and commercial window tint in
                Chattanooga
              </h2>
              <p className="mt-2 text-white/90">
                MAD Tintz comes to you—providing mobile window tinting for
                vehicles, homes, and businesses. Whether you need sun protection
                or added privacy, we’ve got you covered!
              </p>
            </div>

            <div className="max-w-xl bg-white/80 p-6 rounded-xl shadow-lg space-y-4">
              <h3 className="text-lg font-medium">Request a Quote</h3>
              <p className="text-sm text-gray-700">
                Tell us about you and your vehicle to get a free customized
                quote.
              </p>
              <Button>Get a Free Quote</Button>
              <p className="mt-2 text-sm font-medium text-gray-800">
                GIVE US A CALL TODAY
              </p>
              <NextLink
                href="tel:4234970881"
                className="inline-flex items-center justify-center space-x-2 text-blue-600 hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 
               2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-
               .852-1.091l-4.423-1.106c-.44-.11-.902.055-
               1.173.417l-.97 1.293c-.282.376-.769.542-
               1.21.38a12.035 12.035 0 0 1-7.143-
               7.143c-.162-.441.004-.928.38-1.21l1.293-
               .97c.363-.271.527-.734.417-1.173L6.963 
               3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 
               2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <span>(423) 497-0881</span>
              </NextLink>
            </div>
          </div>
        </div>
      </section>
      <FeatureSection/>
    </>
  );
}
