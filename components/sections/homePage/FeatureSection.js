// components/FeatureSection.jsx
import React from "react";

export default function FeatureSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/** ← LEFT COLUMN: color bars + single masked image **/}
        <div className="relative flex justify-center lg:justify-start">
          {/** 1) Vertical Color Bars (stacked) **/}
          <div className="absolute left-0 top-8 space-y-2">
            <div className="w-100 h-12 bg-gradient-to-b from-lime-500 to-lime-300"></div>
            <div className="w-100 h-12 bg-gradient-to-b from-lime-300 to-lime-100"></div>
            <div className="w-100 h-12 bg-gradient-to-b from-lime-200 to-lime-50"></div>
            <div className="w-100 h-12 bg-gradient-to-b from-lime-100 to-transparent"></div>
          </div>

          {/** 2) Masked Image Container **/}
          <div className="relative w-[300px] h-[400px] tablet:w-[350px] tablet:h-[450px] laptop:w-[400px] laptop:h-[500px]">
            {/*
              a) We need an SVG <mask> with id="two-rect-mask"
                 to define two rectangular “holes” where the image can show.
              b) The SVG itself is width="0" height="0" because we just need
                 the <mask> definition to be available in the DOM.
            */}
            <svg width="0" height="0">
              <mask
                id="two-rect-mask"
                maskUnits="objectBoundingBox"
                maskContentUnits="objectBoundingBox"
              >
                {/** Hide everything by default (black covers 0→1 in both axes) **/}
                <rect x="0" y="0" width="1" height="1" fill="black" />

                {/** 
                  First “window” (white rectangle at 0.1→0.4 vertically):
                  - x="0.1" → 10% from left
                  - y="0.1" → 10% from top
                  - width="0.8" → 80% of total width
                  - height="0.3" → 30% of total height 
                **/}
                <rect x="0.0" y="0.0" width="0.47" height="0.9" fill="white" />

                {/**
                  Second “window” (white rectangle at 0.6→0.9 vertically):
                  - x="0.1" → 10% from left
                  - y="0.6" → 60% from top
                  - width="0.8" → 80% of total width
                  - height="0.3" → 30% of total height
                **/}
                <rect x="0.5" y="0.1" width="0.475" height="0.9" fill="white" />
              </mask>
            </svg>

            {/*
              c) The <img> is absolutely positioned to fill the parent.
                 We then apply the SVG mask via inline style "mask" (and -webkit-mask).
              d) Wherever the mask is WHITE, the <img> is visible; where it's black, it's hidden.
            */}
            <img
              src="https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/v1749083605/mad-tintz/foto-images/ChatGPT_Image_Jun_4_2025_08_32_16_PM_rkvxf8.png"
              alt="Window tint installation"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
              style={{
                mask: "url(#two-rect-mask)",
                WebkitMask: "url(#two-rect-mask)",
              }}
            />
          </div>
        </div>

        {/** ← RIGHT COLUMN: Text Content **/}
        <div className="flex flex-col justify-center space-y-4 lg:pl-8">
          <h4 className="text-sm font-medium uppercase text-lime-600 tracking-wide">
            Introducing
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Extreme Tint
          </h2>
          <h3 className="text-lg font-semibold text-lime-600">
            Residential Window Tinting In Manteca, California
          </h3>
          <p className="mt-2 text-gray-700 leading-relaxed">
            Extreme Tint uses a computer cutting system that cuts window tint
            patterns to your vehicle’s exact specifications, providing you the
            best tint service every time. You can guarantee no cutting tint over
            your vehicle, which means no risk of damage to the glass and rubber
            seals. You can count on us to help you with whatever you may need.
          </p>
        </div>
      </div>
    </section>
  );
}
