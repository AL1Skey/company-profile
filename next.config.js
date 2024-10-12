/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
   assetPrefix: './',
  distDir: "dist",
  output: "export",
};

module.exports = nextConfig;
