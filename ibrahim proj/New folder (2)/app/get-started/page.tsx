import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Get Started — Create Your Family Home Plan",
  description:
    "Tell us about your family and we'll create a personalized home plan. Whether buying, selling, or both — we'll guide you with clarity and care.",
};

export default function GetStartedPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sage rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-clay rounded-full blur-3xl" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-4">
            Create Your Family Home Plan
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll create a personalized plan for your family.
            No obligation — just clarity about your next steps.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-offwhite">
        <div className="container-max max-w-3xl">
          <LeadForm variant="full" heading="Your Family Home Plan" />

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary text-sm mb-1 font-sans">Private & Secure</h3>
              <p className="text-body-secondary text-xs">Your information is kept confidential</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary text-sm mb-1 font-sans">Quick Response</h3>
              <p className="text-body-secondary text-xs">We respond within 24 hours</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary text-sm mb-1 font-sans">No Obligation</h3>
              <p className="text-body-secondary text-xs">Just clarity about your options</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

