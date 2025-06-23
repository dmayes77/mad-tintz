import { Badge } from "@/components/ui/Badge";

const content = {
  subtitle: "Residentail Window Tint Installation Experts",
  title: "Enhance Your Home",
  description:
    "Experience the ultimate in privacy, style, and UV protection for your residential spaces.",
  buttonText1: "Learn More",
  buttonHref1: "/services",
  buttonText2: "Get Started",
  buttonHref2: "/contact",
};

export default function HeaderSection() {
  return (
    <section className="relative w-full h-[40svh] mx-auto px-4 mb-8 lg:px-8 py-16 items-center text-center flex flex-col gap-8 bg-gradient-to-b from-white to-transparent">
      <p className="text-sm text-gray-400 tracking-widest uppercase">
        {content.subtitle}
      </p>
      <h1 className="font-semibold uppercase">{content.title}</h1>
      <p>{content.description}</p>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <Badge>Up to 99% UV Protection</Badge>
        <Badge>Glare Reduction</Badge>
        <Badge>Energy Savings</Badge>
      </div>
    </section>
  );
}

