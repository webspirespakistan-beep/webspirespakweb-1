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
    canonical: "https://webspires.com.pk",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Webspires",
  url: "https://webspires.com.pk",
  logo: "https://webspires.com.pk/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92-344-8959905",
    contactType: "customer service",
    email: "hello@webspires.com.pk",
  },
  sameAs: [
    "https://www.linkedin.com/company/webspires",
    "https://www.instagram.com/webspires.pk",
    "https://www.facebook.com/webspires"
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Webspires Website",
  url: "https://webspires.com.pk",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
