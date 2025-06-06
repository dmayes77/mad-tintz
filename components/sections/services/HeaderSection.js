import PageHeader from "@/components/ui/PageHeader";

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
    <PageHeader
      preTitle={content.preTitle}
      title={content.title}
      description={content.description}
      buttonText1={content.buttonText1}
      buttonText2={content.buttonText2}
      buttonHref1={content.buttonHref1}
      buttonHref2={content.buttonHref2}
    />
  );
}
