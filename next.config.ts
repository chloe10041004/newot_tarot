import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.yes24.com",
        pathname: "/goods/**",
      },
    ],
  },
  async redirects() {
    return [{ source: "/book", destination: "/", permanent: true }];
  },
};

export default nextConfig;
