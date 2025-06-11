import React from "react";

/**
 * DotPattern
 * Wraps any children with a subtle dot-pattern SVG background.
 * @prop {React.ReactNode} children - Content to render above the pattern
 */
export default function DotPattern({ children }) {
  return (
    <div className="relative overflow-hidden">
      {/* Inline SVG dot pattern */}
      <svg
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="pattern-dots"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" className="fill-accent/25" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pattern-dots)" />
      </svg>

      {/* Content layer */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
