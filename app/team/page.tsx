import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Team | Meet the Experts Behind Webspires",
  description: "Meet the team behind Webspires — senior developers, data-driven marketers, and brand specialists who build digital growth strategies that deliver real results.",
  alternates: {
    canonical: "https://www.webspires.com.pk/team",
  },
  openGraph: {
    title: "Our Team | Webspires",
    description: "Meet the team behind Webspires — senior developers, data-driven marketers, and brand specialists.",
    url: "https://www.webspires.com.pk/team",
    type: "website",
  },
};

// Replace with actual team data or fetch from WP CPT
const team = [
  {
    name: "Sami",
    role: "Founder & CEO",
    bio: "Entrepreneur and digital strategist with a focus on GEO, web development, and agency growth.",
    initials: "S",
  },
  {
    name: "Team Member",
    role: "Lead Developer",
    bio: "Full-stack developer specialising in Next.js, WordPress, and high-performance web applications.",
    initials: "T",
  },
  {
    name: "Team Member",
    role: "Marketing Strategist",
    bio: "Data-driven marketer focused on SEO, paid ads, and growth campaigns that deliver real ROI.",
    initials: "T",
  },
  {
    name: "Team Member",
    role: "Brand Designer",
    bio: "Visual identity specialist creating brand systems that are memorable, consistent, and purposeful.",
    initials: "T",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-brand-dark pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-brand-red font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            Team
          </p>
          <h1 className="font-heading font-extrabold text-5xl sm:text-6xl text-white leading-tight mb-6">
            The People
            <br />
            Behind the Work
          </h1>
          <p className="text-brand-gray text-lg leading-relaxed">
            A focused team of builders, strategists, and creatives who care
            about getting results for every client we work with.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {team.map((member) => (
            <div
              key={member.name + member.role}
              className="group bg-brand-dark-2 border border-white/5 hover:border-brand-red/20 rounded-2xl p-6 transition-all duration-300"
            >
              {/* Avatar */}
              <div className="w-16 h-16 rounded-xl bg-brand-red flex items-center justify-center font-heading font-bold text-white text-2xl mb-4 group-hover:scale-105 transition-transform duration-200">
                {member.initials}
              </div>

              <h3 className="font-heading font-bold text-white text-lg mb-0.5">
                {member.name}
              </h3>
              <p className="text-brand-red text-sm font-heading font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-brand-gray text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Join us */}
        <div className="bg-brand-dark-2 border border-white/5 rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-heading font-bold text-white text-2xl mb-2">
              Want to Join the Team?
            </h3>
            <p className="text-brand-gray">
              We&apos;re always looking for people who are serious about their
              craft.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="shrink-0 inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-heading font-semibold px-8 py-3.5 rounded transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
