/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: "the-headless-blog.local" },
      { hostname: "theheadlessblog.kinsta.cloud" },
    ],
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true,
};

module.exports = nextConfig;