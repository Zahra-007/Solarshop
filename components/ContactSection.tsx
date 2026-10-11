"use client";

import { useState } from "react";
import { siteData } from "@/data/site";

export function ContactSection() {
  const { contact, company } = siteData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: contact.interests[0],
    message: "",
    website: "", // Honeypot field
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      newErrors.message = "Please include a brief message or question.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setLoading(true);
    setStatus("idle");
    setFeedbackMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFeedbackMessage(
          data.message || "Thank you! Your quote request has been received. Our team will contact you shortly."
        );
        // Reset inputs
        setFormData({
          name: "",
          email: "",
          phone: "",
          interest: contact.interests[0],
          message: "",
          website: "",
        });
        setErrors({});
      } else {
        setStatus("error");
        setFeedbackMessage(data.error || "Failed to submit. Please check your information or call us directly.");
      }
    } catch {
      setStatus("error");
      setFeedbackMessage("A network error occurred. Please check your connection or give us a call.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Copy & Contact Details */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sagetint text-forest text-xs sm:text-sm font-semibold mb-4 border border-sage/40">
              <span>{contact.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight leading-tight">
              Request your free{" "}
              <span className="font-serif italic font-semibold text-leaf">
                solar consultation.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-soft mt-4 mb-8 leading-relaxed">
              {contact.subtitle}
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Phone */}
              <div className="bg-paper p-4 rounded-2xl border border-line flex items-center gap-4 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-sagetint text-forest flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-soft font-medium">Direct Line</div>
                  <a href={company.phoneHref} className="text-base font-bold text-ink hover:text-forest transition-colors">
                    {company.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="bg-paper p-4 rounded-2xl border border-line flex items-center gap-4 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-goldtint text-gold flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-earth" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-soft font-medium">Email Address</div>
                  <a href={company.emailHref} className="text-base font-bold text-ink hover:text-forest transition-colors">
                    {company.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="bg-paper p-4 rounded-2xl border border-line flex items-center gap-4 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-skytint text-sky flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-soft font-medium">Head Office</div>
                  <div className="text-sm font-bold text-ink">{company.address}</div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-sagetint/50 border border-sage/40 flex items-center gap-3 text-xs text-forest font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-leaf shrink-0" />
              <span>Response promise: Detailed proposal sent within 24 business hours.</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-paper rounded-3xl p-6 sm:p-10 border border-line shadow-md relative">
              <h3 className="text-2xl font-bold text-ink mb-2">Tell us about your home or business</h3>
              <p className="text-sm text-soft mb-8">
                Fill out the quick form below. We will never sell your information.
              </p>

              {/* Success Notification Banner */}
              {status === "success" && (
                <div className="mb-6 p-4 rounded-2xl bg-sagetint border border-sage text-forest flex items-start gap-3 animate-in fade-in duration-200">
                  <svg className="w-5 h-5 mt-0.5 shrink-0 text-leaf" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="block font-bold">Quote Request Received!</strong>
                    <span className="text-sm text-forest/90">{feedbackMessage}</span>
                  </div>
                </div>
              )}

              {/* Error Notification Banner */}
              {status === "error" && (
                <div className="mb-6 p-4 rounded-2xl bg-claytint border border-clay text-clay flex items-start gap-3 animate-in fade-in duration-200">
                  <svg className="w-5 h-5 mt-0.5 shrink-0 text-clay" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="block font-bold">Submission Notice</strong>
                    <span className="text-sm">{feedbackMessage}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Honeypot field (hidden from view and assistive tech) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Leave this field empty</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-soft mb-1.5">
                      Your Name <span className="text-clay">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-ivory border ${
                        errors.name ? "border-clay ring-1 ring-clay" : "border-line"
                      } text-ink placeholder:text-soft/60 focus:outline-hidden focus:ring-2 focus:ring-leaf transition-all`}
                    />
                    {errors.name && <p className="text-xs text-clay mt-1 font-medium">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-soft mb-1.5">
                      Email Address <span className="text-clay">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-ivory border ${
                        errors.email ? "border-clay ring-1 ring-clay" : "border-line"
                      } text-ink placeholder:text-soft/60 focus:outline-hidden focus:ring-2 focus:ring-leaf transition-all`}
                    />
                    {errors.email && <p className="text-xs text-clay mt-1 font-medium">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone & Interest Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-soft mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      placeholder="0412 345 678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-ivory border border-line text-ink placeholder:text-soft/60 focus:outline-hidden focus:ring-2 focus:ring-leaf transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-interest" className="block text-xs font-bold uppercase tracking-wider text-soft mb-1.5">
                      I&apos;m Interested In
                    </label>
                    <select
                      id="contact-interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-ivory border border-line text-ink focus:outline-hidden focus:ring-2 focus:ring-leaf transition-all cursor-pointer"
                    >
                      {contact.interests.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-soft mb-1.5">
                    Property Address or Notes <span className="text-clay">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Tell us about your property type, roof age, or current electricity bill..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-ivory border ${
                      errors.message ? "border-clay ring-1 ring-clay" : "border-line"
                    } text-ink placeholder:text-soft/60 focus:outline-hidden focus:ring-2 focus:ring-leaf transition-all`}
                  />
                  {errors.message && <p className="text-xs text-clay mt-1 font-medium">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-xl bg-forest text-ivory font-bold text-base hover:bg-leaf transition-all duration-200 shadow-md hover:shadow-lg focus:outline-hidden focus:ring-2 focus:ring-leaf focus:ring-offset-2 flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-ivory" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Sending your request...</span>
                    </>
                  ) : (
                    <span>Submit Free Quote Request</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
