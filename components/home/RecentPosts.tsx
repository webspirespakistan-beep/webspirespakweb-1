import Link from "next/link";
import Image from "next/image";
import { getRecentPosts, formatDate, getFeaturedImage, stripHtml } from "@/lib/wordpress";

export default async function RecentPosts() {
  let posts;
  try {
    posts = await getRecentPosts(3);
  } catch {
    // WP API unavailable — skip this section
    return null;
  }

  if (!posts.length) return null;

  return (
    <section className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-brand-red font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              From the Blog
            </p>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-white leading-tight">
              Latest Insights
            </h2>
          </div>
          <Link
            href="/blogs"
            className="hidden sm:inline-flex items-center gap-2 text-brand-gray hover:text-white text-sm font-medium transition-colors duration-200"
          >
            View all
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => {
            const image = getFeaturedImage(post);
            const excerpt = stripHtml(post.excerpt.rendered).slice(0, 120) + "...";

            return (
              <Link
                key={post.id}
                href={`/blogs/${post.slug}`}
                className="group bg-brand-dark-2 hover:bg-brand-dark-3 border border-white/5 hover:border-white/10 rounded-xl overflow-hidden transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 bg-brand-dark-3 overflow-hidden">
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
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 to-brand-dark flex items-center justify-center">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-red/40">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="M21 15l-5-5L5 21" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-brand-gray text-xs mb-3">
                    {formatDate(post.date)}
                  </p>
                  <h3 className="font-heading font-bold text-white group-hover:text-brand-red text-base leading-snug mb-2 transition-colors duration-200"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <p className="text-brand-gray text-sm leading-relaxed">
                    {excerpt}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
