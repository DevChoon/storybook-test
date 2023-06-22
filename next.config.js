/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  publicRuntimeConfig: {
    staticFolder: "/assets",
  },
  webpack(config) {
    config.resolve.modules.push(__dirname); // 추가
    return config;
  },
};

module.exports = nextConfig;
