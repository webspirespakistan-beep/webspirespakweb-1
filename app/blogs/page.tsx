import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts, formatDate, getFeaturedImage, stripHtml } from "@/lib/wordpress";
import { WPPost } from "@/types/wordpress";

export const metadata: Metadata = {
  title: "Blog | Insights on GEO, Digital Marketing & Web Development",
  description:
    "Insights on GEO, digital marketing, web development, and AI search from the Webspires team.",
  alternates: {
    canonical: "https://www.webspires.com.pk/blogs",
  },
  openGraph: {
    title: "Blog | Webspires",
    description: "Insights on GEO, digital marketing, web development, and AI search from the Webspires team.",
    url: "https://www.webspires.com.pk/blogs",
    type: "website",
  },
};

export const revalidate = 3600;

export default async function BlogsPage() {
  let posts: WPPost[] = [];
  try {
    posts = await getAllPosts();
  } catch {
    posts = [];
  }

  return (
    <div className="min-h-screen bg-brand-dark pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-brand-red font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            Blog
          </p>
          <h1 className="font-heading font-extrabold text-5xl sm:text-6xl text-white leading-tight">
            Insights &amp; Ideas
          </h1>
        </div>

        {posts.length === 0 ? (
          <p className="text-brand-gray">No posts yet. Check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => {
              const image = getFeaturedImage(post);
              const excerpt =
                stripHtml(post.excerpt.rendered).slice(0, 140) + "...";

              return (
                <Link
                  key={post.id}
                  href={`/blogs/${post.slug}`}
                  className="group bg-brand-dark-2 border border-white/5 hover:border-white/10 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <div className="relative h-52 bg-brand-dark-3">
                    {image ? (
                      <Image
                        src={image}
                        alt={post.title.rendered}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-transparent" />
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-brand-gray text-xs mb-3">
                      {formatDate(post.date)}
                    </p>
                    <h2
                      className="font-heading font-bold text-white group-hover:text-brand-red text-xl leading-snug mb-3 transition-colors duration-200"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <p className="text-brand-gray text-sm leading-relaxed">
                      {excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-brand-red text-sm font-semibold font-heading">
                      Read more
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
