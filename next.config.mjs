/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['http://www.dandelicity.mrc.gov.in'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "www.dandelicity.mrc.gov.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.dandelicity.mrc.gov.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "imgs.search.brave.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
