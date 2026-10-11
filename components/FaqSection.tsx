"use client";

import { useState } from "react";
import { siteData } from "@/data/site";

export function FaqSection() {
  const { faq } = siteData;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-ivory">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sagetint text-forest text-xs sm:text-sm font-semibold mb-4 border border-sage/40">
            <span>{faq.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight leading-tight">
            Frequently asked{" "}
            <span className="font-serif italic font-semibold text-leaf">
              questions.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-soft mt-4 leading-relaxed max-w-2xl mx-auto">
            {faq.subtitle}
          </p>
        </div>

        {/* Accessible Accordion (4 questions) */}
        <div className="space-y-4">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-btn-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={item.question}
                className="bg-paper rounded-2xl border border-line shadow-xs overflow-hidden transition-all duration-200"
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-ink hover:text-forest transition-colors focus:outline-hidden focus:ring-2 focus:ring-leaf focus:ring-offset-2 rounded-2xl"
                  >
                    <span>{item.question}</span>
                    <span
                      className={`w-8 h-8 rounded-full bg-ivory border border-line flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-sagetint border-sage" : ""
                      }`}
                    >
                      <svg
                        className="w-4 h-4 text-ink"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base text-soft leading-relaxed border-t border-line/40 pt-4"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center bg-sagetint/40 rounded-2xl p-6 border border-sage/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-ink">Have a specific question about your roof?</h4>
            <p className="text-xs sm:text-sm text-soft">Our solar specialists are available Monday to Friday.</p>
          </div>
          <a
            href="tel:+61883457200"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-forest text-ivory font-bold text-sm hover:bg-leaf transition-colors shrink-0 shadow-xs"
          >
            <span>Call (08) 8345 7200</span>
          </a>
        </div>
      </div>
    </section>
  );
}
