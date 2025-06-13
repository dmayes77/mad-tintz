"use client";

import { useState, Fragment } from "react";
import { Transition, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import CloudImage from "./CloudImage";
import NavLink from "./NavLink";
import { logo } from "@/content/businessInfo";
import { navItems } from "@/content/navigation";
import NextLink from "next/link";
import { Button } from "./Btn";
import Link from "next/link";

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
          {/* Desktop nav with dropdown for Other Services */}
          <div className="hidden laptop:flex gap-x-8">
            {navItems.map((item) =>
              item.children ? (
                <Menu as="div" className="relative" key={item.key}>
                  <Menu.Button
                    as={NavLink}
                    href={item.href}
                    className="text-accent laptop:text-accent-foreground hover:brightness-80 flex items-center"
                  >
                    {item.label}
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Menu.Items className="absolute mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden">
                      {item.children.map((sub) => (
                        <Menu.Item key={sub.key}>
                          {({ active }) => (
                            <NavLink
                              href={sub.href}
                              className={`block px-4 py-2 ${
                                active ? "bg-gray-100" : ""
                              }`}
                            >
                              {sub.label}
                            </NavLink>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              ) : (
                <NavLink
                  key={item.key}
                  href={item.href}
                  className="text-accent laptop:text-accent-foreground"
                >
                  {item.label}
                </NavLink>
              )
            )}
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
          {/* Backdrop fade */}
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

          {/* Slide-down panel under navbar */}
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
                    {navItems.map((item) => (
                      <Fragment key={item.key}>
                        <NavLink
                          href={item.href}
                          mobile
                          onClick={closeMenu}
                          className="font-semibold"
                        >
                          {item.label}
                        </NavLink>
                        {item.children &&
                          item.children.map((sub) => (
                            <NavLink
                              key={sub.key}
                              href={sub.href}
                              mobile
                              onClick={closeMenu}
                              className="ml-4"
                            >
                              {sub.label}
                            </NavLink>
                          ))}
                      </Fragment>
                    ))}
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
