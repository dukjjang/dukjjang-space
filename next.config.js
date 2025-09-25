/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["links.papareact.com", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
