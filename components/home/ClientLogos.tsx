import Image from "next/image";

const logos = [
  { name: "Zeb Tailors Fabrics", src: "https://wordpress-1196470-4364598.cloudwaysapps.com/wp-content/uploads/2026/01/ZEB-TAILORS-FABRICS-logo-scaled.png" },
  { name: "Smile International Aesthetic Clinic", src: "https://wordpress-1196470-4364598.cloudwaysapps.com/wp-content/uploads/2025/09/SMILE-INTERNATIONAL-AESTHETIC-CLINIC-3-Edited-scaled-1.png" },
  { name: "Khyber Shawls", src: "https://wordpress-1196470-4364598.cloudwaysapps.com/wp-content/uploads/2025/05/WhatsApp_Image_2025-04-17_at_13.52.12_e0045bc0-removebg-preview-removebg-preview.png" },
  { name: "One Stop Tyres Wakefield", src: "https://wordpress-1196470-4364598.cloudwaysapps.com/wp-content/uploads/2025/09/IMG-20221119-WA0074.png" },
  { name: "Buggy Desert", src: "https://wordpress-1196470-4364598.cloudwaysapps.com/wp-content/uploads/2025/02/buggy-desert-1.png" },
  { name: "Fly Zone Tourism", src: "https://wordpress-1196470-4364598.cloudwaysapps.com/wp-content/uploads/2025/03/fly-zone-tourism-logo-2.png" },
  { name: "Best Peshawari Chappal", src: "https://wordpress-1196470-4364598.cloudwaysapps.com/wp-content/uploads/2025/03/cropped-Best-Peshawari-chappal-1.png" },
];

export default function ClientLogos() {
  return (
    <section className="bg-brand-dark-2 border-y border-white/5 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 text-center">
        <p className="text-brand-gray text-sm font-heading uppercase tracking-widest">
          Trusted by businesses across industries
        </p>
      </div>

      {/* Scrolling track — 2x duplication sufficient for seamless loop */}
      <div className="relative flex overflow-hidden group">
        <div className="flex items-center gap-24 animate-scroll-left whitespace-nowrap px-12">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-48 h-24 bg-white rounded-xl p-2 shadow-sm opacity-80 hover:opacity-100 transition-all duration-300 shrink-0"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image 
                  src={logo.src} 
                  alt={logo.name} 
                  fill 
                  className="object-contain"
                  sizes="160px"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
