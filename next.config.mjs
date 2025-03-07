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
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "sugamatourist.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "5.imimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.vrlgroup.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.srstravels.co.in",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
