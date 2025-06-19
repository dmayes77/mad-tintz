import SplitSection from "@/components/sections/SplitSection";
import { Button } from "@/components/ui/Btn";
import Link from "next/link";
import CloudImage from "@/components/ui/CloudImage";

export default function FeatureSection() {
  const leftContent = (
    <div className="bg-white px-4 py-8 border-gray-100 h-[100%] rounded-2xl shadow-md w-full space-y-8">
      <p className="h6 text-accent tracking-widest uppercase ">Comfort </p>
      <h2>Enhance Your Home with Premium Window Tinting</h2>
      <p>
        Experience a cooler, more comfortable living space while protecting your
        interiors from harmful UV rays. Our residential window tinting solutions
        offer both style and functionality.
      </p>

      <div className="flex items-center gap-8">
        <Button asChild>
          <Link href="#">Learn More</Link>
        </Button>
        <Button asChild>
          <Link href="#">Get a Quote</Link>
        </Button>
      </div>
    </div>
  );
  const rightContent = (
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
  );
  return <SplitSection left={leftContent} right={rightContent} />;
}
