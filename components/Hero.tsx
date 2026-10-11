import Image from "next/image";
import { siteData } from "@/data/site";
import { siteImages } from "@/data/images";

export function Hero() {
  const { hero } = siteData;

  return (
    <section className="relative bg-ivory overflow-hidden">

      {/* ═══════════════════════════════════════════
          DESKTOP: Full-bleed background photo
          ═══════════════════════════════════════════ */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src={siteImages.hero.url}
          alt={siteImages.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Ivory gradient overlay — left side reads clearly, right side shows photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(251,247,234,0.97) 0%, rgba(251,247,234,0.95) 28%, rgba(251,247,234,0.70) 48%, rgba(251,247,234,0.10) 62%, rgba(251,247,234,0) 70%)",
          }}
        />
      </div>

      {/* ═══════════════════════════════════════════
          MOBILE: Photo banner above the text
          ═══════════════════════════════════════════ */}
      <div className="md:hidden relative h-64 mx-4 mt-20 rounded-3xl overflow-hidden shadow-md">
        <Image
          src={siteImages.hero.url}
          alt={siteImages.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* ═══════════════════════════════════════════
          CONTENT — Left column on desktop
          ═══════════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col justify-center min-h-0 md:min-h-screen py-10 pt-8 md:pt-0 md:py-0">

          {/* Text block — capped at ~xl on desktop so it stays on the left */}
          <div className="w-full max-w-xl md:pt-28 md:pb-24">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sagetint/90 border border-sage/50 text-forest text-xs sm:text-sm font-semibold mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-leaf animate-pulse" />
              <span>{hero.badge}</span>
            </div>

            {/* H1 — larger than before */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-ink tracking-tight leading-[1.04] mb-6">
              {hero.headlineStart}{" "}
              <span className="font-serif italic font-semibold text-leaf">
                {hero.headlineAccent}
              </span>
            </h1>

            {/* Lead */}
            <p className="text-base sm:text-lg lg:text-xl text-soft leading-relaxed max-w-lg mb-8">
              {hero.lead}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-forest text-ivory font-bold text-base hover:bg-leaf transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-leaf focus:ring-offset-2 text-center"
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-paper/80 border-2 border-forest text-forest font-bold text-base hover:bg-sagetint/60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 text-center"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          Floating consultation card — bottom-right (desktop only)
          ═══════════════════════════════════════════ */}
      <div className="hidden md:block absolute bottom-10 right-10 lg:right-16 z-20">
        <div
          className="rounded-3xl p-5 border border-line/60 shadow-xl max-w-xs"
          style={{
            background: "rgba(251,247,234,0.85)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          <p className="text-sm font-bold text-ink mb-1">Not sure where to start?</p>
          <p className="text-xs text-soft leading-snug mb-3">
            Talk to a solar expert — no obligation, no pressure.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-forest text-ivory text-xs font-bold hover:bg-leaf transition-colors"
          >
            Request a free consultation
          </a>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          Consultation card — mobile (below CTAs)
          ═══════════════════════════════════════════ */}
      <div className="md:hidden px-4 pb-12 mt-6">
        <div className="bg-paper rounded-2xl p-5 border border-line shadow-xs">
          <p className="text-sm font-bold text-ink mb-1">Not sure where to start?</p>
          <p className="text-xs text-soft leading-snug mb-3">
            Talk to a solar expert — no obligation, no pressure.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-forest text-ivory text-xs font-bold hover:bg-leaf transition-colors"
          >
            Request a free consultation
          </a>
        </div>
      </div>

    </section>
  );
}
