// app/policies/privacy-policy/page.jsx
"use client";

import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-base text-gray-800 space-y-6">
      <h1 className="text-3xl font-bold text-primary">Privacy Policy</h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Personal Information:</strong> Name, phone number, email
            address, vehicle details, location address.
          </li>
          <li>
            <strong>Usage Data:</strong> Browser type, pages visited, time spent
            on site, IP address, and cookies.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>To schedule and confirm service appointments.</li>
          <li>
            To communicate service updates, reminders, or promotional offers
            (you may opt out at any time).
          </li>
          <li>To improve our website experience and service offerings.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          3. Sharing Your Information
        </h2>
        <p>
          We do not sell or rent your personal information. We may share data
          with trusted third-party service providers (e.g., booking systems,
          payment processors) solely to fulfill our business operations.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          4. Cookies &amp; Tracking
        </h2>
        <p>
          We use cookies and similar tracking technologies to enhance user
          experience, analyze site traffic, and collect analytics. You can
          disable cookies via your browser settings, but some site features may
          not function properly.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
        <p>
          We implement industry-standard security measures (SSL encryption,
          secure servers) to protect your data. However, no method of
          transmission over the internet is 100% secure.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal
          information. To exercise these rights, please contact us at{" "}
          <a
            href="mailto:info@getmadpro.com"
            className="underline text-primary"
          >
            info@getmadpro.com
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">7. Policy Updates</h2>
        <p>
          We may update this Privacy Policy periodically. The “Effective Date”
          at the top reflects the last revision. Continued use of our services
          indicates acceptance of any changes.
        </p>
      </section>
    </main>
  );
}
