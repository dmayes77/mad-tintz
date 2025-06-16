// content/navigation.js
const links = {
  pages: {
    automotive: {
      key: "windowTint",
      label: "Automotive Window Tint",
      href: "/services/automotive-window-tinting",
    },
    otherServices: {
      key: "otherServices",
      label: "Other Services",
      href: "/services",
    },
    residential: {
      key: "residential",
      label: "Residential Window Tint",
      href: "/services/residential-window-tinting",
    },
    commercial: {
      key: "commercial",
      label: "Commercial Window Tint",
      href: "/services/commercial-window-tinting",
    },
    about: {
      key: "about",
      label: "About",
      href: "/about",
    },
    booking: {
      key: "booking",
      label: "Book Now",
      href: "/request-a-quote",
    },
  },
  policies: {
    privacyPolicy: {
      key: "privacyPolicy",
      label: "Privacy Policy",
      href: "/policies/privacy-policy",
    },
    termsConditions: {
      key: "termsCondition",
      label: "Terms & Conditions",
      href: "/policies/terms-and-conditions",
    },
    mobileServicePolicy: {
      key: "mobileServicePolicy",
      label: "Mobile Service Policy",
      href: "/policies/mobile-service-policy",
    },
  },
};

export const policyLinks = links.policies;
export const pageLinks = links.pages; 

export const navItems = [
  {
    ...pageLinks.automotive,
  },
  {
    ...pageLinks.otherServices,
    children: [{ ...links.residential }, { ...pageLinks.commercial }],
  },
  {
    ...pageLinks.about,
  },
];
