import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: { deviceSizes: [640, 750, 828, 1080, 1200, 1280, 1920] },
  devIndicators: false,
};

export default nextConfig;
