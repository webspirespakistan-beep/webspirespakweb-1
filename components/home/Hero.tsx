import Link from "next/link";

/* ──────────────────────────────────────────────────────────
   HERO — CWV OPTIMISATIONS:
   
   LCP: Removed YouTube iframe entirely. YouTube embeds load ~800KB-1MB
   of JS (player API, ads SDK, analytics) and block the main thread
   for 2-4 seconds on slow 4G. Replaced with a CSS-only animated
   gradient background that renders instantly.
   
   CLS: All hero elements have explicit dimensions/constraints.
   The animate-fade-up uses opacity+transform only (compositor-only
   properties), avoiding layout recalculation.
   
   INP: Zero JS in this component — pure server component.
   ────────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Lightweight CSS-only animated background — replaces YouTube iframe */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Animated gradient blobs — GPU-composited, zero main thread cost */}
        <div className="absolute -top-1/4 -left-1/4 w-[80vw] h-[80vw] bg-brand-red/[0.07] rounded-full blur-[120px] animate-blob" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[60vw] h-[60vw] bg-brand-red/[0.05] rounded-full blur-[100px] animate-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-white/[0.02] rounded-full blur-[80px] animate-blob" style={{ animationDelay: "4s" }} />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-brand-dark/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center pt-32 pb-20">
        
        {/* Glassmorphic Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-up shadow-[0_4px_24px_-4px_rgba(232,25,44,0.15)]">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
          </span>
          <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wide">
            Transforming Brands Globally
          </span>
        </div>

        {/* H1 Heading — this IS the LCP element on homepage */}
        <h1
          className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-[5.5rem] tracking-tight text-center text-white leading-[1.1] mb-8 animate-fade-up max-w-5xl"
          style={{ animationDelay: "0.1s" }}
        >
          Your Reliable <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-red-light to-brand-red">
            Digital Partner
          </span>
        </h1>

        {/* Subtitle Body */}
        <p
          className="text-brand-gray text-base sm:text-lg lg:text-xl text-center max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up font-light"
          style={{ animationDelay: "0.2s" }}
        >
          In today&apos;s competitive environment, a strong online presence isn&apos;t optional. We design high-performance websites and implement data-driven marketing strategies that scale your growth.
        </p>

        {/* Modern Interactive CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Link
            href="/portfolio"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 font-heading font-semibold text-white transition-all duration-300 ease-out rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full bg-brand-red transition-all duration-300 ease-out group-hover:bg-brand-red-dark"></div>
            {/* Glow effect behind button */}
            <div className="absolute inset-0 w-full h-full bg-brand-red blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
            <span className="relative flex items-center gap-2">
              See Our Work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 font-heading font-medium text-white border border-white/20 rounded-lg hover:bg-white/5 hover:border-white/40 transition-colors duration-300 backdrop-blur-sm"
          >
            Our Services
          </Link>
        </div>

        {/* Floating Glass Props (Dashboard/Stats snippet) */}
        <div className="mt-20 relative w-full max-w-lg mx-auto animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent z-10 pointer-events-none rounded-2xl" />
          <div className="bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl rounded-2xl p-6 shadow-2xl animate-float">
            <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-12 rounded-xl bg-brand-red/20 flex items-center justify-center text-brand-red">
                 <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                 </svg>
               </div>
               <div>
                 <p className="text-white/60 text-sm font-medium">Monthly Revenue</p>
                 <h4 className="text-white font-heading font-bold text-2xl">+148.5% <span className="text-green-400 text-sm font-medium ml-2">↑</span></h4>
               </div>
            </div>
            
            <div className="space-y-3">
              {[100, 75, 45].map((width, i) => (
                <div key={i} className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-brand-red to-brand-red/60 rounded-full" style={{ width: `${width}%` }} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
