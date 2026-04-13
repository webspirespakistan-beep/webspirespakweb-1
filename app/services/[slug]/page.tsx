import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/lib/data/services";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);
  
  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: service.shortDescription,
    alternates: {
      canonical: `https://webspires.com.pk/services/${service.slug}`,
    },
  };
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function SingleServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.shortDescription,
    "provider": {
      "@type": "Organization",
      "name": "Webspires",
      "url": "https://webspires.com.pk"
    },
    "areaServed": [{
      "@type": "Country",
      "name": "Pakistan"
    }, {
      "@type": "Country",
      "name": "United Kingdom"
    }, {
      "@type": "Country",
      "name": "United States"
    }],
    "url": `https://webspires.com.pk/services/${service.slug}`
  };

  const schemaArray = [
    serviceSchema,
    ...(service.faqs ? [{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": service.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }] : [])
  ];

  return (
    <div className="min-h-screen bg-brand-dark pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArray) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Back Link */}
        <Link href="/services" className="inline-flex items-center gap-2 text-brand-gray hover:text-white transition-colors mb-12 group">
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          Back to Services
        </Link>
        
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
             <div 
               className="w-16 h-16 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red"
               dangerouslySetInnerHTML={{ __html: service.icon }}
             />
             <span className="font-heading font-extrabold text-brand-gray/30 text-5xl tracking-tighter">
               {service.number}
             </span>
          </div>
          <h1 className="font-heading font-extrabold text-5xl sm:text-6xl text-white leading-tight mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-brand-gray-light leading-relaxed font-light">
            {service.description}
          </p>
        </div>
        
        {/* Main Content & Features */}
        <div className="bg-brand-dark-2 border border-white/5 rounded-3xl p-8 sm:p-12 mb-16">
          <h2 className="font-heading font-bold text-2xl text-white mb-6">What We Offer</h2>
          <p className="text-brand-gray leading-relaxed mb-8">
            {service.content}
          </p>
          
          <h3 className="font-heading font-bold text-lg text-white mb-4">Key Features & Deliverables</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {service.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 text-brand-gray-light"
              >
                <span className="w-5 h-5 rounded flex items-center justify-center bg-brand-red/20 text-brand-red shrink-0 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>
        
        {/* FAQs Section */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {service.faqs.map((faq, index) => (
                <details key={index} className="group bg-brand-dark-2 border border-white/5 rounded-2xl overflow-hidden cursor-pointer open:border-brand-red/30 transition-colors">
                  <summary className="flex items-center justify-between p-6 list-none font-heading font-bold text-lg text-white">
                    {faq.question}
                    <span className="transition-transform group-open:rotate-180 text-brand-red">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-brand-gray leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-brand-red/20 to-brand-dark-2 border border-brand-red/10 rounded-2xl p-12 text-center overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          <h3 className="relative z-10 font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4">
            Ready to scale your {service.title}?
          </h3>
          <p className="relative z-10 text-brand-gray text-lg mb-8 max-w-lg mx-auto">
            Book a discovery call with our team and let us build a tailored roadmap for your brand.
          </p>
          <Link
            href="/contact-us"
            className="relative z-10 inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-heading font-semibold px-10 py-4 rounded transition-colors duration-200"
          >
            Get a Free Consultation
          </Link>
        </div>
        
      </div>
    </div>
  );
}
