import { Button } from "@/components/ui/Btn";
import CloudImage from "@/components/ui/CloudImage";
import Link from "next/link";
import { GiCarSeat } from "react-icons/gi";
import { FaSun } from "react-icons/fa";
import { CgStyle } from "react-icons/cg";
import { pageLinks } from "@/content/navigation";

export default function AutomotiveFeatureSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16 space-y-8">
      {/* == FLEX CONTAINER: content left, image right == */}
      <div className="flex flex-col laptop:flex-row items-center gap-8">
        {/* == LEFT COLUMN: Text + Icon List == */}
        <div className="flex-1 flex flex-col space-y-8">
          <p className="h6 text-accent tracking-widest uppercase">
            Automotive Window Tint
          </p>
          <h2>Transform Your Ride with Window Tinting</h2>
          <p>
            Elevate your driving experience with our top-tier automotive window
            tinting services. Enjoy enhanced privacy, reduced glare, and
            superior UV protection all year round.
          </p>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center">
              <GiCarSeat className="text-accent mr-2 h-6 w-6" />
              Stay cool and comfortable on the road.
            </li>
            <li className="flex items-center">
              <FaSun className="text-accent mr-2 h-6 w-6" />
              Protect your interior from harmful sun damage.
            </li>
            <li className="flex items-center">
              <CgStyle className="text-accent mr-2 h-6 w-6" />
              Choose from a variety of stylish options.
            </li>
          </ul>
          <div className="flex items-center gap-8">
            <Button asChild>
              <Link href={pageLinks.automotive.href}>Learn More</Link>
            </Button>
            <Button asChild>
              <Link href={pageLinks.booking.href}>Get a Quote</Link>
            </Button>
          </div>
        </div>

        {/* == RIGHT COLUMN: Framed Image == */}
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
