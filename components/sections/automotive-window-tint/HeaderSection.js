import { Button } from "@/components/ui/Btn";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

const content = {
  title: "Chattanooga Automotive Tinting",
  description:
    "Experience the ultimate in protection and style with our high-end ceramic window film in Chattanooga.",
  buttonText1: "Learn More",
  buttonHref1: "/services",
  buttonText2: "Get Started",
  buttonHref2: "/contact",
};

export default function HeaderSection() {
  return (
    <section className="max-w-7xl h-[40svh] mx-auto px-4 lg:px-8 py-16 items-center text-center flex flex-col gap-8 bg-gradient-to-b from-[#F0FDF4] to-transparent">
      <h1 className="font-semibold uppercase">{content.title}</h1>
      <p>{content.description}</p>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <Badge>Ceramic Auto Tint</Badge>
        <Badge>Nano-Ceramic Window Film</Badge>
        <Badge>Solar Heat-Blocking Tint</Badge>
      </div>
    </section>
  );
}
