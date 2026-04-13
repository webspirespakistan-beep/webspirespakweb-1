import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ClientLogos from "@/components/home/ClientLogos";
import ServicesSection from "@/components/home/ServicesSection";
import WhyUs from "@/components/home/WhyUs";
import RecentPosts from "@/components/home/RecentPosts";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Webspires | Your Reliable Digital Partner",
  description:
    "We build high-performance websites and data-driven digital marketing strategies for businesses that want to grow.",
  alternates: {
    canonical: "https://www.webspires.com.pk",
  },
};

/* ──────────────────────────────────────────────────────────
   LOCAL SEO: Merged Organization + LocalBusiness into one
   ProfessionalService schema. Google recommends ONE primary
   entity per page — having separate Organization + LocalBusiness
   creates ambiguity. ProfessionalService inherits from both.
   
   NAP (Name, Address, Phone) is hardcoded and consistent
   with the Contact page schema for NAP consistency signals.
   ────────────────────────────────────────────────────────── */
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.webspires.com.pk/#organization",
  name: "Webspires",
  url: "https://www.webspires.com.pk",
  logo: "https://www.webspires.com.pk/logo.png",
  image: "https://www.webspires.com.pk/og-image.jpg",
  description: "Webspires is a digital marketing agency specialising in GEO, high-performance web development, SEO, and data-driven marketing strategies for businesses in Pakistan and globally.",

  /* NAP — hardcoded, consistent with Contact page */
  telephone: "+92-344-8959905",
  email: "hello@webspires.com.pk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "University Road",
    addressLocality: "Peshawar",
    addressRegion: "Khyber Pakhtunkhwa",
    postalCode: "25000",
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.0151,
    longitude: 71.5249,
  },

  /* Local SEO: Pakistan-targeted fields */
  areaServed: [
    {
      "@type": "City",
      name: "Peshawar",
      containedInPlace: { "@type": "AdministrativeArea", name: "Khyber Pakhtunkhwa" },
    },
    { "@type": "City", name: "Islamabad" },
    { "@type": "City", name: "Lahore" },
    { "@type": "City", name: "Karachi" },
    { "@type": "City", name: "Rawalpindi" },
    { "@type": "City", name: "Faisalabad" },
    {
      "@type": "Country",
      name: "Pakistan",
    },
    {
      "@type": "Country",
      name: "United Kingdom",
    },
    {
      "@type": "Country",
      name: "United Arab Emirates",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "PKR, GBP, USD",
  paymentAccepted: "Bank Transfer, Credit Card",

  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92-344-8959905",
    contactType: "customer service",
    email: "hello@webspires.com.pk",
    availableLanguage: ["English", "Urdu"],
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },

  sameAs: [
    "https://www.linkedin.com/company/webspires",
    "https://www.instagram.com/webspires.pk",
    "https://www.facebook.com/webspires",
  ],

  /* Services offered — helps Google understand the business type */
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Search Engine Optimization (SEO)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Generative Engine Optimization (GEO)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Identity Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Management" } },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Webspires",
  url: "https://www.webspires.com.pk",
  publisher: { "@id": "https://www.webspires.com.pk/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.webspires.com.pk/blogs?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Hero />
      <ClientLogos />
      <ServicesSection />
      <WhyUs />
      <RecentPosts />
      
      {/* Semantic SEO & Comprehensive Overview Section */}
      <section className="py-24 bg-brand-dark relative z-10 border-t border-brand-red/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-white mb-6">
              Leading the Evolution of <span className="text-brand-red">Digital Growth</span>
            </h2>
          </div>
          
          <div className="space-y-8 text-brand-gray text-lg leading-relaxed">
            <p>
              In today's hyper-competitive digital landscape, relying strictly on legacy SEO tactics or basic paid search campaigns is no longer enough. At Webspires, we architect robust, future-proof digital solutions that natively integrate Generative Engine Optimisation (GEO) right alongside best-in-class web development and tactical performance marketing. Our methodology is rooted in the philosophy that a business's online presence must do more than just passively exist—it must actively drive conversions, cultivate brand authority, and command real estate across both traditional search engines and emerging AI platforms.
            </p>
            <p>
              Whether we are designing a modern, lightning-fast Next.js web application or managing a multifaceted, data-driven Google Ads campaign, our approach remains fiercely analytics-focused. We meticulously structure your digital data using deep semantic markups, ensuring that LLMs (Large Language Models) like ChatGPT, Perplexity, and Google's AI Overviews inherently trust and frequently cite your brand as the leading authority in your particular niche.
            </p>
            <p>
              Beyond optimization, our creative and development teams work in absolute synergy. We construct premium brand identities, deploy highly engaging short-form social media frameworks, and execute full-stack digital transformations designed for high-end scalability. True growth requires a partner who understands where search and digital interactions are heading next year, not where they were five years ago. Webspires is meticulously positioned to keep you dominating your market, regardless of how the underlying algorithmic technologies shift.
            </p>
            <p>
              We firmly refuse to lock our partners into stagnant, long-term contracts based on vanity metrics. Instead, we tie our success directly to yours—constantly refining, iterating, and scaling our strategies based on quantifiable leads, direct revenue impact, and actionable business intelligence. We build the infrastructure you require to outpace your competition, and we ruthlessly optimize it until it performs.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
