import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Webspires — who we are, what we stand for, and why businesses choose us as their digital partner.",
  alternates: {
    canonical: "https://webspires.com.pk/about",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Webspires",
  description: "Learn about Webspires — who we are, what we stand for, and why businesses choose us as their digital partner.",
  url: "https://webspires.com.pk/about",
  publisher: {
    "@type": "Organization",
    name: "Webspires",
    logo: {
      "@type": "ImageObject",
      url: "https://webspires.com.pk/logo.png"
    }
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-dark pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <Breadcrumbs items={[{ label: "About Us", href: "/about" }]} />
            <p className="text-brand-red font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              About Us
            </p>
            <h1 className="font-heading font-extrabold text-5xl sm:text-6xl text-white leading-tight mb-6">
              We&apos;re Builders,
              <br />
              Not Talkers
            </h1>
            <p className="text-brand-gray text-lg leading-relaxed mb-6">
              Webspires is a digital marketing agency focused on one thing:
              growing businesses through high-performance websites and
              forward-thinking marketing. We don&apos;t believe in fluff,
              vanity metrics, or locking clients into contracts that don&apos;t
              deliver.
            </p>
            <p className="text-brand-gray text-lg leading-relaxed">
              We specialise in GEO (Generative Engine Optimisation) — getting
              your business visible in AI search results before your competitors
              even know the game has changed.
            </p>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square rounded-[2rem] bg-brand-dark-2 border border-white/5 overflow-hidden relative shadow-2xl group">
              <Image 
                src="https://wordpress-1196470-4364598.cloudwaysapps.com/wp-content/uploads/2025/02/graphic-design-min-scaled-1.webp" 
                alt="Webspires Graphic Design" 
                fill 
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-brand-red font-heading font-bold text-sm tracking-widest uppercase mb-1">
                  Creative Excellence
                </p>
                <p className="text-white text-lg font-medium">
                  Your Reliable Digital Partner
                </p>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-brand-red/20 rounded-3xl -z-10 transition-transform group-hover:rotate-6 duration-500" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-red/20 rounded-full blur-[40px] -z-10" />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          <div className="bg-brand-dark-2 border border-white/5 rounded-2xl p-8">
            <div className="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8192C" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-white text-xl mb-3">
              Our Mission
            </h3>
            <p className="text-brand-gray leading-relaxed">
              To help businesses of all sizes compete and win online by
              delivering websites and marketing strategies that generate real,
              measurable growth — not just impressions and clicks.
            </p>
          </div>

          <div className="bg-brand-dark-2 border border-white/5 rounded-2xl p-8">
            <div className="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8192C" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-white text-xl mb-3">
              Our Vision
            </h3>
            <p className="text-brand-gray leading-relaxed">
              To be the agency businesses trust when the digital landscape
              shifts. We stay ahead of every change — from traditional SEO to
              AI search — so our clients never fall behind.
            </p>
          </div>
        </div>

        {/* Company Background & Team Expertise */}
        <div className="mb-24">
          <h2 className="font-heading font-extrabold text-4xl text-white mb-8">
            Our Story & Expertise
          </h2>
          <div className="bg-brand-dark-2 border border-white/5 rounded-3xl p-8 sm:p-12 space-y-6">
            <p className="text-brand-gray text-lg leading-relaxed">
              Founded on the belief that too many agencies hide behind vanity metrics, Webspires was built to fundamentally shift the dynamic between digital partners and businesses. For years, our founding team observed the industry standard: long-term locked contracts, confusing analytics dashboards, and a profound lack of actual ROI accountability. We decided to build the exact opposite.
            </p>
            <p className="text-brand-gray text-lg leading-relaxed">
              Our core team consists of battle-tested senior developers, data-driven performance marketers, and search engine specialists who treat every client&apos;s budget with the same respect as their own. We don&apos;t employ account managers who operate as middle-men; when you work with Webspires, you work directly with the experts actively building your campaigns and writing your code.
            </p>
            <p className="text-brand-gray text-lg leading-relaxed">
              Furthermore, we recognized early that traditional search was rapidly evolving. As Generative AI models like ChatGPT and Perplexity began intercepting search traffic, we pivoted heavily toward Generative Engine Optimisation (GEO) and Answer Engine Optimisation (AEO). Our engineers and SEO strategists collaborate to build deep, semantic content architecture—structuring entity associations and schema markups so our clients aren&apos;t just ranking on Google, but are cited as the undisputed authoritative answers across all leading LLMs.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h2 className="font-heading font-extrabold text-4xl text-white mb-12">
            What We Stand For
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Transparency",
                desc: "You always know what we're doing and why. No jargon, no hiding, no surprises.",
              },
              {
                title: "Ownership",
                desc: "Everything we build belongs to you. No lock-in. No holding your site hostage.",
              },
              {
                title: "Results",
                desc: "We measure success in revenue, leads, and growth — not vanity metrics.",
              },
              {
                title: "Speed",
                desc: "We move fast without cutting corners. You don't need to wait 6 months to see impact.",
              },
              {
                title: "Innovation",
                desc: "We stay ahead of the curve so our clients benefit before the market catches up.",
              },
              {
                title: "Partnership",
                desc: "We're not a vendor. We're invested in your success like it's our own.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="border-l-2 border-brand-red pl-5 py-1"
              >
                <h4 className="font-heading font-bold text-white mb-1">
                  {v.title}
                </h4>
                <p className="text-brand-gray text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-red rounded-2xl p-12 text-center">
          <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4">
            Work With Us
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
            Ready to partner with a team that&apos;s genuinely invested in your
            growth?
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-white text-brand-red font-heading font-bold px-10 py-4 rounded hover:bg-white/90 transition-colors duration-200"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </div>
  );
}
