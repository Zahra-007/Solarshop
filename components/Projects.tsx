import Image from "next/image";
import { siteData } from "@/data/site";
import { siteImages } from "@/data/images";

export function Projects() {
  const { projects } = siteData;

  return (
    <section id="projects" className="py-20 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-skytint text-sky text-xs sm:text-sm font-semibold mb-4 border border-sky/30">
            <span>{projects.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight leading-tight">
            Real installations.{" "}
            <span className="font-serif italic font-semibold text-leaf">
              Measurable returns.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-soft mt-4 leading-relaxed">
            {projects.subtitle}
          </p>
        </div>

        {/* 3 Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.items.map((project, idx) => {
            const img = siteImages.projects[idx];

            return (
              <div
                key={project.id}
                className="bg-paper rounded-3xl overflow-hidden border border-line shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                {/* Image */}
                <div
                  className="relative w-full h-60 sm:h-64 overflow-hidden border-b border-line"
                  style={{ backgroundColor: img.fallbackBg }}
                >
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    className="object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  {/* Category Pill */}
                  <div className="absolute top-3.5 left-3.5">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${project.badgeBg} ${project.badgeText} shadow-xs border border-line`}
                    >
                      {project.category}
                    </span>
                  </div>
                  {/* Photo Credit */}
                  <div className="absolute bottom-2.5 right-2.5 bg-paper/90 backdrop-blur-xs px-2 py-0.5 rounded-md text-[10px] text-soft border border-line">
                    Photo: {img.photographer}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Specs & Location */}
                    <div className="flex items-center justify-between text-xs text-soft mb-2 font-medium">
                      <span>{project.location}</span>
                      <span className="text-forest font-semibold">{project.specs}</span>
                    </div>

                    <h3 className="text-xl font-bold text-ink mb-3 group-hover:text-forest transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-soft leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Savings / Key Outcome Badge */}
                  <div className="pt-4 border-t border-line/60">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-forest bg-sagetint/50 px-3.5 py-2 rounded-xl border border-sage/30">
                      <svg
                        className="w-4 h-4 text-leaf shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="truncate">{project.savings}</span>
                    </div>
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
