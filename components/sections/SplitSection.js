import React from "react";

/**
 * A two-column flex section with customizable left and right content.
 *
 * @param {{
 *   left: React.ReactNode;
 *   right: React.ReactNode;
 *   reverse?: boolean; // swap columns on large screens
 *   className?: string;
 * }} props
 */
export default function SplitSection({
  left,
  right,
  reverse = false,
  className = "",
}) {
  return (
    <section className={`max-w-7xl mx-auto px-4 lg:px-8 py-16 ${className}`}>
      <div
        className={`flex flex-col laptop:flex-row${
          reverse ? " laptop:flex-row-reverse" : ""
        } items-stretch gap-8`}
      >
        {/* Left column */}
        <div className="flex-1 flex flex-col space-y-8">{left}</div>
        {/* Right column */}
        <div className="flex-1 flex items-center justify-center w-full">
          {right}
        </div>
      </div>
    </section>
  );
}
