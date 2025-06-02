"use client";

import Link from "next/link";
import clsx from "clsx";

export default function Button({
  href,
  children,
  className = "",
  variant = "primary", // 'primary' | 'secondary' | 'ghost'
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 mobile:text-sm tablet:text-base desktop:text-lg leading-snug tracking-wide  transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

  const variants = {
    primary: "bg-accent text-accent-foreground hover:bg-accent/90",
    secondary: "bg-primary text-primary-foreground hover:bg-primary/90",
    ghost: "bg-transparent hover:bg-muted text-foreground",
  };

  return (
    <Link
      href={href}
      className={clsx(baseClasses, variants[variant], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
