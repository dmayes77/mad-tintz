"use client";

import NavLink from "@/components/ui/NavLink";
import NextLink from "next/link";
import CloudImage from "@/components/ui/CloudImage";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaLinkedin,
} from "react-icons/fa";
import {
  HiPhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiGlobeAlt,
} from "react-icons/hi";
import {
  businessInfo as business,
  hoursOfOperation as formattedHours,
} from "@/content/businessInfo";
import { navItems } from "@/content/navigation";

export default function Footer() {
  const {
    logo,
    tagline,
    phone,
    email,
    website,
    address,
    socials,
    name,
    designCompany,
    areaServed,
  } = business;

  return (
    <footer className="bg-secondary text-secondary-foreground py-6 w-full">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 desktop:grid-cols-4 gap-x-8 gap-y-12">
        {/* 1) Logo / Tagline / Socials */}
        <div>
          <div className="flex flex-col items-center laptop:items-start text-center laptop:text-left space-y-4">
            <CloudImage
              publicId={logo.main.publicId}
              alt={logo.main.alt}
              ratio={1} // 3:1 aspect
              className="w-48"
            />
            <p className="text-sm text-primary-foreground">{tagline}</p>
            <div className="flex space-x-4">
              {socials.facebook && (
                <NavLink
                  href={socials.facebook}
                  aria-label="Facebook"
                  className="text-white hover:text-primary"
                >
                  <FaFacebook className="w-6 h-6" />
                </NavLink>
              )}
              {socials.instagram && (
                <NavLink
                  href={socials.instagram}
                  aria-label="Instagram"
                  className="text-white hover:text-primary"
                >
                  <FaInstagram className="w-6 h-6" />
                </NavLink>
              )}
              {socials.twitter && (
                <NavLink
                  href={socials.twitter}
                  aria-label="Twitter"
                  className="text-white hover:text-primary"
                >
                  <FaTwitter className="w-6 h-6" />
                </NavLink>
              )}
              {socials.youtube && (
                <NavLink
                  href={socials.youtube}
                  aria-label="YouTube"
                  className="text-white hover:text-primary"
                >
                  <FaYoutube className="w-6 h-6" />
                </NavLink>
              )}
              {socials.tiktok && (
                <NavLink
                  href={socials.tiktok}
                  aria-label="TikTok"
                  className="text-white hover:text-primary"
                >
                  <FaTiktok className="w-6 h-6" />
                </NavLink>
              )}
              {socials.linkedin && (
                <NavLink
                  href={socials.linkedin}
                  aria-label="LinkedIn"
                  className="text-white hover:text-primary"
                >
                  <FaLinkedin className="w-6 h-6" />
                </NavLink>
              )}
            </div>
          </div>
        </div>

        {/* 2) Quick Links */}
        <div>
          <p className="mb-4 h5  text-accent text-center laptop:text-left">
            Quick Links
          </p>
          <ul className="space-y-2 text-center laptop:text-left">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <NavLink
                  href={href}
                  className="text-white text-sm! hover:text-accent"
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                href="/policies/privacy-policy"
                className="text-white text-sm! hover:text-accent"
              >
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/policies/terms-and-conditions"
                className="text-white text-sm! hover:text-accent"
              >
                Terms &amp; Conditions
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/policies/mobile-service-policy"
                className="text-white text-sm! hover:text-accent"
              >
                Mobile Service Policy
              </NavLink>
            </li>
          </ul>
        </div>

        {/* 3) Contact Info */}
        <div>
          <p className="mb-4 h5  text-accent text-center laptop:text-left">
            Contact
          </p>
          <ul className="space-y-3 text-sm text-center laptop:text-left">
            <li className="flex items-center justify-center laptop:justify-start">
              <HiPhone className="w-5 h-5 text-accent mr-2" />
              <a
                href={`tel:${phone.replace(/[^0-9]/g, "")}`}
                className="hover:underline"
              >
                {phone}
              </a>
            </li>
            <li className="flex items-center justify-center laptop:justify-start">
              <HiOutlineMail className="w-5 h-5 text-accent mr-2" />
              <a href={`mailto:${email}`} className="hover:underline">
                {email}
              </a>
            </li>
            <li className="flex items-start justify-center laptop:justify-start">
              <HiOutlineLocationMarker className="w-5 h-5 text-accent mr-2" />
              <address className="not-italic">
                {address.city}, {address.state}
              </address>
            </li>
            <li className="flex items-center justify-center laptop:justify-start">
              <HiGlobeAlt className="w-5 h-5 text-accent mr-2" />
              <a
                href={website}
                target="_blank"
                rel="noopener"
                className="hover:underline"
              >
                {website.replace(/^https?:\/\//, "")}
              </a>
            </li>
            {formattedHours.split("\n").map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </div>

        {/* 4) Hours of Operation */}
        <div>
          <p className="mb-4 h5  text-accent text-center fold:text-left">
            Service Areas
          </p>
          <ul className="space-y-1 text-sm text-center fold:text-left">
            {areaServed.map((area, idx) => (
              <li key={idx}>{area}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} {name}. All rights reserved.
        <br />
        Designed by{" "}
        <NextLink
          href={designCompany.url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          {designCompany.name}
        </NextLink>
      </div>
    </footer>
  );
}
