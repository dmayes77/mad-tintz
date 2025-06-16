"use client";

import { useState, Fragment } from "react";
import { Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import CloudImage from "./CloudImage";
import NavLink from "./NavLink";
import { logo } from "@/content/businessInfo";
import NextLink from "next/link";
import Link from "next/link";
import { Button } from "./Btn";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-secondary/70 backdrop-blur-md shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-3 px-6">
        {/* Logo */}
        <NextLink href="/" className="flex items-center">
          <CloudImage
            publicId={logo.main.publicId}
            alt={logo.main.alt}
            ratio={2 / 1}
            className="w-28 tablet:w-36"
          />
        </NextLink>

        <div className="flex items-center gap-x-8">
          {/* Desktop nav: only three links */}
          <div className="hidden laptop:flex gap-x-8">
            <NavLink href="/services/automotive-window-tinting">
              Automotive Window Tint
            </NavLink>
            <NavLink href="/services">Other Services</NavLink>
            <NavLink href="/about">About</NavLink>
          </div>

          {/* Mobile toggle */}
          <button
            className="laptop:hidden p-2 text-gray-700"
            onClick={openMenu}
            aria-label="Open menu"
          >
            <Bars3Icon className="text-primary-foreground h-8 w-8" />
          </button>

          {/* Quote Button */}
          <Button
            asChild
            className="mobile:hidden fold:inline-flex uppercase"
            size="lg"
          >
            <Link href="/request-a-quote">Fast + Free Quote</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <Transition.Root show={open} as={Fragment}>
        <div className="fixed inset-0 z-[60] pointer-events-none">
          {/* Backdrop */}
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="absolute inset-0 bg-black/30 pointer-events-auto"
              onClick={closeMenu}
            />
          </Transition.Child>

          {/* Slide-down panel */}
          <div className="fixed inset-x-0">
            <Transition.Child
              as={Fragment}
              enter="transition-transform ease-out duration-500"
              enterFrom="-translate-y-full"
              enterTo="translate-y-0"
              leave="transition-transform ease-in duration-300"
              leaveFrom="translate-y-0"
              leaveTo="-translate-y-full"
            >
              <div className="w-full bg-white shadow-lg pointer-events-auto">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <CloudImage
                      publicId={logo.main.publicId}
                      alt={logo.main.alt}
                      ratio={4 / 1}
                      className="w-44 tablet:w-60"
                    />
                    <button
                      onClick={closeMenu}
                      aria-label="Close menu"
                      className="p-2 text-gray-700"
                    >
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                  </div>
                  <nav className="space-y-4">
                    <NavLink
                      href="/services/automotive-window-tinting"
                      mobile
                      onClick={closeMenu}
                    >
                      Automotive Window Tint
                    </NavLink>
                    <NavLink href="/services" mobile onClick={closeMenu}>
                      Other Services
                    </NavLink>
                    <NavLink href="/about" mobile onClick={closeMenu}>
                      About
                    </NavLink>
                  </nav>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Transition.Root>
    </header>
  );
}
