import { Button } from "@/components/ui/Btn";
import CloudImage from "@/components/ui/CloudImage";
import Link from "next/link";
import { MdWbShade } from "react-icons/md";
import { FaBuildingShield } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { pageLinks } from "@/content/navigation";

export default function CommercialFeatureSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16 space-y-8">
      {/* == FLEX CONTAINER: content left, image right == */}
      <div className="flex flex-col laptop:flex-row items-center gap-8">
        {/* == LEFT COLUMN: Text + Icon List == */}
        <div className="flex-1 flex flex-col space-y-8">
          <p className="h6 text-accent tracking-widest uppercase">
            Commercial Window Tint
          </p>
          <h2>Elevate Your Business with Professional Tinting</h2>
          <p>
            Enhance your commercial space with our premium window tinting
            solutions. Experience increased comfort, energy efficiency, and a
            stylish look that sets your business apart.
          </p>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center">
              <MdWbShade className="text-accent mr-2 h-6 w-6" />
              Reduce glare and improve employee productivity.
            </li>
            <li className="flex items-center">
              <FaBuildingShield className="text-accent mr-2 h-6 w-6" />
              Protect your interiors from harmful UV rays.
            </li>
            <li className="flex items-center">
              <BsStars className="text-accent mr-2 h-6 w-6" />
              Boost your building's aesthetic appeal and value.
            </li>
          </ul>
          <div className="flex items-center gap-8">
            <Button asChild>
              <Link href={pageLinks.commercial.href}>Learn More</Link>
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
