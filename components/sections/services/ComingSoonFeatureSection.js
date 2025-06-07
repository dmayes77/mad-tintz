import { Button } from "@/components/ui/Btn";
import CloudImage from "@/components/ui/CloudImage";
import Link from "next/link";

export default function ComingSoonFeatureSection() {
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
          <p className="h6 text-accent tracking-widest! uppercase">Exciting</p>
          <h2>New Services Coming Soon to Enhance Your Vibe</h2>
          <p>
            Get ready for our upcoming Appliance Wrapping and Headlight/Tail
            Light Wrapping services! Stay tuned for innovative solutions that
            elevate your style.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <span className="h5">Stay Tuned</span>
              <p>
                Transform your vehicle with our upcoming wrapping services for a
                fresh new look.
              </p>
            </div>
            <div>
              <span className="h5">Get Ready</span>
              <p>
                Exciting updates are on the way—don't miss out on these
                enhancements!
              </p>
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
