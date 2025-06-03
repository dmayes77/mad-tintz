"use client";
// components/TrustindexWidget.jsx
import Script from "next/script";

export default function TrustindexWidget() {
  return (
    <>
      {/* 
        1) PLACEHOLDER: 
           This <div> is where TrustIndex will insert the reviews/carousel. 
           Move this <div> into whatever spot (header, sidebar, main section) you want the widget to appear. 
        */}
      <div
        className="ti-widget"
        data-trustindex-widget="true"
        data-template-id="0166baa478274213dd16381c429"
        data-layout-id="14"
        data-layout-category="slider"
        style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}
      ></div>

      {/*
        2) LOADER: 
           Use Next.js’s <Script> component with `strategy="afterInteractive"`. 
           That ensures the script loads after React has hydrated and can “see” your placeholder <div>.
      */}
      <Script
        async
        defer
        src="https://cdn.trustindex.io/loader.js?0166baa478274213dd16381c429"
      />
    </>
  );
}
