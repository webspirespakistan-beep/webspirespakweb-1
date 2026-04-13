/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Remove X-Powered-By header (security + smaller response) */
  poweredByHeader: false,

  /* Enable gzip compression (60-70% smaller text assets on slow 4G) */
  compress: true,

  images: {
    /* Serve modern formats — AVIF is 50% smaller than WebP, WebP is 30% smaller than JPEG */
    formats: ["image/avif", "image/webp"],
    /* Cache optimized images for 30 days — reduces re-processing */
    minimumCacheTTL: 2592000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.webspires.com.pk",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "wordpress-1196470-4364598.cloudwaysapps.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Redirect non-www to www
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "webspires.com.pk",
          },
        ],
        destination: "https://www.webspires.com.pk/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
