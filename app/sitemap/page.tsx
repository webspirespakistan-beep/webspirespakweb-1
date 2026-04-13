import Link from "next/link";
import { getAllPosts } from "@/lib/wordpress";
import { WPPost } from "@/types/wordpress";

export const metadata = {
  title: "Sitemap | Navigate Webspires",
  description: "Navigate through Webspires website using our HTML sitemap. Find all pages, services, and blog posts.",
  alternates: {
    canonical: "https://www.webspires.com.pk/sitemap",
  },
};

export default async function SitemapPage() {
  let posts: WPPost[] = [];
  try {
    posts = await getAllPosts();
  } catch (error) {
    console.error("Sitemap: Failed to fetch posts for the sitemap", error);
  }

  const sitemapSections = [
    {
      title: "Main Pages",
      links: [
        { title: "Home", href: "/" },
        { title: "About Us", href: "/about" },
        { title: "Portfolio", href: "/portfolio" },
        { title: "Team", href: "/team" },
        { title: "Blogs", href: "/blogs" },
        { title: "Contact Us", href: "/contact-us" },
        { title: "Privacy Policy", href: "/privacy-policy" },
        { title: "Terms & Conditions", href: "/terms-and-conditions" },
      ],
    },
    {
      title: "Services",
      links: [
        { title: "All Services", href: "/services" },
        { title: "Web Development", href: "/services/web-development" },
        { title: "Digital Marketing", href: "/services/digital-marketing" },
        { title: "GEO Optimisation", href: "/services/geo-optimisation" },
        { title: "SEO", href: "/services/seo" },
        { title: "Brand Identity", href: "/services/brand-identity" },
        { title: "Social Media", href: "/services/social-media" },
      ],
    },
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
          Sitemap
        </h1>
        <p className="text-gray-400 mb-12">
          Navigate through our website using the sitemap below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {sitemapSections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-brand-accent transition-colors block"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {posts && posts.length > 0 && (
            <div className="md:col-span-2 mt-8">
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">
                Latest Blog Posts
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {posts.slice(0, 20).map((post: any) => (
                  <li key={post.id}>
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="text-gray-300 hover:text-brand-accent transition-colors block truncate"
                    >
                      {post.title?.rendered || "Unknown Post"}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
