import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";

/* ──────────────────────────────────────────────────────────
   FONT OPTIMISATION (CWV: LCP + CLS)
   - next/font self-hosts fonts at build time → zero external requests
   - display: "swap" prevents invisible text (FOIT → FOUT eliminated)
   - Subset reduces download size by ~70%
   - CSS variable injection = zero layout shift from font swap
   ────────────────────────────────────────────────────────── */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  preload: true,
  weight: ["300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  preload: true,
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Webspires | Web Development & Digital Marketing Agency",
    template: "%s | Webspires",
  },
  description:
    "Webspires is a UK-based digital marketing agency specialising in GEO, high-performance websites, and data-driven marketing strategies.",
  metadataBase: new URL("https://www.webspires.com.pk"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.webspires.com.pk",
    siteName: "Webspires",
    images: [{ url: "https://www.webspires.com.pk/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@webspires",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${poppins.variable}`}>
      <head>
        {/* DNS prefetch for external origins used for images */}
        <link rel="dns-prefetch" href="https://wordpress-1196470-4364598.cloudwaysapps.com" />
        <link rel="preconnect" href="https://wordpress-1196470-4364598.cloudwaysapps.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-brand-dark text-white font-body antialiased">
        {/* GTM: moved to afterInteractive to unblock main thread during LCP */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-54LN7DTC');`,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-54LN7DTC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
