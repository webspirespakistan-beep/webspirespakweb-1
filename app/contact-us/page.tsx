import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Webspires. Tell us about your project and we'll get back to you within 24 hours.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-dark pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <p className="text-brand-red font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Contact
            </p>
            <h1 className="font-heading font-extrabold text-5xl sm:text-6xl text-white leading-tight mb-6">
              Let&apos;s Talk
              <br />
              Business
            </h1>
            <p className="text-brand-gray text-lg leading-relaxed mb-12">
              Tell us about your project. We&apos;ll get back to you within 24
              hours with a clear plan of action.
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-dark-2 border border-white/5 rounded-lg flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8192C" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-brand-gray text-xs uppercase tracking-widest font-heading mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:hello@webspires.com.pk"
                    className="text-white hover:text-brand-red transition-colors duration-200"
                  >
                    hello@webspires.com.pk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-dark-2 border border-white/5 rounded-lg flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8192C" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.1 6.1l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z" />
                  </svg>
                </div>
                <div>
                  <p className="text-brand-gray text-xs uppercase tracking-widest font-heading mb-1">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/923448959905"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-brand-red transition-colors duration-200"
                  >
                    +92 344 8959905
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-dark-2 border border-white/5 rounded-lg flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8192C" strokeWidth="2">
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-brand-gray text-xs uppercase tracking-widest font-heading mb-1">
                    Based In
                  </p>
                  <p className="text-white">Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
