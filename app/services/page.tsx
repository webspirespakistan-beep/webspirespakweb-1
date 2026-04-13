import type { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, digital marketing, GEO optimisation, SEO, branding, and social media services from Webspires.",
  alternates: {
    canonical: "https://webspires.com.pk/services",
  },
};

export default function ServicesPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": servicesData.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.shortDescription,
        "url": `https://webspires.com.pk/services/${service.slug}`
      }
    }))
  };

  return (
    <div className="min-h-screen bg-brand-dark pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p className="text-brand-red font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            Services
          </p>
          <h1 className="font-heading font-extrabold text-5xl sm:text-6xl text-white leading-tight mb-6">
            Everything You
            <br />
            Need to Grow
          </h1>
          <p className="text-brand-gray text-lg leading-relaxed">
            We don&apos;t do everything. We do the things that move the needle
            for businesses in competitive markets.
          </p>
        </div>

        {/* Services list */}
        <div className="space-y-0">
          {servicesData.map((service) => (
            <Link
              key={service.number}
              href={`/services/${service.slug}`}
              className="group grid lg:grid-cols-12 gap-8 py-12 border-t border-white/10 hover:border-brand-red/30 transition-colors duration-300 relative block"
            >
              {/* Number */}
              <div className="lg:col-span-1">
                <span className="font-heading font-bold text-brand-red text-sm">
                  {service.number}
                </span>
              </div>

              {/* Title */}
              <div className="lg:col-span-3">
                <h2 className="font-heading font-bold text-white text-2xl group-hover:text-brand-red transition-colors duration-200">
                  {service.title}
                </h2>
              </div>

              {/* Description */}
              <div className="lg:col-span-4">
                <p className="text-brand-gray leading-relaxed group-hover:text-white transition-colors duration-200">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div className="lg:col-span-4 relative">
                <ul className="space-y-2 mb-6">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-brand-gray-light text-sm"
                    >
                      <span className="w-1 h-1 rounded-full bg-brand-red shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="text-brand-red text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-brand-dark-2 border border-white/5 rounded-2xl p-12 text-center">
          <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4">
            Not sure what you need?
          </h3>
          <p className="text-brand-gray text-lg mb-8 max-w-lg mx-auto">
            Tell us about your business and we&apos;ll tell you exactly where to
            start.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-heading font-semibold px-10 py-4 rounded transition-colors duration-200"
          >
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
