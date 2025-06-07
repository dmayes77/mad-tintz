import { Button } from "@/components/ui/Btn";
import Link from "next/link";

const content = {
  preTitle: "Excellence",
  title: "Our Premium Window Tint Services",
  description:
    "At MAD Tintz, we specialize in providing top-notch window tinting solutions that enhance comfort and style. Our expert team is dedicated to delivering exceptional quality and service for every project.",
  buttonText1: "Learn More",
  buttonHref1: "/services",
  buttonText2: "Get Started",
  buttonHref2: "/contact",
};

export default function HeaderSection() {
  return (
    <section className="max-w-7xl h-[40svh] mx-auto px-4 lg:px-8 py-16 grid grid-cols-1 laptop:grid-cols-2 items-center gap-8">
      
      <div className="flex flex-col gap-4">
        <p className="h4 text-accent tracking-widest! uppercase">
          {content.preTitle}
        </p>
        <h1>{content.title}</h1>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <p>{content.description}</p>
        </div>
        <div className="flex flex-row gap-4">
          <Button asChild>
            <Link href={content.buttonHref1}>{content.buttonText1}</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href={content.buttonHref2}>{content.buttonText2}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
