import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Company: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Team", href: "/team" },
    { label: "Contact Us", href: "/contact-us" },
  ],
  Services: [
    { label: "Web Development", href: "/services/web-development" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "GEO Optimisation", href: "/services/geo-optimisation" },
    { label: "SEO", href: "/services/seo" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-dark-2 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <div className="w-40 h-12 relative flex items-center justify-start">
                <Image src="/logo.png" alt="Webspires Logo" fill className="object-contain object-left" />
              </div>
            </Link>
            <p className="text-brand-gray text-sm leading-relaxed max-w-xs">
              Your reliable digital partner. We build high-performance websites
              and scalable digital solutions that drive real business results.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-heading font-semibold text-white text-sm mb-4 uppercase tracking-widest">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-brand-gray text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-gray text-xs">
            &copy; {new Date().getFullYear()} Webspires. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
