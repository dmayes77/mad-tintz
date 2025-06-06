// components/ui/FeatureCard.jsx
import React from "react";
import Link from "next/link";
import { PiCaretRightBold } from "react-icons/pi";

export default function FeatureCard({
  title,
  icon: IconComponent,
  subtitle,
  linkText,
  linkHref,
}) {
  return (
    <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-lg shadow-md">
      {IconComponent && <IconComponent className="h-15 w-15 text-lime-600" />}
      {title && (
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="text-lg font-medium text-gray-700">{subtitle}</p>
      )}

      {linkHref && linkText && (
        <Link
          href={linkHref}
          className="flex items-center gap-2 text-blue-600 hover:underline"
        >
          {linkText}
          <PiCaretRightBold />
        </Link>
      )}
    </div>
  );
}
