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
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Webspires",
  url: "https://webspires.com.pk",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://webspires.com.pk/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
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
      <CTA />
    </>
  );
}
