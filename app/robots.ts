import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        /* Explicitly allow image crawlers — images are hosted on Cloudways
           subdomain but served through Next.js Image Optimization.
           This ensures Google Images indexes all optimized images. */
        userAgent: "Googlebot-Image",
        allow: "/",
      },
    ],
    sitemap: "https://www.webspires.com.pk/sitemap.xml",
  };
}
