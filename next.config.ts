import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "flagcdn.com" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
      { protocol: "https", hostname: "www.google.com" },
      { protocol: "https", hostname: "translate.googleapis.com" },
      { protocol: "https", hostname: "translate.google.com" },
    ],
  },
};

export default nextConfig;
