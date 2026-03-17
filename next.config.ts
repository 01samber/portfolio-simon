import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio-simon",
  assetPrefix: "/portfolio-simon/",
  images: { unoptimized: true },
};

export default nextConfig;
