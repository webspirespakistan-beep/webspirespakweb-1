"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { WPPost } from "@/types/wordpress";

interface Project extends WPPost {
  categoriesList: string[];
  excerptText: string;
  featuredImageUrl: string | null;
}

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  // Extract all unique categories
  const allCategories = ["All", ...Array.from(new Set(projects.flatMap((p) => p.categoriesList)))];

  // Filter projects
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.categoriesList.includes(activeCategory));

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-3 mb-12">
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`font-heading font-semibold text-sm px-5 py-2 rounded-full border transition-all duration-200 ${
              cat === activeCategory
                ? "bg-brand-red border-brand-red text-white"
                : "border-white/20 text-brand-gray hover:border-white hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project.id}
            className="group bg-brand-dark-2 border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 block"
          >
            {/* Image placeholder or real image */}
            <div className="relative h-56 bg-brand-dark-3 flex items-center justify-center overflow-hidden">
              {project.featuredImageUrl ? (
                <Image
                  src={project.featuredImageUrl}
                  alt={project.title.rendered}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-transparent" />
                  <span className="font-heading font-bold text-white/10 text-5xl" dangerouslySetInnerHTML={{ __html: project.title?.rendered?.[0] || "" }} />
                </>
              )}
              {project.categoriesList.length > 0 && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-brand-red/90 text-white text-xs font-heading font-semibold px-3 py-1 rounded-full shadow-lg">
                    {project.categoriesList[0]}
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 
                className="font-heading font-bold text-white text-xl mb-2 group-hover:text-brand-red transition-colors duration-200"
                dangerouslySetInnerHTML={{ __html: project.title.rendered }}
              />
                
              <p className="text-brand-gray text-sm leading-relaxed mb-4">
                {project.excerptText}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.categoriesList.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-heading font-medium text-brand-gray-light bg-brand-dark-3 px-3 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
        {filteredProjects.length === 0 && (
          <div className="md:col-span-2 text-center text-brand-gray py-12">
            No projects found in this category.
          </div>
        )}
      </div>
    </>
  );
}
