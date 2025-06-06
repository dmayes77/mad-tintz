// components/ui/ContactCard.jsx
import React from "react";
import NextLink from "next/link";

export default function ContactCard({
  icon,
  title,
  description,
  linkText,
  linkHref,
}) {
  return (
    <div className="flex flex-col items-center gap-4 p-6 text-center">
      {icon}
      <h3 className="text-accent font-semibold tracking-wide">{title}</h3>
      <p>{description}</p>
      <NextLink href={linkHref} className="underline">
        {linkText}
      </NextLink>
    </div>
  );
}
