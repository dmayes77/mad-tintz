// app/policies/terms-and-conditions/page.jsx
"use client";

import React from "react";

export default function TermsAndConditionsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-base text-gray-800 space-y-6">
      <h1 className="text-3xl font-bold text-primary">
        Terms &amp; Conditions
      </h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">1. Service Agreement</h2>
        <p>
          By scheduling a service with MAD Tintz, you agree to the terms
          outlined in this agreement. All services are provided at the
          discretion of MAD Tintz and subject to availability.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">2. Deposit Requirement</h2>
        <p>
          To secure your appointment, a <strong>30% deposit</strong> of the
          total estimated service cost is required at booking. This deposit
          covers the cost of materials and reserves your slot. If you cancel
          more than 24 hours before your scheduled appointment, the deposit will
          be fully refunded. Cancellations within 24 hours of the appointment
          will forfeit the deposit.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">3. Payments</h2>
        <p>
          The remaining balance is due in full upon completion of the service.
          MAD Tintz accepts cash, major credit cards, debit cards, and mobile
          payments. We do not accept checks or money orders.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">4. Cancellations</h2>
        <p>
          Cancellations must be made at least 24 hours prior to your scheduled
          appointment to receive a full refund of any deposit. Cancellations
          made within 24 hours may result in forfeiture of the deposit and a
          cancellation fee.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">5. Warranty Disclaimer</h2>
        <p>
          MAD Tintz provides services with care and professionalism. However, we
          do not guarantee protection against future damage, wear, or external
          elements unless specified under a written warranty.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">6. Liability</h2>
        <p>
          MAD Tintz is not responsible for damage to pre-existing conditions,
          hidden damage, or aftermarket modifications not disclosed prior to
          service.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          7. Photo &amp; Video Authorization
        </h2>
        <p>
          To ensure quality control and for promotional purposes, MAD Tintz
          reserves the right to take{" "}
          <strong>before and after photos or videos</strong> of the vehicle or
          property being serviced. These images may be used for documentation,
          liability protection, client communication, and marketing across
          platforms such as our website and social media. Personal information
          such as license plates or addresses will be blurred or excluded unless
          express written consent is obtained.
        </p>
        <p>
          By booking a service with MAD Tintz, you acknowledge and agree to this
          practice unless you provide written notice requesting otherwise before
          the service appointment.
        </p>
      </section>
    </main>
  );
}
