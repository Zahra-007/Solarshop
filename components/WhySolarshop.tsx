import { siteData } from "@/data/site";

export function WhySolarshop() {
  const { whySolarshop } = siteData;

  return (
    <section
      id="why-solarshop"
      className="relative py-20 md:py-32 bg-forest text-ivory overflow-hidden"
    >
      {/* Gold Sun Circle Accent in the Corner */}
      <div className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 w-80 h-80 sm:w-96 sm:h-96 pointer-events-none select-none">
        {/* Outermost solar halo */}
        <div className="absolute inset-0 rounded-full bg-gold/10 blur-xl animate-pulse" />
        {/* Middle solar ring */}
        <div className="absolute inset-8 rounded-full border border-gold/30" />
        {/* Inner solar circle */}
        <div className="absolute inset-16 rounded-full bg-gold/20 backdrop-blur-xs flex items-center justify-center border border-gold/40">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-gold to-leaf/80 shadow-lg shadow-gold/20" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-leaf/40 border border-sage/30 text-gold text-xs sm:text-sm font-semibold mb-4">
            <span>{whySolarshop.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ivory tracking-tight leading-tight">
            Built on trust,{" "}
            <span className="font-serif italic font-semibold text-gold">
              verified by performance.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-sagetint/90 mt-4 leading-relaxed">
            {whySolarshop.lead}
          </p>
        </div>

        {/* 3 Stats with Different Coloured Top Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 md:mb-20">
          {whySolarshop.stats.map((stat) => (
            <div
              key={stat.label}
              className={`bg-leaf/20 backdrop-blur-xs rounded-3xl p-8 border border-sage/20 ${stat.borderColorClass} border-t-4 transition-all duration-300 hover:bg-leaf/30`}
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-ivory tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-base font-bold text-goldtint mb-2">
                {stat.label}
              </div>
              <p className="text-xs sm:text-sm text-sagetint/80 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* 4 Pillars of Integrity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {whySolarshop.points.map((point, index) => (
            <div
              key={point.title}
              className="bg-leaf/10 rounded-2xl p-6 border border-sage/15"
            >
              <div className="w-8 h-8 rounded-xl bg-gold/20 text-gold flex items-center justify-center font-bold text-xs mb-4">
                0{index + 1}
              </div>
              <h3 className="text-lg font-bold text-ivory mb-2">
                {point.title}
              </h3>
              <p className="text-xs sm:text-sm text-sagetint/80 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
