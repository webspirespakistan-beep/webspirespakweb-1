import Link from "next/link";
import { getAllPosts, getFeaturedImage } from "@/lib/wordpress";
import Image from "next/image";

export default async function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  let posts;
  try {
    posts = await getAllPosts();
  } catch {
    return null;
  }

  const related = posts.filter((p) => p.slug !== currentSlug).slice(0, 3);
  if (related.length === 0) return null;

  return (
    <div className="mt-16 pt-8 border-t border-white/10">
      <h2 className="font-heading font-bold text-2xl text-white mb-8">Related Articles</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map((post) => {
          const image = getFeaturedImage(post);
          const plainTitle = post.title.rendered.replace(/<[^>]+>/g, "");
          return (
            <Link
              key={post.id}
              href={`/blogs/${post.slug}`}
              className="group bg-brand-dark-2 border border-white/5 rounded-2xl overflow-hidden hover:border-brand-red/30 transition-colors duration-300"
            >
              {image && (
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={image}
                    alt={plainTitle}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 33vw"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-5">
                <h3 className="font-heading font-bold text-white text-base group-hover:text-brand-red transition-colors duration-200 line-clamp-2">
                  {plainTitle}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
