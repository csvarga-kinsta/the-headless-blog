/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'the-headless-blog.local'
      },
      {
        protocol: 'https',
        hostname: 'theheadlessblog.kinsta.cloud'
      },
    ],
  },
};

module.exports = nextConfig;