import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `@import "src/styles/variables.scss";`,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": "./src",
      "@styles": "./src/styles",
    };
    return config;
  },
};

export default nextConfig;
