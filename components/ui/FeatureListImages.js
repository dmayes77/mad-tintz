// components/ui/FeatureList.jsx
import React from "react";
import ServiceCard from "@/components/ui/ServiceCard";

export default function FeatureList({ title, description, cards, links }) {
  return (
    <>
      {/* Title + Description */}
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8">
        {title && (
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {title}
          </h2>
        )}
        {description && <p className="text-lg text-gray-700">{description}</p>}
      </div>

      {/* Service Cards */}
      {cards && (
        <div className="grid grid-cols-1 tablet:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <ServiceCard
              key={idx}
              imageId={card.imageId}
              imageAlt={card.imageAlt}
              title={card.title}
              body={card.body}
              href={card.href}
            />
          ))}
        </div>
      )}
    </>
  );
}
