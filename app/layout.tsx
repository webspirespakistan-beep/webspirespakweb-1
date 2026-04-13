import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";

export const metadata: Metadata = {
  title: {
    default: "Webspires | Web Development & Digital Marketing Agency",
    template: "%s | Webspires",
  },
  description:
    "Webspires is a UK-based digital marketing agency specialising in GEO, high-performance websites, and data-driven marketing strategies.",
  metadataBase: new URL("https://webspires.com.pk"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://webspires.com.pk",
    siteName: "Webspires",
    images: [{ url: "https://webspires.com.pk/og-image.jpg", width: 1200, height: 630 }],
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
    <html lang="en" className="scroll-smooth">
      <body className="bg-brand-dark text-white font-body antialiased">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
