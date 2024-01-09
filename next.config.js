/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["the-headless-blog.local", "theheadlessblog.kinsta.cloud"],
  },
};

module.exports = nextConfig;