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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-54LN7DTC');`,
          }}
        />
      </head>
      <body className="bg-brand-dark text-white font-body antialiased">
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
