// constants/content.js

/**
 * Core business information for Code Maze Web Design.
 * This file exports businessInfo, logo, socials, metadata, and structuredData for SEO and JSON-LD.
 */

// Business Info
export const businessInfo = {
  name: "MAD Tintz",
  tagline: "Vision Meets Function",
  description:
    "Based in Chattanooga, TN, Code Maze Web Design crafts eye‑catching, user‑friendly websites that not only look great but perform beautifully. We build on a foundation of SEO best practices—ensuring your site ranks where it matters—and round out our services with print‑design and social‑media expertise to give your brand a cohesive, multi‑channel presence.",
  phone: "(423) 497-0881",
  email: "info@getmadpro.com",
  website: "https://www.getmadpro.com",

  address: {
    street: "123 Innovation Lane",
    city: "Chattanooga",
    state: "TN",
    zip: "37402",
    latitude: 35.0456,
    longitude: -85.3097,
    country: "US",
  },

  hours: {
    monday: "09:00-18:00",
    tuesday: "09:00-18:00",
    wednesday: "09:00-18:00",
    thursday: "09:00-18:00",
    friday: "09:00-18:00",
    saturday: "Closed",
    sunday: "Closed",
  },

  socials: {
    google: { url: "https://google.com/madtintz", iconName: "FaGoogle" },
    facebook: { url: "https://facebook.com/madtintz", iconName: "FaFacebookF" },
    instagram: {
      url: "https://instagram.com/madtintz",
      iconName: "ImInstagram",
    },
    twitter: { url: "https://twitter.com/madtintz", iconName: "BsTwitterX" },
  },

  logo: {
    main: {
      publicId: "mad-tintz/logo-images/MAD-Tintz-logo",
      url: "//res.cloudinary.com/mayes-auto-detailing-llc/image/upload/v1748719762/mad-tintz/logo-images/MAD-Tintz-logo.png",
      alt: "MAD Tintz Logo",
    },

    mainWhite: {
      publicId: "pixel-n-code/logo-images/code-maze-logo-white",
      url: "https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/v1746738303/pixel-n-code/logo-images/code-maze-logo-white.png",
      alt: "Code Maze Logo (White)",
    },
    badge: {
      publicId: "pixel-n-code/logo-images/code-maze-badge",
      url: "https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/v1746738303/pixel-n-code/logo-images/code-maze-badge.png",
      alt: "Code Maze Badge",
    },
    badgeWhite: {
      publicId: "pixel-n-code/logo-images/code-maze-badge-white",
      url: "https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/v1746738303/pixel-n-code/logo-images/code-maze-badge-white.png",
      alt: "Code Maze Badge (White)",
    },
    logoOnly: {
      publicId: "pixel-n-code/logo-images/code-maze-logo-only",
      url: "https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/v1746738303/pixel-n-code/logo-images/code-maze-logo-only.png",
      alt: "Code Maze Logo Only",
    },
  },
  areaServed: [
    "Chattanooga, TN",
    "Hixson, TN",
    "East Brainerd, TN",
    "Soddy-Daisy, TN",
    "Ooltewah, TN",
    "Signal Mountain, TN",
    "Apison, TN",
    "Ringgold, GA",
  ],
  // Brand palette
  brandColors: {
    primary: "#f26739", // CTA and key UI elements
    secondary: "#4CA84C", // Supporting actions
    accent: "#F5F7C1", // Highlights and focus
    neutral: "#F5F5F5", // Background panels
    text: "#2D2D2D", // Body copy
  },

  // Additional business metadata
  businessCategory: "Web Design Agency",
  paymentMethods: ["Visa", "Mastercard", "Amex", "PayPal"],
  bookingUrl: "https://getmadpro.com/book",
  privacyPolicyUrl: "/privacy-policy",
  termsOfServiceUrl: "/terms-of-service",
  designCompany: {
    name: "Code Maze",
    url: "https://getcodemaze.com",
  },
};

function formatTime(timeStr) {
  const [hourStr, minuteStr] = timeStr.split(":");
  const hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);
  const isPM = hour >= 12;
  const hour12 = hour % 12 || 12;
  const minuteFormatted = minute !== 0 ? `:${minuteStr}` : "";
  return `${hour12}${minuteFormatted} ${isPM ? "p.m." : "a.m."}`;
}

// Create display string
function getDisplayHours(businessHours) {
  const weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday"];
  const weekend = ["saturday", "sunday"];

  const weekdayHours = businessHours["monday"];
  const allWeekdaysMatch = weekdays.every(
    (day) => businessHours[day] === weekdayHours
  );

  const [openTime, closeTime] = weekdayHours.split("-");
  const weekdayFormatted = allWeekdaysMatch
    ? `Monday – Friday: ${formatTime(openTime)} – ${formatTime(closeTime)}`
    : "Weekday hours vary";

  const weekendClosed = weekend.every(
    (day) => businessHours[day].toLowerCase() === "closed"
  );

  const weekendFormatted = weekendClosed
    ? "Saturday + Sunday: Closed"
    : weekend
        .map((day) => {
          const hours = businessHours[day];
          return hours.toLowerCase() === "closed"
            ? `${capitalize(day)}: Closed`
            : `${capitalize(day)}: ${hours
                .split("-")
                .map(formatTime)
                .join(" – ")}`;
        })
        .join("\n");

  return [weekdayFormatted, weekendFormatted].filter(Boolean).join("\n");
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Convenience exports
export const logo = businessInfo.logo;
export const socials = businessInfo.socials;
export const hoursOfOperation = getDisplayHours(businessInfo.hours);

// Next.js Metadata API config
export const metadata = {
  title: `TN Website Design | SEO Services in ${businessInfo.address.state} | ${businessInfo.name}`,
  description: businessInfo.description,
  openGraph: {
    title: businessInfo.name,
    description: businessInfo.description,
    url: businessInfo.website,
    siteName: businessInfo.name,
    images: [
      {
        url: businessInfo.logo.main.url,
        alt: businessInfo.logo.main.alt,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: businessInfo.name,
    description: businessInfo.description,
    images: [businessInfo.logo.main.url],
  },
};

// JSON-LD structured data for SEO
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: businessInfo.name,
  description: businessInfo.description,
  url: businessInfo.website,
  logo: businessInfo.logo.logoOnly.url,
  image: businessInfo.logo.main.url,
  telephone: businessInfo.phone,
  email: businessInfo.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: businessInfo.address.street,
    addressLocality: businessInfo.address.city,
    addressRegion: businessInfo.address.state,
    postalCode: businessInfo.address.zip,
    addressCountry: businessInfo.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: businessInfo.address.latitude,
    longitude: businessInfo.address.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Monday",
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Tuesday",
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  sameAs: Object.values(businessInfo.socials).map((s) => s.url),
  priceRange: "$$$",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: businessInfo.phone,
    contactType: "customer support",
  },
  areaServed: businessInfo.areaServed,
};
