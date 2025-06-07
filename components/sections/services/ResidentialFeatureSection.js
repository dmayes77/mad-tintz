import { Button } from "@/components/ui/Btn";
import CloudImage from "@/components/ui/CloudImage";
import Link from "next/link";

export default function ResidentialFeatureSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16 space-y-8">
      <div className="grid grid-cols-1 laptop:grid-cols-2 items-center gap-8">
        {/* == LEFT COLUMN: Text + Icon List == */}
        <div className="flex items-center justify-center">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
            <CloudImage
              publicId="mad-tintz/foto-images/ChatGPT_Image_Jun_4_2025_08_32_16_PM_rkvxf8"
              alt="Image"
              ratio={4 / 3}
              objectFit="cover"
            />
            {/* Optional overlay gradient at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-75 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>

        {/* == RIGHT COLUMN: Framed Image == */}

        <div className="flex flex-col space-y-6">
          <p className="h6 text-accent tracking-widest! uppercase">Comfort</p>
          <h2>Enhance Your Home with Premium Window Tinting</h2>
          <p>
            Transform your living space with our top-notch residential window
            tinting services. Enjoy increased privacy, reduced glare, and
            enhanced energy efficiency.
          </p>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <span className="text-5xl font-bold">99%</span>
              <p>UV-ray blockage to keep your family and furnishings safe.</p>
            </div>
            <div>
              <span className="text-5xl font-bold">78%</span>
              <p>Glare reduction for better comfort and visibility.</p>
            </div>
            <div>
              <span className="text-5xl font-bold">15%</span>
              <p>Average savings on energy bills each year.</p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <Button>Learn More</Button>
            <Button asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
