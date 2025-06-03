"use client";
import { useState } from "react";

export default function FlatGlassQuoteCalculator() {
  const [filmName, setFilmName] = useState("");
  const [rollCost, setRollCost] = useState("");
  const [rollWidthInches, setRollWidthInches] = useState("");
  const [rollLengthFt, setRollLengthFt] = useState("");
  const [totalSqFt, setTotalSqFt] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const rollCostNum = parseFloat(rollCost);
    const rollWidthInchesNum = parseFloat(rollWidthInches);
    const rollLengthFtNum = parseFloat(rollLengthFt);
    const totalSqFtNum = parseFloat(totalSqFt);

    if (
      isNaN(rollCostNum) ||
      isNaN(rollWidthInchesNum) ||
      isNaN(rollLengthFtNum) ||
      isNaN(totalSqFtNum)
    )
      return;

    const rollWidthFt = rollWidthInchesNum / 12;
    const rollSqFt = rollWidthFt * rollLengthFtNum;

    const adjustedSqFt = Math.ceil(totalSqFtNum / 0.85);
    const materialCost = adjustedSqFt * (rollCostNum / rollSqFt);

    const hoursPerSqFt = 6 / 180;
    const estimatedHoursRaw = adjustedSqFt * hoursPerSqFt;
    const estimatedHours = Math.ceil(estimatedHoursRaw);

    const shopRate = 75; // used for client-facing total
    const laborRate = 25; // used internally for cost

    const laborCost = estimatedHours * laborRate;
    const shopCost = estimatedHours * shopRate;

    const totalCost = shopCost + materialCost;
    const retailPrice = totalCost / 0.5325;
    const pricePerSqFt = retailPrice / adjustedSqFt;

    const profit = retailPrice - (materialCost + laborCost);
    const profitPercent = (profit / retailPrice) * 100;

    setResult({
      adjustedSqFt,
      estimatedHours,
      retailPrice: retailPrice.toFixed(2),
      pricePerSqFt: pricePerSqFt.toFixed(2),
      materialCost: materialCost.toFixed(2),
      laborCost: laborCost.toFixed(2),
      profit: profit.toFixed(2),
      profitPercent: profitPercent.toFixed(2),
    });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-xl space-y-4">
      <h1 className="text-2xl font-bold text-center">
        Flat Glass Quote Calculator
      </h1>

      <div>
        <label className="block font-medium">Film Name</label>
        <input
          type="text"
          value={filmName}
          onChange={(e) => setFilmName(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div>
        <label className="block font-medium">Cost per Roll ($)</label>
        <input
          type="number"
          value={rollCost}
          onChange={(e) => setRollCost(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">Roll Width (inches)</label>
          <input
            type="number"
            value={rollWidthInches}
            onChange={(e) => setRollWidthInches(e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block font-medium">Roll Length (ft)</label>
          <input
            type="number"
            value={rollLengthFt}
            onChange={(e) => setRollLengthFt(e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
        </div>
      </div>

      <div>
        <label className="block font-medium">Project Size (sq ft)</label>
        <input
          type="number"
          value={totalSqFt}
          onChange={(e) => setTotalSqFt(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <button
        onClick={handleCalculate}
        className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
      >
        Calculate Quote
      </button>

      {result && (
        <div className="mt-6 space-y-2">
          <h2 className="text-xl font-semibold">Quote for {filmName}</h2>
          <p>
            <strong>Adjusted Square Footage:</strong> {result.adjustedSqFt} sq
            ft
          </p>
          <p>
            <strong>Estimated Time to Complete (Man Hours):</strong>{" "}
            {result.estimatedHours} hours{" "}
            <span className="text-gray-600">
              ({Math.round(result.estimatedHours / 4)} installers)
            </span>
          </p>
          <p className="text-xl font-bold text-green-600">
            Final Total: ${result.retailPrice}
          </p>
          <p>
            <strong>Price per Sq Ft:</strong> ${result.pricePerSqFt}
          </p>

          <details className="mt-4 bg-gray-100 p-4 rounded-lg">
            <summary className="cursor-pointer font-semibold text-blue-600">
              Show Cost Breakdown
            </summary>
            <div className="mt-2 space-y-2">
              <p>
                <strong>Material Cost:</strong> ${result.materialCost}
              </p>
              <p>
                <strong>Labor Cost (@ $25/hr):</strong> ${result.laborCost}
              </p>
              <p>
                <strong>Profit (Total Cost - [Material + Labor]):</strong> $
                {result.profit}
              </p>
              <p>
                <strong>Profit Percentage:</strong> {result.profitPercent}%
              </p>
            </div>
          </details>
        </div>
      )}
    </div>
  );
}
