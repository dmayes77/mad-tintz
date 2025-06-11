"use client";

import React, { useState, useEffect, useRef } from "react";

/**
 * PatternBackground
 * Wraps any children with a subtle SVG pattern background that can parallax.
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to render above the pattern
 * @param {"dots"|"stripes"|"crosshatch"|"hex"|"waves"|"triangles"} props.variant - Pattern variant
 * @param {number} props.speed - Parallax speed multiplier (0 for fixed)
 * @param {string} props.patternColor - CSS color string for the pattern (defaults to current text color)
 */
export default function PatternBackground({
  children,
  variant = "dots",
  speed = 0.5,
  patternColor = "currentColor",
}) {
  const svgRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        setOffset(window.scrollY);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const patternId = `pattern-${variant}`;

  const renderPattern = () => {
    switch (variant) {
      case "stripes":
        return (
          <pattern
            id={patternId}
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <rect width="4" height="8" fill="currentColor" />
          </pattern>
        );

      case "crosshatch":
        return (
          <pattern
            id={patternId}
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 0 L10 10 M10 0 L0 10"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        );

      case "hex":
        return (
          <pattern
            id={patternId}
            viewBox="0 0 10 10"
            width="20"
            height="17"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="5 0,10 2.5,10 7.5,5 10,0 7.5,0 2.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        );

      case "waves":
        return (
          <pattern
            id={patternId}
            width="120"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 20 Q30 0 60 20 T120 20 V40 H0 Z"
              fill="currentColor"
              opacity="0.1"
            />
          </pattern>
        );

      case "triangles":
        return (
          <pattern
            id={patternId}
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0,40 L20,0 L40,40 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        );

      case "dots":
      default:
        return (
          <pattern
            id={patternId}
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="currentColor" />
          </pattern>
        );
    }
  };

  return (
    <div className="relative overflow-hidden">
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full"
        style={{
          transform: speed > 0 ? `translateY(${offset * speed}px)` : "none",
          color: patternColor,
        }}
        aria-hidden="true"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>{renderPattern()}</defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
