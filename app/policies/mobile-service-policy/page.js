// app/policies/mobile-service-policy/page.jsx
"use client";

import React from "react";

export default function MobileServicePolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-base text-gray-800 space-y-6">
      <h1 className="text-3xl font-bold text-primary">
        Mobile Service &amp; Distance Surcharge Policy
      </h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">1. Core Service Radius</h2>
        <p>
          MAD Tintz operates fully mobile and provides complimentary service
          within a <strong>10-mile radius</strong> of 37411.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">2. Distance Surcharge</h2>
        <p>
          For appointments between <strong>10 and 20 miles</strong> from our
          base location, a <strong>$2.00 per mile (one-way)</strong> distance
          surcharge applies. The surcharge is calculated based on the most
          direct driving route from 37411 and will be quoted before confirming
          your appointment.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          3. Maximum Travel Distance
        </h2>
        <p>
          We do not provide mobile services beyond a{" "}
          <strong>20-mile radius</strong> from our base location. Any requests
          outside this boundary will not be accepted.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">4. Excluded Areas</h2>
        <p>
          Due to safety and logistical concerns, we do not service the following
          ZIP codes:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>37406</strong> (Avondale area)
          </li>
          <li>
            <strong>37407</strong> (East Lake area)
          </li>
          <li>
            <strong>37410</strong> (Alton Park area)
          </li>
        </ul>
        <p>
          These exclusions are based on current safety data and operational
          efficiency. Exceptions may be made on a case-by-case basis at the
          discretion of MAD Tintz.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          5. Time &amp; Accessibility Considerations
        </h2>
        <p>
          Even if a location falls within the 20-mile radius, excessive travel
          time due to traffic, road conditions, or terrain may result in
          declined service. We prioritize the safety of our team and timely
          service delivery.
        </p>
      </section>
    </main>
  );
}
