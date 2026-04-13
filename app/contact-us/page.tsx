import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Webspires. Reach out via email or WhatsApp and we'll get back to you within 24 hours.",
  alternates: {
    canonical: "https://webspires.com.pk/contact-us",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Webspires",
  image: "https://webspires.com.pk/logo.png",
  email: "hello@webspires.com.pk",
  telephone: "+923448959905",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Peshawar",
    addressRegion: "Khyber Pakhtunkhwa",
    postalCode: "25000",
    addressCountry: "PK"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.0151,
    longitude: 71.5249
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00"
    }
  ],
  url: "https://webspires.com.pk/contact-us"
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-dark pt-32 pb-24 relative overflow-hidden flex flex-col justify-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-brand-red/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -left-64 w-[600px] h-[600px] bg-brand-red/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        {/* Header Section */}
        <div className="text-center mb-20 max-w-2xl mx-auto flex flex-col items-center">
          <div className="w-full justify-center flex mb-8">
            <Breadcrumbs items={[{ label: "Contact Us", href: "/contact-us" }]} />
          </div>
          <p className="inline-block bg-brand-red/10 text-brand-red font-heading font-bold text-xs uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6 border border-brand-red/20 shadow-[0_0_20px_rgba(232,25,44,0.1)]">
            Contact
          </p>
          <h1 className="font-heading font-black text-5xl sm:text-7xl text-white leading-[1.1] tracking-tight mb-8">
            Let&apos;s Talk Business
          </h1>
          <p className="text-brand-gray text-lg sm:text-xl leading-relaxed">
            Ready to elevate your digital presence? We don&apos;t use forms. 
            Reach out directly via the channels below and chat directly with our experts.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Email Card */}
          <a 
            href="mailto:hello@webspires.com.pk"
            className="group relative bg-brand-dark-2/60 border border-white/5 hover:border-brand-red/50 rounded-[2rem] p-8 sm:p-10 transition-all duration-500 overflow-hidden backdrop-blur-md hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-red/10 flex flex-col items-center text-center focus:outline-none"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-brand-red/0 to-brand-dark-2 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-brand-dark border border-white/10 group-hover:border-brand-red flex items-center justify-center mb-8 shadow-xl group-hover:shadow-brand-red/20 transition-all duration-500">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-gray group-hover:text-brand-red transition-colors duration-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="relative z-10 text-brand-gray text-[11px] uppercase tracking-widest font-heading font-semibold mb-3">
              Email Us Directly
            </p>
            <p className="relative z-10 text-white font-heading font-bold text-lg lg:text-xl xl:text-2xl group-hover:text-brand-red transition-colors duration-300 break-all w-full px-2">
              hello@webspires.com.pk
            </p>
            <div className="relative z-10 mt-8 flex items-center gap-2 text-brand-gray group-hover:text-white text-sm font-medium transition-colors duration-300 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
              <span>Send an email</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </a>

          {/* WhatsApp Card */}
          <a 
            href="https://wa.me/923448959905"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-brand-dark-2/60 border border-white/5 hover:border-brand-red/50 rounded-[2rem] p-8 sm:p-10 transition-all duration-500 overflow-hidden backdrop-blur-md hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-red/10 flex flex-col items-center text-center focus:outline-none"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-brand-red/0 to-brand-dark-2 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-brand-dark border border-white/10 group-hover:border-brand-red flex items-center justify-center mb-8 shadow-xl group-hover:shadow-brand-red/20 transition-all duration-500">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-gray group-hover:text-brand-red transition-colors duration-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <p className="relative z-10 text-brand-gray text-[11px] uppercase tracking-widest font-heading font-semibold mb-3">
              Fastest Response
            </p>
            <p className="relative z-10 text-white font-heading font-bold text-lg lg:text-xl xl:text-2xl group-hover:text-brand-red transition-colors duration-300 break-words w-full px-2">
              +92 344 8959905
            </p>
            <div className="relative z-10 mt-8 flex items-center gap-2 text-brand-gray group-hover:text-white text-sm font-medium transition-colors duration-300 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
              <span>Chat on WhatsApp</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </a>

          {/* Location Card */}
          <div className="group relative bg-brand-dark-2/60 border border-white/5 rounded-[2rem] p-8 sm:p-10 overflow-hidden backdrop-blur-md flex flex-col items-center text-center pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/0 to-brand-dark border-t border-white/5 opacity-50 block" />
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-brand-dark border border-white/10 flex items-center justify-center mb-8 shadow-xl">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-gray">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-8-4.5-8-11a8 8 0 1116 0c0 6.5-8 11-8 11z" />
                <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="relative z-10 text-brand-gray text-[11px] uppercase tracking-widest font-heading font-semibold mb-3">
              Headquarters
            </p>
            <p className="relative z-10 text-white font-heading font-bold text-lg lg:text-xl xl:text-2xl break-words w-full px-2">
              Pakistan
            </p>
            <div className="relative z-10 mt-8 flex items-center gap-2 text-brand-gray/50 text-sm font-medium">
              <span>Global Reach</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
