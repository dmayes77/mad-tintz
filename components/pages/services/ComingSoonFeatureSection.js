import { Button } from "@/components/ui/Btn";
import CloudImage from "@/components/ui/CloudImage";
import Link from "next/link";
import { pageLinks } from "@/content/navigation";

export default function ComingSoonFeatureSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16 space-y-8">
      {/* == FLEX CONTAINER: content left, image right == */}
      <div className="flex flex-col laptop:flex-row-reverse items-center gap-8">
        {/* == LEFT COLUMN: Text & Info == */}
        <div className="flex-1 flex flex-col space-y-6">
          <p className="h6 text-accent tracking-widest uppercase">Exciting</p>
          <h2>New Services Coming Soon to Enhance Your Vibe</h2>
          <p>
            Get ready for our upcoming Appliance Wrapping and Headlight/Tail
            Light Wrapping services! Stay tuned for innovative solutions that
            elevate your style.
          </p>

          {/* == INFO ROW == */}
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex-1">
              <span className="h5">Stay Tuned</span>
              <p>
                Transform your vehicle with our upcoming wrapping services for a
                fresh new look.
              </p>
            </div>
            <div className="flex-1">
              <span className="h5">Get Ready</span>
              <p>
                Exciting updates are on the way—don't miss out on these
                enhancements!
              </p>
            </div>
          </div>

          {/* == CTA BUTTONS == */}
          <div className="flex items-center gap-8">
            <Button asChild>
              <Link href={pageLinks.otherServices.href}>Learn More</Link>
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
              ratio={2 / 1}
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
