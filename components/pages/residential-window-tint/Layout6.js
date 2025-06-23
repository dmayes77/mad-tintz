import React from "react";

export const Layout6Defaults = {
  heading:
    "Transform Your Home with Premium Residential Window Tinting Solutions",
  description:
    "Enhance your home's curb appeal while enjoying significant energy savings. Our window tinting not only looks great but also helps reduce heat and glare.",
  subHeadings: [
    {
      title: "Energy Efficiency",
      description:
        "Lower your energy bills with our advanced heat-reducing window films.",
    },
    {
      title: "Aesthetic Appeal",
      description:
        "Elevate your home's style with our sleek and modern tinting options.",
    },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
};

export default function Layout6(props) {
  const { heading, description, image, subHeadings } = {
    ...Layout6Defaults,
    ...props,
  };

  return (
    <section id="relume">
      <div>
        <div className="grid grid-cols-1 gap-y-12 tablet:grid-flow-row tablet:grid-cols-2 tablet:items-center tablet:gap-x-12 laptop:gap-x-20">
          <div>
            <h2 className="rb-5 mb-5 font-bold leading-[1.2] tablet:mb-6">
              {heading}
            </h2>
            <p className="mb-6 tablet:mb-8">{description}</p>

            <div className="grid grid-cols-1 gap-6 py-2 fold:grid-cols-2">
              {subHeadings?.map((sub, i) => (
                <div key={i}>
                  <h4 className="mb-3 font-bold leading-[1.4] tablet:mb-4">
                    {sub.title}
                  </h4>
                  <p>{sub.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src={image?.src}
              alt={image?.alt || ""}
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
