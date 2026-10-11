"use client";

import { useState } from "react";
import { siteData } from "@/data/site";

export function SavingsCalculator() {
  const { calculator } = siteData;
  const [monthlyBill, setMonthlyBill] = useState<number>(calculator.defaultBill);

  const yearlySavings = Math.round(monthlyBill * 12 * calculator.savingsFactor);
  const monthlySavings = Math.round(monthlyBill * calculator.savingsFactor);
  const paybackYears = (calculator.assumedCost / yearlySavings).toFixed(1);
  const co2AvoidedTonnes = ((yearlySavings * 3.1) / 1000).toFixed(1);
  const lifetimeSavings = Math.round(yearlySavings * 25);

  return (
    <div
      id="calculator"
      className="bg-paper rounded-3xl p-6 sm:p-8 border border-line shadow-xl shadow-leaf/5 transition-all duration-300 relative overflow-hidden"
    >
      {/* Decorative subtle ambient tint */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-goldtint/40 rounded-full blur-2xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-sagetint/50 rounded-full blur-2xl -z-10 pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-goldtint text-clay border border-gold/30">
            Interactive Tool
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-ink mt-2">
            {calculator.title}
          </h3>
        </div>
        <div className="w-10 h-10 rounded-xl bg-goldtint flex items-center justify-center text-gold">
          <svg
            className="w-5 h-5 text-earth"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-soft mb-6 leading-relaxed">
        {calculator.subtitle}
      </p>

      {/* Bill Selector Slider */}
      <div className="bg-ivory/80 rounded-2xl p-4 sm:p-5 border border-line mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs sm:text-sm font-medium text-soft">
            Current Average Monthly Bill:
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold text-forest">
            ${monthlyBill}
            <span className="text-xs font-normal text-soft ml-1">/mo</span>
          </span>
        </div>

        <input
          type="range"
          min={calculator.minBill}
          max={calculator.maxBill}
          step={calculator.step}
          value={monthlyBill}
          onChange={(e) => setMonthlyBill(Number(e.target.value))}
          className="w-full h-2 bg-line rounded-lg appearance-none cursor-pointer accent-gold"
          aria-label="Current average monthly power bill slider"
        />

        <div className="flex justify-between text-[11px] text-soft font-medium mt-2">
          <span>${calculator.minBill}/mo</span>
          <span>${calculator.defaultBill}/mo (Avg)</span>
          <span>${calculator.maxBill}/mo</span>
        </div>
      </div>

      {/* Key Projected Metrics Grid */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
        {/* Estimated Yearly Savings */}
        <div className="bg-sagetint/70 rounded-2xl p-4 border border-sage/40 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-forest text-xs font-semibold mb-1">
            <span className="w-2 h-2 rounded-full bg-leaf inline-block" />
            Yearly Savings
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-forest">
            ${yearlySavings.toLocaleString()}
          </div>
          <div className="text-[11px] text-soft mt-1">
            ~${monthlySavings}/mo off your bills
          </div>
        </div>

        {/* Estimated Payback Period */}
        <div className="bg-goldtint/70 rounded-2xl p-4 border border-gold/40 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-earth text-xs font-semibold mb-1">
            <span className="w-2 h-2 rounded-full bg-gold inline-block" />
            Estimated Payback
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-earth">
            {paybackYears}
            <span className="text-sm font-semibold ml-1">years</span>
          </div>
          <div className="text-[11px] text-soft mt-1">
            Based on $14k turnkey install
          </div>
        </div>

        {/* CO2 Avoided */}
        <div className="bg-skytint/70 rounded-2xl p-4 border border-sky/30 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-sky text-xs font-semibold mb-1">
            <span className="w-2 h-2 rounded-full bg-sky inline-block" />
            CO₂ Avoided
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-ink">
            {co2AvoidedTonnes}
            <span className="text-sm font-semibold ml-1">tonnes/yr</span>
          </div>
          <div className="text-[11px] text-soft mt-1">
            Clean renewable offset
          </div>
        </div>

        {/* 25-Year Value */}
        <div className="bg-claytint/70 rounded-2xl p-4 border border-clay/30 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-clay text-xs font-semibold mb-1">
            <span className="w-2 h-2 rounded-full bg-clay inline-block" />
            25-Yr Projected Net
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-clay">
            ${lifetimeSavings.toLocaleString()}
          </div>
          <div className="text-[11px] text-soft mt-1">
            Over panel lifespan
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <a
        href="#contact"
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-forest text-ivory font-bold text-sm sm:text-base hover:bg-leaf transition-all duration-200 shadow-md hover:shadow-lg focus:outline-hidden focus:ring-2 focus:ring-leaf focus:ring-offset-2 text-center"
      >
        <span>Lock In These Savings</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>

      {/* Clarifying Disclaimer */}
      <p className="text-[11px] text-soft/80 mt-4 leading-normal italic text-center">
        {calculator.disclaimer}
      </p>
    </div>
  );
}
