// components/homePage/FeatureSection.jsx
import React from "react";
import CloudImage from "@/components/ui/CloudImage";

const content = {
  preTitle: "Exciting New Services",
  title: "Appliance & Headlight Wrapping—Coming Soon!",
  body: "We’re expanding our offerings to include top‐quality appliance wraps that refresh your home and headlight/tail light wraps to protect and stylize your vehicle. Stay tuned for more details on how you can transform your appliances and enhance your ride!",
  list: [
    {
      label: "Appliance Wrapping:",
      text: "Upgrade your home appliances with protective, easy‐to‐clean wraps that come in a variety of finishes and patterns.",
    },
    {
      label: "Headlight & Tail Light Wrapping:",
      text: "Protect your vehicle’s lights from chips, UV damage, and yellowing—while adding a custom tint or color accent.",
    },
    {
      label: "Stay Tuned:",
      text: "We’ll be announcing launch dates, special pre‐order discounts, and exclusive packages—so don’t miss out!",
    },
  ],
  imageId: "mad-tintz/foto-images/ChatGPT_Image_Jun_4_2025_08_32_16_PM_rkvxf8",
  imageAlt: "Appliance & Headlight Wrap Preview",
  imageRatio: 4 / 3,
};

export default function FeatureSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary to-[#F0FDF4] py-16">
      {/* Decorative SVG shape behind everything (optional) */}
      <div className="hidden laptop:block absolute inset-y-0 left-0 w-1/2">
        <svg
          className="h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 600 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M600,0 L400,800 L0,800 L0,0 Z"
            fill="#F0FDF4" /* adjust to a very light green/gray if you want */
          />
        </svg>
      </div>

      <div className="relative z-10">
        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-6 items-center">
          {/* == LEFT COLUMN: Text + Icon List == */}
          <div className="space-y-8">
            <h4 className="text-accent uppercase tracking-wider">
              {content.preTitle}
            </h4>
            <h2 className="text-gray-900">{content.title}</h2>
            <p className="text-lg text-gray-700">{content.body}</p>

            <ul className="space-y-4">
              {content.list.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center ${
                        idx === 1
                          ? "bg-accent text-accent-foreground"
                          : "bg-accent text-white"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        {idx === 0 && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                          />
                        )}
                        {idx === 1 && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                          />
                        )}
                        {idx === 2 && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                          />
                        )}
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-medium text-gray-900">
                      {item.label}
                    </span>{" "}
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* == RIGHT COLUMN: Framed Image == */}
          <div className="flex items-center justify-center">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
              <CloudImage
                publicId={content.imageId}
                alt={content.imageAlt}
                ratio={content.imageRatio}
                objectFit="cover"
                className="w-full"
              />
              {/* Optional overlay gradient at bottom */}
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
