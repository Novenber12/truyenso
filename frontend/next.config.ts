import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Bỏ qua tất cả các lỗi khi build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
