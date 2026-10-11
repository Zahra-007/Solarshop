import { siteData } from "@/data/site";

export function HowItWorks() {
  const { howItWorks } = siteData;

  const numberColorClasses: Record<string, string> = {
    "01": "text-leaf",
    "02": "text-gold",
    "03": "text-sky",
    "04": "text-clay",
  };

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sagetint text-forest text-xs sm:text-sm font-semibold mb-4 border border-sage/40">
            <span>{howItWorks.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight leading-tight">
            How going solar works,{" "}
            <span className="font-serif italic font-semibold text-leaf">
              step by step.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-soft mt-4 leading-relaxed">
            {howItWorks.subtitle}
          </p>
        </div>

        {/* 4 Numbered Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {howItWorks.steps.map((step) => {
            const numColorClass = numberColorClasses[step.number] || "text-forest";

            return (
              <div
                key={step.number}
                className="bg-paper rounded-3xl p-6 sm:p-8 border border-line shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
              >
                <div>
                  {/* Distinct Colored Number Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-4xl sm:text-5xl font-extrabold ${numColorClass} tracking-tight font-serif`}
                    >
                      {step.number}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${step.badgeBg} text-ink border border-line`}
                    >
                      Phase {step.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-ink mb-3 group-hover:text-forest transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-soft leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Micro progress indicator */}
                <div className="mt-8 pt-4 border-t border-line/60 flex items-center justify-between text-xs text-soft">
                  <span className="font-medium">Step {step.number} of 04</span>
                  <div className="w-12 h-1.5 rounded-full bg-line overflow-hidden">
                    <div
                      className={`h-full ${
                        step.number === "01"
                          ? "w-1/4 bg-leaf"
                          : step.number === "02"
                          ? "w-2/4 bg-gold"
                          : step.number === "03"
                          ? "w-3/4 bg-sky"
                          : "w-full bg-clay"
                      }`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
