import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllProjects,
  getProjectBySlug,
  getFeaturedImage,
  getPostCategories,
} from "@/lib/wordpress";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = await getProjectBySlug(resolvedParams.slug);
  if (!project) return {};

  const seo = project.yoast_head_json;
  const image = getFeaturedImage(project);

  return {
    title: seo?.title || project.title.rendered,
    description: seo?.description || `Explore the ${project.title.rendered} project — delivered by Webspires.`,
    alternates: {
      canonical: `https://www.webspires.com.pk/projects/${project.slug}`,
    },
    openGraph: {
      title: seo?.title || project.title.rendered,
      description: seo?.description || `Explore the ${project.title.rendered} project — delivered by Webspires.`,
      images: image ? [{ url: image }] : [],
      url: `https://www.webspires.com.pk/projects/${project.slug}`,
      type: "article",
    },
  };
}

export const revalidate = 3600;

export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params;
  const project = await getProjectBySlug(resolvedParams.slug);
  if (!project) notFound();

  const image = getFeaturedImage(project);
  const categories = getPostCategories(project);

  return (
    <div className="min-h-screen bg-brand-dark pb-24">
      {/* Full-width Hero Section with Parallax Effect */}
      <div className="relative w-full h-[60vh] min-h-[450px] max-h-[700px] flex flex-col justify-end">
        {image ? (
          <Image
            src={image}
            alt={project.title.rendered.replace(/<[^>]+>/g, '')}
            fill
            className="object-cover opacity-60 mix-blend-screen"
            priority
            fetchPriority="high"
            sizes="100vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark-2 to-brand-dark" />
        )}
        
        {/* Gradients to seamlessly blend hero perfectly into content */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-transparent to-transparent" />

        <div className="relative z-10 max-w-5xl w-full mx-auto px-4 sm:px-6 pb-12">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-brand-gray/80 font-medium tracking-wide pb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/20">/</span>
            <Link href="/portfolio" className="hover:text-white transition-colors">
              Portfolio
            </Link>
            <span className="text-white/20">/</span>
            <span 
              className="text-brand-red font-semibold truncate"
              dangerouslySetInnerHTML={{ __html: project.title.rendered }}
            />
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            {categories.map((cat) => (
              <span key={cat} className="bg-brand-red text-white px-4 py-1.5 rounded-full text-[11px] font-heading font-bold tracking-widest uppercase shadow-lg shadow-brand-red/20">
                {cat}
              </span>
            ))}
          </div>
          
          <h1
            className="font-heading font-black text-5xl sm:text-6xl md:text-7xl text-white leading-[1.1] tracking-tight drop-shadow-2xl"
            dangerouslySetInnerHTML={{ __html: project.title.rendered }}
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        {/* Meta Information (Custom Fields) - Glassmorphism floating bar */}
        {(project.meta?.year || project.meta?.country || project.meta?.services) && (
          <div className="flex flex-wrap gap-x-12 gap-y-6 items-center bg-brand-dark-2/80 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-xl shadow-2xl mb-16 transform transition-all hover:border-white/20">
            {project.meta.year && (
              <div className="flex flex-col">
                <span className="text-brand-gray text-[11px] uppercase tracking-widest font-semibold mb-2">Year</span>
                <span className="text-white font-heading font-bold text-xl">{project.meta.year}</span>
              </div>
            )}
            
            {project.meta.country && (
              <div className="flex flex-col relative">
                {project.meta.year && <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-px h-10 bg-white/10 hidden sm:block"></div>}
                <span className="text-brand-gray text-[11px] uppercase tracking-widest font-semibold mb-2">Based In</span>
                <span className="text-white font-heading font-bold text-xl">{project.meta.country}</span>
              </div>
            )}
            
            {project.meta.services && Object.entries(project.meta.services).some(([_, val]) => val === 'true') && (
              <div className="flex flex-col relative flex-1 min-w-[200px]">
                {(project.meta.year || project.meta.country) && <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-px h-10 bg-white/10 hidden md:block"></div>}
                <span className="text-brand-gray text-[11px] uppercase tracking-widest font-semibold mb-3">Services Provided</span>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(project.meta.services)
                    .filter(([_, val]) => val === 'true')
                    .map(([serviceName]) => (
                      <span key={serviceName} className="text-white/90 bg-white/5 border border-white/10 text-[13px] font-medium px-4 py-1.5 rounded-lg hover:bg-white/10 transition-colors">
                        {serviceName}
                      </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Action Link if provided */}
            {project.meta.link && (
              <div className="ml-auto w-full md:w-auto mt-2 md:mt-0">
                <a 
                  href={project.meta.link.startsWith('http') ? project.meta.link : `https://${project.meta.link}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex w-full md:w-auto items-center justify-center gap-2 bg-brand-red hover:bg-red-600 text-white font-heading font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-brand-red/30"
                >
                  Visit Project
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        )}

        {/* WordPress Project Content Wrapper */}
        <div className="wp-content bg-brand-dark-2/30 px-6 py-12 sm:p-16 rounded-[2.5rem] border border-white/5 relative overflow-hidden backdrop-blur-sm">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-brand-red/10 blur-[120px] pointer-events-none rounded-full" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-red/5 blur-[120px] pointer-events-none rounded-full" />
          
          <div
            className="relative z-10 max-w-4xl mx-auto"
            dangerouslySetInnerHTML={{ __html: project.content.rendered }}
          />
        </div>

        {/* Back link */}
        <div className="mt-20 pt-8 border-t border-white/10 flex justify-center">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-3 text-brand-gray hover:text-white font-heading font-semibold text-lg transition-colors duration-300"
          >
            <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-brand-red flex items-center justify-center group-hover:bg-brand-red/10 transition-all duration-300">
              <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
