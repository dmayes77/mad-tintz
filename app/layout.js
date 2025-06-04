import Footer from "@/components/ui/Footer";
import NavBar from "@/components/ui/NavBar";
import {
  businessInfo as business,
  logo,
  structuredData,
  metadata,
} from "@/content/businessInfo";
import { navItems } from "@/content/navigation";
import "@/styles/globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // optional: adjust weights as needed
  display: "swap",
});

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href={logo.logoOnly.url} />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={logo.logoOnly.url}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={logo.logoOnly.url}
        />
        <link rel="canonical" href={business.website}></link>
        {/* JSON‑LD structured data */}
        <script
          key="ldjson"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={roboto.className}>
        <NavBar />
        <main>{children}</main>
        <Footer content={{ navItems, business }} />
      </body>
    </html>
  );
}
