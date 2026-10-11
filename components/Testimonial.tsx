import Image from "next/image";
import { siteData } from "@/data/site";
import { siteImages } from "@/data/images";

export function Testimonial() {
  const { testimonial } = siteData;
  const wideImg = siteImages.testimonialWide;

  return (
    <section className="py-20 md:py-32 bg-goldtint relative overflow-hidden">
      {/* Soft daylight organic shapes */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-paper/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Fraunces Italic Quote */}
          <div className="lg:col-span-7">
            <div className="w-12 h-12 rounded-2xl bg-paper flex items-center justify-center text-gold mb-8 shadow-xs border border-line">
              <span className="font-serif text-3xl font-bold leading-none text-gold">“</span>
            </div>

            <blockquote className="font-serif italic font-semibold text-2xl sm:text-3xl lg:text-4xl text-ink leading-snug tracking-tight mb-8">
              {testimonial.quote}
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-6 border-t border-earth/15">
              <div>
                <div className="text-lg font-bold text-ink">
                  {testimonial.author}
                </div>
                <div className="text-sm text-soft">
                  {testimonial.role}
                </div>
              </div>
              <div className="sm:ml-auto">
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-paper text-forest text-xs font-bold border border-line shadow-2xs">
                  {testimonial.highlight}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Wide Daylight Solar Photo Accent */}
          <div className="lg:col-span-5">
            <div
              className="relative w-full h-72 sm:h-80 lg:h-96 rounded-3xl overflow-hidden border border-line shadow-lg"
              style={{ backgroundColor: wideImg.fallbackBg }}
            >
              <Image
                src={wideImg.url}
                alt={wideImg.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                loading="lazy"
                className="object-cover"
              />
              <div className="absolute bottom-3 right-3 bg-paper/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] text-soft border border-line">
                Photo: {wideImg.photographer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
