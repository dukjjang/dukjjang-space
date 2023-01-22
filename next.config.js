/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["links.papareact.com", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
