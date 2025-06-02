"use client";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
  className = "",
  mobile = false,
  ...props
}) {
  const path = usePathname();
  const isActive = path === href;
  const baseStyles = mobile
    ? "block mobile:text-sm tablet:text-base desktop:text-lg leading-snug tracking-wide hover:brightness-80"
    : "mobile:text-sm tablet:text-base desktop:text-lg leading-snug tracking-wide hover:brightness-80";

  return (
    <NextLink
      href={href}
      {...props}
      className={`${baseStyles} ${
        isActive ? "text-accent font-semibold" : "text-gray-800"
      } ${className}`}
    >
      {children}
    </NextLink>
  );
}
