import Hero from "@/components/sections/homePage/Hero";
import { InteractiveGridPattern3D } from "@/components/magicui/interactive-grid-pattern-3d";
import { Button } from "@/components/ui/Btn";
import NextLink from "next/link";

export const metadata = {
  title: "Auto, Home & Commercial Tinting Chattanooga | MAD Tintz",
  description:
    "Get MAD Tintz – Chattanooga’s mobile window tinting pros for cars, homes & businesses. Enhance privacy, reduce heat & boost style with expert, on-site installation.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <section className="relative overflow-hidden ">
        <InteractiveGridPattern3D />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 space-y-4 max-w-3xl mx-auto">
          <h2 className="font-normal! capitalize">
            The best automotive, residential, and commercial window tint in
            Chattanooga
          </h2>
          <p>
            MAD Tintz comes to you—providing mobile window tinting for vehicles,
            homes, and businesses. Whether you need sun protection or added
            privacy, we’ve got you covered!
          </p>
          <div className="max-w-xl max-auto bg-primary/30 p-4 rounded-xl shadow-lg space-y-4">
            <h3>Request a Quote</h3>{" "}
            <p>
              Tell us about you and your vehicle to get a free customized quote.
            </p>{" "}
            <Button>Get a Free Quote</Button> <p>GIVE US A CALL TODAY</p>{" "}
            <NextLink href="#" className="flex items-center justify-center h5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              (423) 497-0881
            </NextLink>
          </div>
        </div>
      </section>
    </>
  );
}
