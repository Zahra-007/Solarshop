import Image from "next/image";
import { siteData } from "@/data/site";
import { siteImages } from "@/data/images";
import { SavingsCalculator } from "./SavingsCalculator";

export function Hero() {
  const { hero } = siteData;

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-skytint/40 via-ivory to-goldtint/30">
      {/* Subtle organic ambient background accents */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-sagetint/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-goldtint/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sagetint/90 border border-sage/50 text-forest text-xs sm:text-sm font-semibold mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-leaf animate-pulse" />
              <span>{hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink tracking-tight leading-[1.08] mb-6">
              {hero.headlineStart}{" "}
              <span className="font-serif italic font-semibold text-leaf block sm:inline">
                {hero.headlineAccent}
              </span>
            </h1>

            {/* Lead Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-soft leading-relaxed max-w-2xl mb-8">
              {hero.lead}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-forest text-ivory font-bold text-base hover:bg-leaf transition-all duration-200 shadow-md hover:shadow-lg focus:outline-hidden focus:ring-2 focus:ring-leaf focus:ring-offset-2 text-center"
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-paper border-2 border-forest text-forest font-bold text-base hover:bg-sagetint/60 transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-forest focus:ring-offset-2 text-center"
              >
                {hero.secondaryCta.label}
              </a>
            </div>

            {/* Daylight Solar Photo Feature Preview */}
            <div className="w-full max-w-xl rounded-2xl p-3 bg-paper/90 border border-line shadow-xs flex items-center gap-4">
              <div
                className="relative w-20 h-16 sm:w-24 sm:h-16 rounded-xl overflow-hidden shrink-0 border border-line"
                style={{ backgroundColor: siteImages.hero.fallbackBg }}
              >
                <Image
                  src={siteImages.hero.url}
                  alt={siteImages.hero.alt}
                  fill
                  priority
                  sizes="(max-width: 640px) 80px, 96px"
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 text-xs text-forest font-semibold mb-0.5">
                  <span className="text-gold">★★★★★</span>
                  <span>4.9 / 5 Rating</span>
                </div>
                <p className="text-xs text-soft truncate">
                  Over 1,200 Australian homes and businesses powered with Tier-1 solar.
                </p>
                <span className="text-[10px] text-soft/70 block mt-0.5">
                  Photo: {siteImages.hero.photographer} (Unsplash)
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Savings Calculator Card */}
          <div className="lg:col-span-5 relative">
            <SavingsCalculator />
          </div>
        </div>
      </div>
    </section>
  );
}
