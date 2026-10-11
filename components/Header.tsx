"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/site";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-ivory/95 backdrop-blur-md shadow-xs border-b border-line py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group transition-opacity hover:opacity-90 focus:outline-hidden focus:ring-2 focus:ring-leaf focus:ring-offset-2 rounded-lg"
            aria-label="Solarshop Home"
          >
            <div className="relative h-10 w-auto flex items-center">
              <Image
                src="/Likley_Logo.png"
                alt="Solarshop"
                width={122}
                height={40}
                priority
                className="h-10 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-8 text-sm font-medium text-ink"
            aria-label="Main Navigation"
          >
            {siteData.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-leaf text-soft hover:font-semibold focus:outline-hidden focus:ring-2 focus:ring-leaf focus:ring-offset-2 rounded-md px-1 py-0.5"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-forest text-ivory font-semibold text-sm hover:bg-leaf transition-all duration-200 shadow-xs hover:shadow-md focus:outline-hidden focus:ring-2 focus:ring-leaf focus:ring-offset-2"
            >
              Free quote
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-ink hover:bg-sagetint/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-leaf"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-6 px-4 bg-paper rounded-2xl border border-line shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3">
              {siteData.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-ink hover:text-leaf hover:bg-sagetint/40 rounded-xl transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 border-t border-line">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl bg-forest text-ivory font-semibold text-base hover:bg-leaf transition-colors text-center shadow-xs"
                >
                  Free quote
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
