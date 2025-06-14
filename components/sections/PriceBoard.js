import React from "react";

export default function PriceBoard() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16 space-y-8">
      <h1 className="text-3xl font-bold mb-6">
        Automotive Window Tint Pricing
      </h1>
      {/* Size-Dependent Services */}
      <h2 className="text-2xl font-semibold mb-4">Size-Dependent Services</h2>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full table-auto border-collapse text-center">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Service Option</th>
              <th className="px-4 py-2">
                Small (3 pcs)
                <br />
                Carbon / Ceramic
              </th>
              <th className="px-4 py-2">
                Medium (5 pcs)
                <br />
                Carbon / Ceramic
              </th>
              <th className="px-4 py-2">
                Large (7 pcs)
                <br />
                Carbon / Ceramic
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-2 text-left font-medium">
                Ultimate Install
                <br />
                (Windshield + Sides + Back + Glass Coating)
              </td>
              <td className="px-4 py-2">$579 / $679</td>
              <td className="px-4 py-2">$619 / $739</td>
              <td className="px-4 py-2">$659 / $799</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-left font-medium">
                Complete Install
                <br />
                (Windshield + Sides + Back)
              </td>
              <td className="px-4 py-2">$429 / $529</td>
              <td className="px-4 py-2">$469 / $589</td>
              <td className="px-4 py-2">$509 / $649</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-left font-medium">
                Full Install
                <br />
                (Sides + Back)
              </td>
              <td className="px-4 py-2">$199 / $299</td>
              <td className="px-4 py-2">$239 / $359</td>
              <td className="px-4 py-2">$279 / $419</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-left font-medium">
                Glass Ceramic Coating
                <br />
                (All Glass Surfaces)
              </td>
              <td className="px-4 py-2">$149</td>
              <td className="px-4 py-2">$209</td>
              <td className="px-4 py-2">$269</td>
                      </tr>
                      
          </tbody>
              </table>
              
        <h6 className="mt-4">** More than 7 pcs call for pricing</h6>
      </div>

      {/* Flat-Rate Services */}
      <h2 className="text-2xl font-semibold mb-4">Flat-Rate Services</h2>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full table-auto border-collapse text-center">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Service Option</th>
              <th className="px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-2 text-left">One Side Window</td>
              <td className="px-4 py-2">$59 / $69</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-left">Two Front Side Windows</td>
              <td className="px-4 py-2">$109 / $129</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-left">Rear Window Install</td>
              <td className="px-4 py-2">$169 / $199</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-left">Windshield Only</td>
              <td className="px-4 py-2">$259</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-left">Windshield Strip</td>
              <td className="px-4 py-2">$99</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-left">
                Windshield-Only Ceramic Coating
              </td>
              <td className="px-4 py-2">$79</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-left">Headlight Restoration</td>
              <td className="px-4 py-2">$99</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Upcharge Guidelines */}
      <div className="text-sm text-gray-600">
        <p className="font-semibold mb-2">
          Up-Charge Guidelines for Tough Panels
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Curved Glass:</strong> +10% of base (min $25)
          </li>
          <li>
            <strong>Steep-Slant (Tight Cabin):</strong> +15% of base (min $30)
          </li>
          <li>
            <strong>Both Curved + Slanted:</strong> stack both, then round up to
            next "9"
          </li>
        </ul>
      </div>
    </section>
  );
}
