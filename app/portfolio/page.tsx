import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Projects delivered by Webspires — websites, digital marketing campaigns, and brand identities.",
  alternates: {
    canonical: "https://webspires.com.pk/portfolio",
  },
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Webspires Portfolio",
  description: "Projects delivered by Webspires — websites, digital marketing campaigns, and brand identities.",
  url: "https://webspires.com.pk/portfolio",
};

import { getAllProjects, getPostCategories, stripHtml, getFeaturedImage } from "@/lib/wordpress";
import { WPPost } from "@/types/wordpress";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export const revalidate = 3600;

export default async function PortfolioPage() {
  let wpProjects: WPPost[] = [];
  try {
    wpProjects = await getAllProjects();
  } catch (error) {
    console.error("Failed to fetch projects:", error);
  }

  const projects = wpProjects.map((p) => ({
    ...p,
    categoriesList: getPostCategories(p),
    excerptText: p.excerpt?.rendered ? stripHtml(p.excerpt.rendered).slice(0, 140) + "..." : "",
    featuredImageUrl: getFeaturedImage(p),
  }));

  return (
    <div className="min-h-screen bg-brand-dark pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <Breadcrumbs items={[{ label: "Portfolio", href: "/portfolio" }]} />
          <p className="text-brand-red font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h1 className="font-heading font-extrabold text-5xl sm:text-6xl text-white leading-tight mb-6">
            Work That
            <br />
            Speaks for Itself
          </h1>
          <p className="text-brand-gray text-lg">
            A selection of projects we&apos;ve delivered. Real work, real
            results.
          </p>
        </div>

        <PortfolioGrid projects={projects} />

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-brand-gray text-lg mb-6">
            Want to be our next success story?
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-heading font-semibold px-10 py-4 rounded transition-colors duration-200"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </div>
  );
}
