import Image from "next/image";
import { siteData } from "@/data/site";
import { siteImages } from "@/data/images";

export function Solutions() {
  const { solutions } = siteData;

  const getImageForSolution = (key: "residential" | "battery" | "commercial" | "service") => {
    return siteImages.solutions[key];
  };

  return (
    <section id="solutions" className="py-20 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sagetint text-forest text-xs sm:text-sm font-semibold mb-4 border border-sage/40">
            <span>{solutions.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight leading-tight">
            Tailored solar solutions for{" "}
            <span className="font-serif italic font-semibold text-leaf">
              every property.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-soft mt-4 leading-relaxed">
            {solutions.subtitle}
          </p>
        </div>

        {/* Bento Grid (6 Columns: 4+2, then 2+4) */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 md:gap-8">
          {solutions.items.map((item) => {
            const img = getImageForSolution(item.imageKey);
            const isWide = item.colSpanClass.includes("lg:col-span-4");

            return (
              <div
                key={item.id}
                className={`${item.colSpanClass} ${item.bgClass} rounded-3xl p-6 sm:p-8 md:p-10 border border-line flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group`}
              >
                {/* Content Top */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-paper/80 text-ink border border-line">
                      {item.tag}
                    </span>
                    <span className="text-xs text-soft font-medium">
                      0{solutions.items.indexOf(item) + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-soft leading-relaxed max-w-xl mb-6">
                    {item.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 mb-6">
                    {item.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm text-ink font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-forest shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Photo Container */}
                <div
                  className={`relative w-full rounded-2xl overflow-hidden border border-line/60 shadow-xs mt-auto ${
                    isWide ? "h-64 sm:h-72 md:h-80" : "h-56 sm:h-64"
                  }`}
                  style={{ backgroundColor: img.fallbackBg }}
                >
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    sizes={isWide ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
                    loading="lazy"
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                </div>

                {/* Action CTA link */}
                <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-forest hover:text-leaf transition-colors"
                  >
                    <span>Request proposal for {item.title}</span>
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
