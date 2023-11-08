/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "fieldmanager.blob.core.windows.net",
      "images.pexels.com",
    ],
  },
};

module.exports = nextConfig;
