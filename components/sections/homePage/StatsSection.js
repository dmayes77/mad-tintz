import React from "react";
import NextLink from "next/link";

export default function StatsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8">
        <div className="space-y-8">
          <h4 className="text-lime-600 uppercase tracking-wider">Trust</h4>
          <h2 className="text-gray-900">Our Customers Love Us!</h2>
        </div>
        <div className="space-y-8">
          <p>
            With over 200 five-star Google reviews, MAD Tintz is your trusted
            partner for premium window tinting. Our satisfied customers rave
            about our exceptional service and quality. Experience the difference
            that professional tinting can make for your vehicle, home, or
            business.
          </p>
          <NextLink
            href="/"
            className="flex items-center text-accent font-medium"
          >
            Read Our Reviews
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </NextLink>
        </div>
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-3 gap-6 mt-12">
        <div className="flex flex-col items-start space-y-2 text-left border-l-6 border-l-lime-600 pl-8">
          <span className="text-7xl font-semibold">250+</span>
          <p>Customer Satisfaction Guaranteed</p>
        </div>
        <div className="flex flex-col items-start space-y-2 text-left border-l-6 border-l-lime-600 pl-8">
          <span className="text-7xl font-semibold">5-Star</span>
          <p>Quality You Can Trust</p>
        </div>
        <div className="flex flex-col items-start space-y-2 text-left border-l-6 border-l-lime-600 pl-8">
          <span className="text-7xl font-bold">Expert</span>
          <p>Service You Can Count On</p>
        </div>
      </div>
    </section>
  );
}
