import { Button } from "@/components/ui/Btn";
import CloudImage from "@/components/ui/CloudImage";
import Link from "next/link";
import { pageLinks } from "@/content/navigation";

export default function ResidentialFeatureSection() {
  return (
    <section>
      {/* == FLEX CONTAINER: content left, image right == */}
      <div className="flex flex-col laptop:flex-row-reverse items-center gap-8">
        {/* == LEFT COLUMN: Text & Stats == */}
        <div className="flex-1 flex flex-col space-y-6">
          <p className="h6 text-accent tracking-widest uppercase">
            Residential Window Tint
          </p>
          <h2>Enhance Your Home with Premium Window Tinting</h2>
          <p>
            Transform your living space with our top-notch residential window
            tinting services. Enjoy increased privacy, reduced glare, and
            enhanced energy efficiency.
          </p>

          {/* == STATS ROW == */}
          <div className="flex flex-row  justify-between gap-8">
            <div className="flex-1 text-center">
              <span className="text-5xl font-bold">99%</span>
              <p>UV-ray blockage to keep your family and furnishings safe.</p>
            </div>
            <div className="flex-1 text-center">
              <span className="text-5xl font-bold">78%</span>
              <p>Glare reduction for better comfort and visibility.</p>
            </div>
            <div className="flex-1 text-center">
              <span className="text-5xl font-bold">15%</span>
              <p>Average savings on energy bills each year.</p>
            </div>
          </div>

          {/* == CTA BUTTONS == */}
          <div className="flex items-center gap-8">
            <Button asChild>
              <Link href={pageLinks.residential.href}>Learn More</Link>
            </Button>
            <Button asChild>
              <Link href={pageLinks.booking.href}>Get a Quote</Link>
            </Button>
          </div>
        </div>

        {/* == RIGHT COLUMN: Image == */}
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
            <CloudImage
              publicId="mad-tintz/foto-images/ChatGPT_Image_Jun_4_2025_08_32_16_PM_rkvxf8"
              alt="Image"
              ratio={2/1}
              objectFit="cover"
              className="laptop:aspect-square!"
            />
            <div className="absolute bottom-0 left-0 w-full h-75 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
