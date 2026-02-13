"use client";

import { useState, FormEvent } from "react";

interface LeadFormProps {
  variant?: "sidebar" | "full" | "inline";
  heading?: string;
  ctaLabel?: string;
  defaultIntent?: "buying" | "selling" | "both";
}

export default function LeadForm({
  variant = "sidebar",
  heading = "Get Started",
  ctaLabel = "Create My Family Home Plan",
  defaultIntent,
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    intent: defaultIntent || "",
    timeline: "",
    budget: "",
    area: "",
    city: "",
    babyStatus: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
    consent: false,
    honeypot: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // spam

    if (!formData.consent) return; // consent required

    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const update = (field: string, value: string | boolean) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  if (status === "success") {
    return (
      <div className={variant === "sidebar" ? "card" : "bg-white rounded-card p-8 md:p-12 text-center"}>
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-serif text-primary">Thank You!</h3>
          <p className="text-body-secondary text-sm max-w-md">
            We received your Family Home Plan request. We&apos;ll review your details and reach out shortly
            with next steps. If your situation is time-sensitive, reply to our email with &quot;URGENT&quot;.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={variant === "sidebar" ? "card" : "bg-white rounded-card p-8 md:p-12"}>
      <div className="flex items-center gap-3 mb-6">
        <svg className="w-8 h-8 text-clay" viewBox="0 0 40 40" fill="none">
          <path
            d="M20 4L3 18h5v16h10v-10h4v10h10V18h5L20 4z"
            fill="currentColor"
            opacity="0.2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
        <h3 className="text-xl md:text-2xl font-bold font-sans text-body">{heading}</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot */}
        <input
          type="text"
          name="website"
          value={formData.honeypot}
          onChange={(e) => update("honeypot", e.target.value)}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <select
          className="form-select"
          value={formData.intent}
          onChange={(e) => update("intent", e.target.value)}
          required
          aria-label="Buying, Selling, or Both?"
          name="intent"
        >
          <option value="">Buying, Selling, or Both?</option>
          <option value="buying">Buying</option>
          <option value="selling">Selling</option>
          <option value="both">Both</option>
        </select>

        <select
          className="form-select"
          value={formData.timeline}
          onChange={(e) => update("timeline", e.target.value)}
          required
          aria-label="How time-sensitive is your situation?"
          name="timeline"
        >
          <option value="">How time-sensitive is your situation?</option>
          <option value="0-45">0-45 days</option>
          <option value="2-3">2-3 months</option>
          <option value="3-6">3-6 months</option>
          <option value="6+">6+ months</option>
        </select>

        <select
          className="form-select"
          value={formData.budget}
          onChange={(e) => update("budget", e.target.value)}
          required
          aria-label="Estimated budget range"
          name="budget"
        >
          <option value="">Estimated budget range</option>
          <option value="700-900">700k-900k</option>
          <option value="900-1200">900k-1.2M</option>
          <option value="1200-1500">1.2M-1.5M</option>
          <option value="1500-2000">1.5M-2.0M</option>
          <option value="2000+">2.0M+</option>
        </select>

        <select
          className="form-select"
          value={formData.area}
          onChange={(e) => update("area", e.target.value)}
          required
          aria-label="Preferred area"
          name="area"
        >
          <option value="">Preferred area</option>
          <option value="San Diego County">San Diego County</option>
          <option value="Orange County">Orange County</option>
          <option value="Los Angeles County">Los Angeles County</option>
        </select>

        <div className="flex items-center justify-between pt-1">
          <span className="text-sm text-body-secondary">Baby on the way or recent birth?</span>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="radio"
                name="babyStatus"
                value="yes"
                checked={formData.babyStatus === "yes"}
                onChange={(e) => update("babyStatus", e.target.value)}
                className="accent-clay w-4 h-4"
              />
              <span className="text-sm text-body-secondary">Yes</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="radio"
                name="babyStatus"
                value="no"
                checked={formData.babyStatus === "no"}
                onChange={(e) => update("babyStatus", e.target.value)}
                className="accent-clay w-4 h-4"
              />
              <span className="text-sm text-body-secondary">No</span>
            </label>
          </div>
        </div>

        {variant === "full" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <input
                type="text"
                placeholder="Your Name"
                className="form-input"
                value={formData.name}
                onChange={(e) => update("name", e.target.value)}
                required
                name="name"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="form-input"
                value={formData.email}
                onChange={(e) => update("email", e.target.value)}
                required
                name="email"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone (recommended)"
                className="form-input"
                value={formData.phone}
                onChange={(e) => update("phone", e.target.value)}
                name="phone"
              />
              <input
                type="text"
                placeholder="City or Neighborhood (optional)"
                className="form-input"
                value={formData.city}
                onChange={(e) => update("city", e.target.value)}
                name="city"
              />
            </div>
            <textarea
              placeholder="Any additional details (optional)"
              className="form-input min-h-[100px] resize-none"
              value={formData.notes}
              onChange={(e) => update("notes", e.target.value)}
              name="notes"
            />
          </>
        )}

        {/* Consent checkbox */}
        <label className="flex gap-2 items-start cursor-pointer text-sm text-body-secondary">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={(e) => update("consent", e.target.checked)}
            className="accent-clay w-4 h-4 mt-0.5 flex-shrink-0"
            required
          />
          <span>I agree to be contacted about my request. See <a href="/privacy" className="text-clay underline hover:text-clay-dark">Privacy Policy</a>.</span>
        </label>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary w-full text-center disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Submitting..." : ctaLabel}
        </button>

        {status === "error" && (
          <p className="text-red-600 text-sm text-center">
            Something went wrong. Please try again or contact us directly.
          </p>
        )}
      </form>
    </div>
  );
}
