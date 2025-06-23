"use client";

import React from "react";
import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { HiOutlineColorSwatch } from "react-icons/hi";

export const Layout245Defaults = {
  tagline: "Features",
  heading: "Explore Our Premium Residential Tinting Options",
  description:
    "Our residential window tinting offers unparalleled comfort and style. Choose from a variety of non-reflective options that enhance privacy while blocking harmful UV rays. Enjoy long-lasting durability that keeps your home looking great for years.",
  sections: [
    {
      icon: HiOutlineColorSwatch, // React icon component
      heading: "Diverse Tint Shades for Every Preference",
      description: "Select from a wide range of tint shades.",
    },
    {
      icon: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
      heading: "Durability That Stands the Test of Time",
      description: "Our tints are designed to last and perform.",
    },
    {
      icon: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
      heading: "Non-Reflective Options for Enhanced Privacy",
      description: "Enjoy peace of mind with our non-reflective films.",
    },
  ],
  buttons: [
    { title: "Learn More", variant: "secondary" },
    {
      title: "Get a Quote",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
};

export default function Layout245(props) {
  const { tagline, heading, description, sections, buttons } = {
    ...Layout245Defaults,
    ...props,
  };

  return (
    <section id="relume">
      <div>
        <div className="flex flex-col items-start">
          <div className="mb-12 grid grid-cols-1 items-start justify-between gap-5 tablet:mb-18 tablet:grid-cols-2 tablet:gap-x-12 tablet:gap-y-8 laptop:mb-20 laptop:gap-x-20">
            <div>
              <p className="mb-3 font-semibold tablet:mb-4">{tagline}</p>
              <h2 className="font-bold">{heading}</h2>
            </div>
            <p>{description}</p>
          </div>

          <div className="grid grid-cols-1 items-start gap-y-12 tablet:grid-cols-3 tablet:gap-x-8 tablet:gap-y-16 laptop:gap-x-12">
            {sections.map((section, index) => (
              <div key={index}>
                <div className="mb-5 tablet:mb-6">
                  <img
                    src={section.icon}
                    className="size-10"
                    alt={section.iconAlt || ""}
                  />
                </div>
                <h3 className="mb-5 font-bold tablet:mb-6 tablet:leading-[1.3]">
                  {section.heading}
                </h3>
                <p>{section.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 mx-auto flex items-center gap-4 tablet:mt-14 laptop:mt-16">
            {buttons.map((button, index) => (
              <Button key={index} {...button}>
                {button.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
