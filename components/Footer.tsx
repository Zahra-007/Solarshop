import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/site";

export function Footer() {
  const { footer, company } = siteData;

  return (
    <footer className="bg-earth text-ivory pt-16 sm:pt-20 pb-12 border-t border-earth/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12 pb-14 border-b border-ivory/15">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            {/* Logo in ivory container — needed on the dark footer background */}
            <Link
              href="/"
              className="inline-block bg-ivory rounded-2xl p-2.5 sm:p-3 shadow-md transition-opacity hover:opacity-95 mb-6"
              aria-label="Solarshop Home"
            >
              <div className="relative h-9 w-auto flex items-center">
                <Image
                  src="/logo.png"
                  alt="Solarshop"
                  width={110}
                  height={36}
                  className="h-9 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-sagetint/90 max-w-sm leading-relaxed mb-6">
              {company.shortDescription}
            </p>

            <div className="text-xs text-sagetint/70 space-y-1">
              {footer.disclaimer}
            </div>
          </div>

          {/* 3 Nav Columns + Contact Info */}
          {footer.columns.map((col) => {
            if (col.contactInfo) {
              return (
                <div key={col.title}>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-goldtint mb-4">
                    {col.title}
                  </h4>
                  <ul className="space-y-3 text-sm text-sagetint/90">
                    <li>
                      <a
                        href={company.phoneHref}
                        className="hover:text-gold transition-colors font-semibold"
                      >
                        {company.phone}
                      </a>
                    </li>
                    <li>
                      <a
                        href={company.emailHref}
                        className="hover:text-gold transition-colors"
                      >
                        {company.email}
                      </a>
                    </li>
                    <li className="text-xs text-sagetint/70 leading-relaxed">
                      {company.address}
                    </li>
                    <li className="text-xs text-gold/90 font-medium">
                      {company.hours}
                    </li>
                  </ul>
                </div>
              );
            }

            return (
              <div key={col.title}>
                <h4 className="text-sm font-bold uppercase tracking-wider text-goldtint mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2.5 text-sm text-sagetint/90">
                  {col.links?.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="hover:text-gold transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sagetint/70">
          <div>{footer.copyright}</div>
          <div className="flex items-center gap-6">
            <a href="#solutions" className="hover:text-ivory transition-colors">
              Solutions
            </a>
            <a href="#why-solarshop" className="hover:text-ivory transition-colors">
              Why Solarshop
            </a>
            <a href="#how-it-works" className="hover:text-ivory transition-colors">
              Our Process
            </a>
            <a href="#contact" className="hover:text-ivory transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
