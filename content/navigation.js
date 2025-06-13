// content/navigation.js
export const navItems = [
  {
    key: "windowTint",
    label: "Automotive Window Tint",
    href: "/services/automotive-window-tinting",
  },
  {
    key: "otherServices",
    label: "Other Services",
    href: "/services",
    children: [
      {
        key: "residential",
        label: "Residential Window Tint",
        href: "/services/residential-window-tinting",
      },
      {
        key: "commercial",
        label: "Commercial Window Tint",
        href: "/services/commercial-window-tinting",
      },
    ],
  },
  {
    key: "about",
    label: "About",
    href: "/about",
  },
];
