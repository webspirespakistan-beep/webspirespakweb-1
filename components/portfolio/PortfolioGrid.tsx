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
            className="group relative bg-brand-dark-2 rounded-3xl overflow-hidden block transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,0,0,0.2)] focus:outline-none border border-white/5 hover:border-brand-red/30" style={{ willChange: 'transform' }}
          >
            {/* Ambient Background Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-red/0 via-transparent to-brand-red/0 group-hover:from-brand-red/10 group-hover:to-brand-dark transition-all duration-700 z-0"/>
            
            {/* Image Section */}
            <div className="relative h-64 sm:h-72 bg-brand-dark-3 flex items-center justify-center overflow-hidden z-10 w-full mb-0">
              {project.featuredImageUrl ? (
                <Image
                  src={project.featuredImageUrl}
                  alt={project.title.rendered.replace(/<[^>]+>/g, '')}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-brand-dark-3" />
                  <span className="font-heading font-bold text-white/10 text-6xl" dangerouslySetInnerHTML={{ __html: project.title?.rendered?.[0] || "" }} />
                </>
              )}
              
              {/* Overlay Gradient for seamless text transition */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-2 via-brand-dark-2/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
              
              {/* Category Badge - Glassmorphism */}
              {project.categoriesList.length > 0 && (
                <div className="absolute top-5 right-5 z-20">
                  <span className="bg-brand-dark/60 backdrop-blur-md text-white text-[11px] uppercase font-heading font-bold tracking-widest px-4 py-2 rounded-full border border-white/10 group-hover:border-brand-red/50 group-hover:text-brand-red transition-colors duration-300 shadow-xl">
                    {project.categoriesList[0]}
                  </span>
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="relative z-10 p-8 transform transition-transform duration-500">
              <h2 
                className="font-heading font-extrabold text-white text-2xl mb-3 group-hover:text-brand-red transition-colors duration-300 line-clamp-2"
                dangerouslySetInnerHTML={{ __html: project.title.rendered }}
              />
                
              <p className="text-brand-gray/80 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:text-white/80 transition-colors duration-300">
                {project.excerptText}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.categoriesList.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-brand-gray-light bg-black/20 px-3 py-1.5 rounded-md border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
                {project.categoriesList.length > 3 && (
                  <span className="text-xs font-medium text-brand-gray-light bg-black/20 px-3 py-1.5 rounded-md border border-white/5">
                    +{project.categoriesList.length - 3}
                  </span>
                )}
              </div>

              {/* Action Link */}
              <div className="flex items-center text-brand-red text-sm font-bold font-heading uppercase tracking-wider">
                <span>View Project</span>
                <svg 
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-3 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
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
